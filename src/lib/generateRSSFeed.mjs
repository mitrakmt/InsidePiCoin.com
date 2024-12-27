import fs from "fs";
import path from "path";
import RSS from "rss";

export default function generateRSSFeed() {
    const feed = new RSS({
        title: "Inside Pi Coin",
        description: "Stay updated with our latest articles.",
        feed_url: "https://www.insidepicoin.com/rss.xml",
        site_url: "https://www.insidepicoin.com",
        language: "en",
    });
    
  const blogDir = path.join(process.cwd(), "src", "app", "blog");
  const articleFolders = fs
    .readdirSync(blogDir, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name);

  articleFolders.forEach((folderName) => {
    const articleDir = path.join(blogDir, folderName);
    const pageFilePath = path.join(articleDir, "page.mdx");

    if (fs.existsSync(pageFilePath)) {
      const content = fs.readFileSync(pageFilePath, "utf-8");
      const slug = folderName;
      const title = slug.replace(/-/g, " ");
      const link = `https://www.insidepicoin.com/blog/${slug}`;

      feed.item({
        title,
        description: content.substring(0, 200),
        url: link,
        guid: link,
        date: new Date(),
      });
    }
  });

  const outputPath = path.join(process.cwd(), "public", "rss.xml");
  fs.writeFileSync(outputPath, feed.xml({ indent: true }));
  console.log("RSS feed generated successfully!");
}
