// @ts-check
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
    site: 'https://lukasabbe.com',
    integrations: [
        sitemap({
            // Custom pages to include/exclude
            filter: (page) => {
                // Exclude any admin or private pages
                return !page.includes('/admin/') && 
                       !page.includes('/private/') &&
                       !page.includes('/draft/');
            },
            
            // Custom URLs to add that might not be auto-discovered
            customPages: [
                'https://lukasabbe.com/',
                'https://lukasabbe.com/blog',
                'https://lukasabbe.com/projects'
            ],
            
            // Internationalization support (if needed in the future)
            i18n: {
                defaultLocale: 'en',
                locales: {
                    en: 'en-US',
                    // Add other languages here if needed
                    // sv: 'sv-SE' // Swedish
                }
            }
        })
    ],
    
    // Build configuration for better SEO
    build: {
        // Generate clean URLs without .html extension
        format: 'directory'
    }
});