import ReactMarkdown from "react-markdown";
import Image from "next/image";
import { blogPosts } from "@/data/blogPosts";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import "../blog.scss";

export default async function BlogPost({ params }) {

    const { locale, slug } = await params;

    const post = blogPosts.find(
        p => p.slug === slug
    );

    if (!post)
        return <h1>Not Found</h1>;

    const article = post[locale];

    return (
        <>
            <Navbar />

            <div className="articlePage">
                <div className="container">

                    <h1>{article.title}</h1>

                    <Image src={post.image} alt={article.title} width={1200} height={675} priority />

                    <ReactMarkdown>
                        {article.content}
                    </ReactMarkdown>

                </div>
            </div>

            <Footer />
        </>
    );
}