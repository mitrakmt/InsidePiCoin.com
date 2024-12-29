import glob from 'fast-glob'
import articles from '../data/articlesData.mjs';  // Adjust path as necessary

async function loadEntries(directory) {
  return (
    await Promise.all(
      articles.map((article) => {
        try {
          // Dynamically generate the href based on the directory and article
          const href = `/${directory}/${article.title.replace(/\s+/g, '-').toLowerCase()}`;

          // Return the article with all metadata and the generated href
          return {
            ...article,
            href: href, // Add the dynamically generated href here
          };
        } catch (error) {
          console.error(`Error loading article:`, error);
          return null; // Skip invalid articles
        }
      })
    )
  )
    .filter((entry) => entry && entry.href) // Filter out invalid articles
    .sort((a, b) => (b.date || '').localeCompare(a.date || '')); // Sort by date
}


export function loadArticles() {
  return loadEntries('blog', 'article')
}

export function loadNews() {
  return loadEntries('pi-news', 'post')
}

