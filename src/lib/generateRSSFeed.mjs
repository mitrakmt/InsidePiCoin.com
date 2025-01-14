import fs from 'fs';
import path from 'path';
import articles from '../data/articlesData.mjs';

export default function generateRSSFeed() {
  const rssItems = articles.map((article) => {
    return `
      <item>
        <title>${article.title}</title>
        <link>https://www.insidepicoin.com${article.href}</link>
        <description>${article.description}</description>
        <author>Inside Pi Coin Team</author>
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

  // Define output path
  const outputPath = path.resolve('public/rss.xml');

  // Write the RSS feed to the file system
  fs.writeFileSync(outputPath, rssFeed.trim(), 'utf8');
}