"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { prisma } from "../../lib/prisma";
import { requireSession } from "../../lib/session";
import { normalizeImageUrl } from "../../lib/image-url";

function readArticle(formData) {
  const article = {
    titleAr: String(formData.get("titleAr") || "").trim(),
    titleEn: String(formData.get("titleEn") || "").trim(),
    contentAr: String(formData.get("contentAr") || "").trim(),
    contentEn: String(formData.get("contentEn") || "").trim(),
    image: String(formData.get("image") || "").trim(),
  };

  if (Object.values(article).some((value) => !value)) {
    throw new Error("All article fields are required.");
  }

  try {
    const imageUrl = new URL(article.image);
    if (imageUrl.protocol !== "https:") {
      throw new Error("Image URL must use HTTPS.");
    }
  } catch {
    throw new Error("Image must be a valid URL.");
  }

  return { ...article, image: normalizeImageUrl(article.image) };
}

function makeSlug(title) {
  const slug = title
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[^\w\s-]/g, "")
    .trim()
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");

  return slug || `article-${Date.now()}`;
}

export async function createArticle(formData) {
  await requireSession();
  const article = readArticle(formData);
  const baseSlug = makeSlug(article.titleEn);
  let slug = baseSlug;
  let suffix = 2;

  while (await prisma.article.findUnique({ where: { slug } })) {
    slug = `${baseSlug}-${suffix}`;
    suffix += 1;
  }

  await prisma.article.create({ data: { ...article, slug } });
  revalidatePath("/");
  redirect("/");
}

export async function updateArticle(formData) {
  await requireSession();
  const id = String(formData.get("id") || "");
  if (!id) throw new Error("Article id is required.");

  await prisma.article.update({
    where: { id },
    data: readArticle(formData),
  });
  revalidatePath("/");
  redirect("/");
}

export async function deleteArticle(formData) {
  await requireSession();
  const id = String(formData.get("id") || "");
  if (!id) throw new Error("Article id is required.");

  await prisma.article.delete({ where: { id } });
  revalidatePath("/");
}
