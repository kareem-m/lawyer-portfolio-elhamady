import ReactMarkdown from "react-markdown";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getArticleBySlug } from "@/lib/articles";

import "../blog.scss";

export async function generateMetadata({ params }) {
    const { locale, slug } = await params;
    const post = await getArticleBySlug(slug);
    const article = post?.[locale === "ar" ? "ar" : "en"];

    if (!post || !article) {
        return { title: "Article not found" };
    }

    return {
        title: article.title,
        description: article.content.replace(/[#*_>`~-]/g, "").slice(0, 160),
        keywords: [
            article.title,
            locale === "ar" ? "استشارات قانونية" : "legal consultation",
            locale === "ar" ? "مقالات قانونية" : "legal articles",
        ],
        alternates: {
            canonical: `/${locale === "ar" ? "" : "en/"}blog/${post.slug}`,
        },
        openGraph: {
            title: article.title,
            description: article.content.replace(/[#*_>`~-]/g, "").slice(0, 160),
            type: "article",
            images: [{ url: post.image, alt: article.title }],
        },
        twitter: {
            card: "summary_large_image",
            title: article.title,
            description: article.content.replace(/[#*_>`~-]/g, "").slice(0, 160),
            images: [post.image],
        },
    };
}

export default async function BlogPost({ params }) {

    const { locale, slug } = await params;

    const post = await getArticleBySlug(slug);

    if (!post)
        return <h1>Not Found</h1>;

    const article = post[locale === "ar" ? "ar" : "en"];
    if (!article) return <h1>Not Found</h1>;

    return (
        <>
            <Navbar />

            <div className="articlePage">
                <div className="container">

                    <h1>{article.title}</h1>

                    <img src={post.image} alt={article.title} />

                    <div className="articleContent">
                        <ReactMarkdown>{article.content}</ReactMarkdown>
                    </div>

                </div>
            </div>

            <Footer />
        </>
    );
}