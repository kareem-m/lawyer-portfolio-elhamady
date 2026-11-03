import { NextResponse } from "next/server";
import { getArticles } from "../../../lib/dal";
import { getPublicImageUrl } from "../../../lib/image-url";

export async function GET() {
  const articles = await getArticles();
  return NextResponse.json(
    articles.map(({ id, slug, titleAr, titleEn, contentAr, contentEn, image, createdAt }) => ({
      id, slug, image: getPublicImageUrl(image), createdAt,
      ar: { title: titleAr, content: contentAr },
      en: { title: titleEn, content: contentEn },
    })),
    { headers: { "Cache-Control": "no-store" } },
  );
}
