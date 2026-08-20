import { useEffect } from 'react';

const DEFAULT_DESCRIPTION =
  'BRS Solution Enterprises provides professional electrical, construction and interior solutions for industrial, commercial and residential projects.';

/**
 * Custom hook to update document title and description meta tags on mount/route changes.
 * Acts as a lightweight alternative to larger head-management libraries.
 */
export default function useSEO(title, description = DEFAULT_DESCRIPTION) {
  useEffect(() => {
    // Update browser window / tab title
    document.title = title;

    // Locate the meta description element, or generate one if missing
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = 'description';
      document.head.appendChild(metaDescription);
    }
    
    // Set the meta content
    metaDescription.content = description;
  }, [title, description]);
}
