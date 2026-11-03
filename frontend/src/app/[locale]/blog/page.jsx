export const dynamic = "force-dynamic";
import BlogCard from "@/components/blog/BlogCard";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getArticles } from "@/lib/articles";

import "./blog.scss";



function shuffleArray(array) {
    const shuffled = [...array];

    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));

        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }

    return shuffled;
}


export default async function Blog({ params }) {

    const { locale } = await params;
    const articles = await getArticles();

    return (
        <>
            <Navbar />

            <section className="blogPage" id="blog">
                <div className="container">

                    <h1>
                        {locale === "ar"
                            ? "المدونة القانونية"
                            : "Legal Blog"}
                    </h1>

                    {articles.length === 0 ? (
                        <p className="emptyBlogMessage">
                            {locale === "ar"
                                ? "لا توجد مقالات حالياً."
                                : "There are no articles currently."}
                        </p>
                    ) : (
                        <div className="blogGrid">
                            {shuffleArray(articles).map((post) => (
                                <BlogCard
                                    key={post.slug}
                                    post={post}
                                    locale={locale}
                                />
                            ))}
                        </div>
                    )}

                </div>
            </section>

            <Footer />
        </>
    );
}