import { useEffect, useState, useRef } from 'react';
import { useInView, animate } from 'motion/react';
import { cn } from '../lib/utils';

interface NumberCounterProps {
    end: number;
    suffix?: string;
    className?: string;
    duration?: number;
}

export function NumberCounter({ end, suffix = '', className = '', duration = 2 }: NumberCounterProps) {
    const nodeRef = useRef<HTMLSpanElement>(null);
    const isInView = useInView(nodeRef, { once: true, margin: '-50px' });
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (isInView) {
            const controls = animate(0, end, {
                duration: duration,
                ease: [0.22, 1, 0.36, 1], // Custom slow-out curve for premium feel
                onUpdate(value) {
                    setCount(Math.floor(value));
                },
            });
            return () => controls.stop();
        }
    }, [isInView, end, duration]);

    return (
        <span ref={nodeRef} className={cn("inline-flex items-center", className)}>
            {count}
            {suffix}
        </span>
    );
}
