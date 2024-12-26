// app/sitemap.xml/route.ts
import { NextResponse } from "next/server";

export async function GET() {
  const siteUrl = "https://www.insidepicoin.com";
  const staticPages = ["/", "/blog", "/about", "/about-pi", "/pi-news"];
  const dynamicPages = await getDynamicPages();

  const urls = [...staticPages, ...dynamicPages];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${urls
    .map(
      (url) => `
    <url>
      <loc>${siteUrl}${url}</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
      <changefreq>daily</changefreq>
      <priority>${url === "/" ? "1.0" : "0.7"}</priority>
    </url>
  `
    )
    .join("")}
</urlset>`;

  return new NextResponse(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}

async function getDynamicPages() {
  // Replace this with your logic to fetch dynamic routes (e.g., from a database or API)
  return ["/blog/introduction-to-pi-network", "/pi-news/mainnet-launch-date", "/blog/how-to-mine-pi-coin"];
}
