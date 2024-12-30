import glob from 'fast-glob'

async function loadEntries(directory, metaName) {
  return (
    await Promise.all(
      (await glob('**/page.mdx', { cwd: `src/app/${directory}` })).map(
        async (filename) => {
          let metadata = (await import(`../app/${directory}/${filename}`))[
            metaName
          ]
          return {
            ...metadata,
            metadata,
            href: `/${directory}/${filename.replace(/\/page\.mdx$/, '')}`,
          }
        },
      ),
    )
  ).sort((a, b) => b.date.localeCompare(a.date))
}


export function loadArticles() {
  return loadEntries('blog', 'article')
}

async function loadNewsEntries(metaName) {
  return (
    await Promise.all(
      (await glob('**/page.mdx', { cwd: `src/app/pi-news` })).map(
        async (filename) => {
          console.log('filename', filename)
          let metadata = (await import(`../app/pi-news/${filename}`))[metaName]
          return {
            ...metadata,
            metadata,
            href: `/pi-news/${filename.replace(/\/page\.mdx$/, '')}`,
          }
        },
      ),
    )
  ).sort((a, b) => b.date.localeCompare(a.date))
}
 

export function loadNews() {
  return loadNewsEntries('article')
}

