import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonicalPath?: string;
  ogType?: string;
  jsonLd?: object | object[];
}

const SITE_URL = 'https://himanshuparashar.com';
const SITE_NAME = 'Himanshu Parashar — Media & Brand Consultant';
const DEFAULT_OG_IMAGE = 'https://ik.imagekit.io/ib9n0o3ps/IMG-20250821-WA0070%20-%20Himanshu%20Parashar.jpg';

function setMetaTag(attribute: string, key: string, content: string) {
  let element = document.querySelector(`meta[${attribute}="${key}"]`);
  if (element) {
    element.setAttribute('content', content);
  } else {
    element = document.createElement('meta');
    element.setAttribute(attribute, key);
    element.setAttribute('content', content);
    document.head.appendChild(element);
  }
}

function setCanonicalLink(url: string) {
  let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
  if (link) {
    link.href = url;
  } else {
    link = document.createElement('link');
    link.rel = 'canonical';
    link.href = url;
    document.head.appendChild(link);
  }
}

function setJsonLd(id: string, data: object) {
  let script = document.getElementById(id) as HTMLScriptElement;
  if (script) {
    script.textContent = JSON.stringify(data);
  } else {
    script = document.createElement('script');
    script.id = id;
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(data);
    document.head.appendChild(script);
  }
}

function removeJsonLd(id: string) {
  const script = document.getElementById(id);
  if (script) script.remove();
}

export function SEO({
  title,
  description,
  keywords,
  canonicalPath = '/',
  ogType = 'website',
  jsonLd
}: SEOProps) {
  useEffect(() => {
    // Page Title — optimized format with brand name
    document.title = `${title} | Himanshu Parashar`;

    // Standard Meta Tags
    setMetaTag('name', 'description', description);
    setMetaTag('name', 'title', `${title} | Himanshu Parashar`);

    if (keywords) {
      setMetaTag('name', 'keywords', keywords);
    }

    // Canonical URL
    const canonicalUrl = `${SITE_URL}${canonicalPath}`;
    setCanonicalLink(canonicalUrl);

    // Open Graph Tags
    setMetaTag('property', 'og:type', ogType);
    setMetaTag('property', 'og:url', canonicalUrl);
    setMetaTag('property', 'og:title', `${title} | Himanshu Parashar`);
    setMetaTag('property', 'og:description', description);
    setMetaTag('property', 'og:image', DEFAULT_OG_IMAGE);
    setMetaTag('property', 'og:site_name', SITE_NAME);
    setMetaTag('property', 'og:locale', 'en_IN');

    // Twitter Card Tags
    setMetaTag('name', 'twitter:card', 'summary_large_image');
    setMetaTag('name', 'twitter:url', canonicalUrl);
    setMetaTag('name', 'twitter:title', `${title} | Himanshu Parashar`);
    setMetaTag('name', 'twitter:description', description);
    setMetaTag('name', 'twitter:image', DEFAULT_OG_IMAGE);

    // Page-specific JSON-LD
    if (jsonLd) {
      if (Array.isArray(jsonLd)) {
        jsonLd.forEach((data, index) => {
          setJsonLd(`page-jsonld-${index}`, data);
        });
      } else {
        setJsonLd('page-jsonld-0', jsonLd);
      }
    }

    // BreadcrumbList JSON-LD (auto-generated for every page)
    const breadcrumbData = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": SITE_URL
        },
        ...(canonicalPath !== '/' ? [{
          "@type": "ListItem",
          "position": 2,
          "name": title.split('|')[0].trim(),
          "item": canonicalUrl
        }] : [])
      ]
    };
    setJsonLd('breadcrumb-jsonld', breadcrumbData);

    // Cleanup page-specific JSON-LD on unmount
    return () => {
      if (jsonLd) {
        if (Array.isArray(jsonLd)) {
          jsonLd.forEach((_, index) => removeJsonLd(`page-jsonld-${index}`));
        } else {
          removeJsonLd('page-jsonld-0');
        }
      }
      removeJsonLd('breadcrumb-jsonld');
    };
  }, [title, description, keywords, canonicalPath, ogType, jsonLd]);

  return null;
}
