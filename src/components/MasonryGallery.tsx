import React, { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { cn } from '../lib/utils'; // Use existing utility

/** Hook to handle media queries for responsive columns */
const useMedia = (queries: string[], values: number[], defaultValue: number): number => {
    const get = () => {
        if (typeof window === 'undefined') return defaultValue;
        const match = queries.findIndex(q => window.matchMedia(q).matches);
        return values[match] !== undefined ? values[match] : defaultValue;
    };

    const [value, setValue] = useState<number>(get);

    useEffect(() => {
        const handler = () => setValue(get);
        queries.forEach(q => window.matchMedia(q).addEventListener('change', handler));
        return () => queries.forEach(q => window.matchMedia(q).removeEventListener('change', handler));
    }, [queries]);

    return value;
};

/** Hook to measure element size via ResizeObserver */
const useMeasure = <T extends HTMLElement>() => {
    const ref = useRef<T | null>(null);
    const [size, setSize] = useState({ width: 0, height: 0 });

    useLayoutEffect(() => {
        if (!ref.current) return;
        const ro = new ResizeObserver(([entry]) => {
            const { width, height } = entry.contentRect;
            setSize({ width, height });
        });
        ro.observe(ref.current);
        return () => ro.disconnect();
    }, []);

    return [ref, size] as const;
};

/** Utility to ensure images are loaded before layout/animation */
const preloadImages = async (urls: string[]): Promise<void> => {
    await Promise.all(
        urls.map(
            src =>
                new Promise<void>(resolve => {
                    const img = new Image();
                    img.src = src;
                    img.onload = img.onerror = () => resolve();
                })
        )
    );
};

export interface MasonryItem {
    id: string;
    img: string;
    url?: string;
    height: number;
    title?: string;
    step?: string; // Added for Services page steps
    desc?: string; // Added for Services page descriptions
}

interface GridItem extends MasonryItem {
    x: number;
    y: number;
    w: number;
    h: number;
}

export interface MasonryGalleryProps {
    items: MasonryItem[];
    ease?: string;
    duration?: number;
    stagger?: number;
    animateFrom?: 'bottom' | 'top' | 'left' | 'right' | 'center' | 'random';
    scaleOnHover?: boolean;
    hoverScale?: number;
    blurToFocus?: boolean;
    colorShiftOnHover?: boolean;
    className?: string;
    itemClassName?: string;
}

export const MasonryGallery: React.FC<MasonryGalleryProps> = ({
    items,
    ease = 'power3.out',
    duration = 0.6,
    stagger = 0.05,
    animateFrom = 'bottom',
    scaleOnHover = true,
    hoverScale = 0.95,
    blurToFocus = true,
    colorShiftOnHover = false,
    className,
    itemClassName
}) => {
    const columns = useMedia(
        ['(min-width: 1500px)', '(min-width: 1000px)', '(min-width: 600px)', '(min-width: 400px)'],
        [4, 3, 2, 1], // Tweaked for 4 items so it lays out nicely
        1
    );

    const [containerRef, { width }] = useMeasure<HTMLDivElement>();
    const [imagesReady, setImagesReady] = useState(false);
    const hasMounted = useRef(false);

    // Initial animation calculations
    const getInitialPosition = (item: GridItem) => {
        const containerRect = containerRef.current?.getBoundingClientRect();
        if (!containerRect) return { x: item.x, y: item.y };

        let direction = animateFrom;
        if (animateFrom === 'random') {
            const dirs = ['top', 'bottom', 'left', 'right'];
            direction = dirs[Math.floor(Math.random() * dirs.length)] as any;
        }

        switch (direction) {
            case 'top': return { x: item.x, y: -200 };
            case 'bottom': return { x: item.x, y: window.innerHeight + 200 };
            case 'left': return { x: -200, y: item.y };
            case 'right': return { x: window.innerWidth + 200, y: item.y };
            case 'center': return {
                x: containerRect.width / 2 - item.w / 2,
                y: containerRect.height / 2 - item.h / 2
            };
            default: return { x: item.x, y: item.y + 100 };
        }
    };

    // Preload logic
    useEffect(() => {
        preloadImages(items.map(i => i.img)).then(() => setImagesReady(true));
    }, [items]);

    // Layout calculation
    const { grid, containerHeight } = useMemo(() => {
        if (!width) return { grid: [] as GridItem[], containerHeight: 0 };

        const colHeights = new Array(columns).fill(0);
        const gap = 24; // Premium gap
        const totalGaps = (columns - 1) * gap;
        let columnWidth = (width - totalGaps) / columns;

        // Safety check for narrow screens, give it 100% width if needed
        if (columns === 1) {
            columnWidth = width;
        }

        const gridItems = items.map(child => {
            const col = colHeights.indexOf(Math.min(...colHeights));
            const x = col * (columnWidth + gap);
            const height = (child.height / 400) * columnWidth; // Maintain aspect ratio roughly
            const y = colHeights[col];
            colHeights[col] += height + gap;
            return { ...child, x, y, w: columnWidth, h: height };
        });

        return { grid: gridItems, containerHeight: Math.max(...colHeights) };
    }, [columns, items, width]);

    // Animation logic
    useLayoutEffect(() => {
        if (!imagesReady || !grid.length) return;

        const ctx = gsap.context(() => {
            grid.forEach((item, index) => {
                const element = document.querySelector(`[data-key="${item.id}"]`);
                if (!element) return;

                const animProps = { x: item.x, y: item.y, width: item.w, height: item.h };

                if (!hasMounted.current) {
                    const start = getInitialPosition(item);
                    gsap.fromTo(
                        element,
                        {
                            opacity: 0,
                            x: start.x,
                            y: start.y,
                            width: item.w,
                            height: item.h,
                            ...(blurToFocus && { filter: 'blur(20px)' })
                        },
                        {
                            opacity: 1,
                            ...animProps,
                            ...(blurToFocus && { filter: 'blur(0px)' }),
                            duration: 1.2,
                            ease: 'power3.out',
                            delay: index * stagger
                        }
                    );
                } else {
                    gsap.to(element, {
                        ...animProps,
                        duration,
                        ease,
                        overwrite: 'auto'
                    });
                }
            });
        });

        if (grid.length > 0) hasMounted.current = true;

        return () => ctx.revert(); // Clean up gsap instances
    }, [grid, imagesReady, stagger, animateFrom, blurToFocus, duration, ease]);

    const handleMouseEnter = (id: string, element: HTMLElement) => {
        if (scaleOnHover) {
            gsap.to(element, {
                scale: hoverScale,
                duration: 0.4,
                ease: 'power2.out'
            });
        }
        if (colorShiftOnHover) {
            const overlay = element.querySelector('.color-overlay');
            if (overlay) gsap.to(overlay, { opacity: 0.9, duration: 0.4 }); 
        }
    };

    const handleMouseLeave = (id: string, element: HTMLElement) => {
        if (scaleOnHover) {
            gsap.to(element, {
                scale: 1,
                duration: 0.4,
                ease: 'power2.out'
            });
        }
        if (colorShiftOnHover) {
            const overlay = element.querySelector('.color-overlay');
            if (overlay) gsap.to(overlay, { opacity: 0, duration: 0.4 });
        }
    };

    return (
        <div
            ref={containerRef}
            className={cn('relative w-full', className)}
            style={{ height: containerHeight, minHeight: '400px' }}
        >
            {grid.map(item => (
                <div
                    key={item.id}
                    data-key={item.id}
                    className={cn(
                        'absolute overflow-hidden cursor-pointer rounded-sm transition-shadow hover:shadow-2xl group',
                        itemClassName
                    )}
                    style={{
                        willChange: 'transform, width, height, opacity, filter',
                        boxShadow: '0 10px 30px -10px rgba(0,0,0,0.1)'
                    }}
                    onClick={() => item.url && window.open(item.url, '_blank', 'noopener')}
                    onMouseEnter={e => handleMouseEnter(item.id, e.currentTarget)}
                    onMouseLeave={e => handleMouseLeave(item.id, e.currentTarget)}
                >
                    <div
                        className="w-full h-full bg-cover bg-center bg-no-repeat transition-transform duration-700 group-hover:scale-105 bg-gray-800"
                        style={{ backgroundImage: `url("${item.img}")` }}
                    >
                        {colorShiftOnHover && (
                            <div className="color-overlay absolute inset-0 bg-black/80 opacity-0 pointer-events-none transition-opacity" />
                        )}

                        {/* Static Default State on Image */}
                        <div className="absolute inset-0 p-6 flex flex-col justify-end bg-gradient-to-t from-black/90 via-black/20 to-transparent pointer-events-none group-hover:opacity-0 transition-opacity duration-300">
                            {item.title && <h3 className="text-white font-serif text-lg md:text-xl font-bold">{item.title}</h3>}
                        </div>
                    </div>


                    {/* Hover State Detail Content */}
                    <div className="absolute inset-x-0 bottom-0 p-8 flex flex-col translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none z-10">
                        {item.step && <div className="text-brand font-serif font-bold text-5xl mb-2">{item.step}</div>}
                        {item.title && <h3 className="text-white font-serif text-2xl md:text-3xl font-bold mb-3">{item.title}</h3>}
                        {item.desc && <p className="text-gray-300 font-light text-sm leading-relaxed">{item.desc}</p>}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default MasonryGallery;
