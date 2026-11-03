import { NextResponse } from "next/server";

const ALLOWED_HOSTS = new Set([
  "drive.google.com",
  "lh3.googleusercontent.com",
  "drive.usercontent.google.com",
]);

export async function GET(request) {
  const imageUrl = new URL(request.url).searchParams.get("url");
  if (!imageUrl) {
    return NextResponse.json({ error: "Image URL is required." }, { status: 400 });
  }

  let url;
  try {
    url = new URL(imageUrl);
  } catch {
    return NextResponse.json({ error: "Invalid image URL." }, { status: 400 });
  }

  if (url.protocol !== "https:" || !ALLOWED_HOSTS.has(url.hostname)) {
    return NextResponse.json({ error: "Image host is not allowed." }, { status: 400 });
  }

  const response = await fetch(url, { cache: "no-store" });
  const contentType = response.headers.get("content-type") || "";
  if (!response.ok || !contentType.startsWith("image/")) {
    return NextResponse.json({ error: "Could not load image." }, { status: 502 });
  }

  return new NextResponse(response.body, {
    headers: {
      "Cache-Control": "public, max-age=3600, stale-while-revalidate=86400",
      "Content-Type": contentType,
    },
  });
}
