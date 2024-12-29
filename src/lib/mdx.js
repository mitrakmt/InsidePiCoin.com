import glob from 'fast-glob'

async function loadEntries(directory, metaName) {
  return (
    await Promise.all(
      (await glob('**/page.mdx', { cwd: `src/app/${directory}` })).map(
        async (filename) => {
          const filePath = `../app/${directory}/${filename}`;
          try {
            let metadata = (await import(filePath))[metaName];
            return {
              ...metadata,
              metadata,
              href: `/${directory}/${filename.replace(/\/page\.mdx$/, '')}`,
            };
          } catch (error) {
            console.error(`Error loading metadata from ${filePath}:`, error);
            return null; // Skip invalid files
          }
        },
      ),
    )
  )
    .filter((entry) => entry && entry.date) // Filter out entries without valid metadata or date
    .sort((a, b) => (b.date || '').localeCompare(a.date || '')); // Safeguard against missing dates
}


export function loadArticles() {
  return loadEntries('blog', 'article')
}

export function loadNews() {
  return loadEntries('pi-news', 'post')
}

