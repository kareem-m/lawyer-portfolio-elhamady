import { getArticles } from "@/lib/articles";

export const dynamic = "force-dynamic";

export default async function sitemap() {
  const baseUrl = "https://www.elhamady.com";
  const now = new Date();

  const pages = [
    {
      url: `${baseUrl}/`,
      lastModified: now,
    },
    {
      url: `${baseUrl}/en`,
      lastModified: now,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: now,
    },
    {
      url: `${baseUrl}/en/blog`,
      lastModified: now,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: now,
    },
    {
      url: `${baseUrl}/en/contact`,
      lastModified: now,
    },
  ];

  try {
    const articles = await getArticles();
    return pages.concat(
      articles.flatMap((article) => [
        {
          url: `${baseUrl}/blog/${article.slug}`,
          lastModified: new Date(article.createdAt),
        },
        {
          url: `${baseUrl}/en/blog/${article.slug}`,
          lastModified: new Date(article.createdAt),
        },
      ]),
    );
  } catch (error) {
    console.error("Could not load articles for sitemap.", error);
    return pages;
  }
}