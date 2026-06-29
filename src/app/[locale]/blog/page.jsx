import { blogPosts } from "@/data/blogPosts";
import BlogCard from "@/components/blog/BlogCard";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import "./blog.scss";

export default async function Blog({ params }) {

    const { locale } = await params;

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

                    <div className="blogGrid">

                        {
                            blogPosts.map((post) => (
                                <BlogCard
                                    key={post.slug}
                                    post={post}
                                    locale={locale}
                                />
                            ))
                        }

                    </div>

                </div>
            </section>

            <Footer />
        </>
    );
}