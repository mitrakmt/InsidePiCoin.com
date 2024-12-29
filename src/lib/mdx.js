import glob from 'fast-glob'
import { articles } from '../data/articlesData.mjs';  // Adjust path as necessary

async function loadEntries(directory, metaName) {
  // Filter articles that match the directory and return the necessary data
  return articles
    .filter((article) => article.href.includes(directory)) // Filter based on directory
    .map((article) => {
      return {
        ...article,
        metadata: article.metadata,
        href: article.href,
      };
    })
    .filter((entry) => entry && entry.date) // Ensure that only articles with dates are included
    .sort((a, b) => (b.date || '').localeCompare(a.date || '')); // Sort by date in descending order
}


export function loadArticles() {
  return loadEntries('blog', 'article')
}

export function loadNews() {
  return loadEntries('pi-news', 'post')
}

