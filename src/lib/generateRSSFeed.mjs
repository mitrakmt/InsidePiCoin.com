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


      // Extract metadata from the file content
      const metadataMatch = fileContent.match(/export const metadata = \{([\s\S]*?)\}/);
      const articleMatch = fileContent.match(/export const article = \{([\s\S]*?)\}/);
      
      if (metadataMatch) {
        const metadataCode = metadataMatch[1];
        const metadata = eval(`(${metadataCode})`); // Parse metadata object
        
        let author = null;

        if (articleMatch) {
          const articleCode = articleMatch[1];
          const article = eval(`({${articleCode}})`); // Parse article object
          author = article.author || null;
        }

        const title = metadata.title || folderName.replace(/-/g, " ");
        const description = metadata.description || "No description provided.";
        const link = `https://www.insidepicoin.com/blog/${folderName}`;


        feed.item({
          title,
          description: description,
          url: link,
          guid: link,
          date: new Date(),
        });
      }
    }
  });

  const outputPath = path.join(process.cwd(), "public", "rss.xml");
  fs.writeFileSync(outputPath, feed.xml({ indent: true }));
  console.log("RSS feed generated successfully!");
}









// const blogFolder = path.join(process.cwd(), "blog"); // Adjust path if needed

//   const feed = new Feed({
//     title: "Inside Pi Coin",
//     description: "Stay updated with our latest articles.",
//     feed_url: "https://www.insidepicoin.com/rss.xml",
//     site_url: "https://www.insidepicoin.com",
//     language: "en",
//     link: "https://www.insidepicoin.com/blog",
//   });

//   fs.readdirSync(blogFolder).forEach((folderName) => {
//     const pageFilePath = path.join(blogFolder, folderName, "index.mdx");
//     if (fs.existsSync(pageFilePath)) {
//       const fileContent = fs.readFileSync(pageFilePath, "utf-8");

//       // Extract metadata from the file content
//       const metadataMatch = fileContent.match(/export const metadata = \{([\s\S]*?)\}/);
//       const articleMatch = fileContent.match(/export const article = \{([\s\S]*?)\}/);
      
//       if (metadataMatch) {
//         const metadataCode = metadataMatch[1];
//         const metadata = eval(`(${metadataCode})`); // Parse metadata object
        
//         let author = null;

//         if (articleMatch) {
//           const articleCode = articleMatch[1];
//           const article = eval(`({${articleCode}})`); // Parse article object
//           author = article.author || null;
//         }

//         const title = metadata.title || folderName.replace(/-/g, " ");
//         const description = metadata.description || "No description provided.";
//         const link = `https://www.insidepicoin.com/blog/${folderName}`;

//         // Create feed item with author if available
//         const feedItem = {
//           title,
//           description,
//           url: link,
//           guid: link,
//           date: new Date(), // Replace with metadata date if available
//         };

//         if (author) {
//           feedItem.author = [
//             {
//               name: author.name || "Unknown Author",
//               email: author.email || "",
//               link: author.website || "",
//             },
//           ];
//         }

//         feed.item(feedItem);
//       }
//     }
//   });

//   // Save the RSS feed in the `public` folder
//   const outputPath = path.join(process.cwd(), "public", "rss.xml");
//   fs.writeFileSync(outputPath, feed.rss2());
//   console.log(`RSS feed generated at ${outputPath}`);
// };
