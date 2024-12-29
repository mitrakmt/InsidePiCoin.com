import articles from '../data/articlesData.mjs';

export default function generateRSSFeed() {
  const rssItems = articles.map((article) => {
    console.log('log of article: ', article)
    return `
      <item>
        <title>${article.title}</title>
        <link>https://www.insidepicoin.com/blog/${article.slug}</link>
        <description>${article.description}</description>
        <author>${article.author.name}</author>
        <pubDate>${new Date(article.date).toUTCString()}</pubDate>
      </item>
    `;
  });

  const rssFeed = `
    <rss version="2.0">
      <channel>
        <title>Inside Pi Coin</title>
        <link>https://www.insidepicoin.com</link>
        <description>Latest news and guides on the Pi Network.</description>
        ${rssItems.join('\n')}
      </channel>
    </rss>
  `;

  return rssFeed;
}
