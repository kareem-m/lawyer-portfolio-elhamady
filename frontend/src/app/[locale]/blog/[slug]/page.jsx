import ReactMarkdown from "react-markdown";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getArticleBySlug } from "@/lib/articles";

import "../blog.scss";

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