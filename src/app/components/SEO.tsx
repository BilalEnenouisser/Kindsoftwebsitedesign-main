import { useEffect } from 'react';
import { useLocation } from 'react-router';

const SITE_URL = 'https://kindsoftua.com';

interface SEOProps {
    title: string;
    description?: string;
    noindex?: boolean;
    canonicalPath?: string; // optional override; defaults to current path
}

export function SEO({ title, description, noindex = false, canonicalPath }: SEOProps) {
    const location = useLocation();

    useEffect(() => {
        document.title = title;

        const updateMeta = (name: string, content: string, isProperty = false) => {
            const selector = isProperty ? `meta[property="${name}"]` : `meta[name="${name}"]`;
            let meta = document.querySelector(selector);
            if (meta) {
                meta.setAttribute('content', content);
            } else {
                meta = document.createElement('meta');
                if (isProperty) {
                    meta.setAttribute('property', name);
                } else {
                    meta.setAttribute('name', name);
                }
                meta.setAttribute('content', content);
                document.head.appendChild(meta);
            }
        };

        const updateLink = (rel: string, href: string) => {
            let link = document.querySelector(`link[rel="${rel}"]`);
            if (link) {
                link.setAttribute('href', href);
            } else {
                link = document.createElement('link');
                link.setAttribute('rel', rel);
                link.setAttribute('href', href);
                document.head.appendChild(link);
            }
        };

        updateMeta('title', title);
        updateMeta('og:title', title, true);
        updateMeta('twitter:title', title);

        if (description) {
            updateMeta('description', description);
            updateMeta('og:description', description, true);
            updateMeta('twitter:description', description);
        }

        // Robots meta
        const robotsContent = noindex ? 'noindex, nofollow' : 'index, follow';
        updateMeta('robots', robotsContent);

        // Canonical link — only set for indexable pages
        const path = canonicalPath ?? location.pathname;
        const canonicalUrl = SITE_URL + path.replace(/\/$/, '') || SITE_URL + '/';

        if (!noindex) {
            updateLink('canonical', canonicalUrl);
            updateMeta('og:url', canonicalUrl, true);
            updateMeta('twitter:url', canonicalUrl, true);
        } else {
            // Remove canonical on noindex pages so bots don't get confused
            const existingCanonical = document.querySelector('link[rel="canonical"]');
            if (existingCanonical) existingCanonical.remove();
        }

        return () => {
            // Reset robots when navigating away
            updateMeta('robots', 'index, follow');
        };
    }, [title, description, noindex, canonicalPath, location.pathname]);

    return null;
}
