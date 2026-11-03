function getAdminApiUrl() {
    const value = process.env.NEXT_PUBLIC_ADMIN_API_URL?.trim().replace(/\/$/, "");
    if (!value || value.includes("your-admin-domain.com")) {
        throw new Error("NEXT_PUBLIC_ADMIN_API_URL must point to the running admin app.");
    }
    return value;
}

function getImageUrl(image, apiUrl) {
    if (!image) return image;

    try {
        const url = new URL(image);
        if (url.hostname === "drive.google.com" || url.hostname === "lh3.googleusercontent.com" || url.hostname === "drive.usercontent.google.com") {
            return `${apiUrl}/api/image?url=${encodeURIComponent(image)}`;
        }
    } catch {
        return image;
    }

    return image;
}

export async function getArticles() {
    const apiUrl = getAdminApiUrl();
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 8000);

    try {
        const response = await fetch(`${apiUrl}/api/articles`, {
            cache: "no-store",
            signal: controller.signal,
        });
        if (!response.ok) throw new Error(`Articles API returned ${response.status}`);

        const articles = await response.json();
        if (!Array.isArray(articles)) throw new Error("Articles API returned an invalid response.");
        return articles.map((article) => ({
            ...article,
            image: getImageUrl(article.image, apiUrl),
        }));
    } finally {
        clearTimeout(timeout);
    }
}

export async function getArticleBySlug(slug) {
    const articles = await getArticles();
    return articles.find((article) => article.slug === slug);
}
