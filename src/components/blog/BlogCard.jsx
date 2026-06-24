import Link from "next/link";
import "./BlogCard.scss";

export default function BlogCard({ post, locale }) {

    const article = post[locale];

    return (
        <div className="blogCard" data-aos="fade-up">

            <img src={post.image} alt={article.title} />

            <h2>{article.title}</h2>

            <p>{article.excerpt}</p>

            <Link href={`/${locale}/blog/${post.slug}`}>
                {locale === "ar"
                    ? "قراءة المقال"
                    : "Read Article"}
            </Link>

        </div>
    );
}