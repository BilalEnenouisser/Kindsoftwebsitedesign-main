import { useEffect } from 'react';

interface SEOProps {
    title: string;
    description?: string;
    noindex?: boolean;
}

export function SEO({ title, description, noindex = false }: SEOProps) {
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

        updateMeta('title', title);
        updateMeta('og:title', title, true);
        updateMeta('twitter:title', title);

        if (description) {
            updateMeta('description', description);
            updateMeta('og:description', description, true);
            updateMeta('twitter:description', description);
        }

        // Handle robots meta tag
        const robotsContent = noindex ? 'noindex, nofollow' : 'index, follow';
        updateMeta('robots', robotsContent);

        return () => {
            // Reset robots to indexable when leaving the page
            updateMeta('robots', 'index, follow');
        };
    }, [title, description, noindex]);

    return null;
}
