import "server-only";

import { prisma } from "./prisma";

export async function getArticles() {
  return prisma.article.findMany({ orderBy: { createdAt: "desc" } });
}

export async function getArticle(id) {
  return prisma.article.findUnique({ where: { id } });
}