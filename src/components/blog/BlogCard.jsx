import removeMarkdown from "remove-markdown";
import Link from "next/link";
import "./BlogCard.scss";

function getExcerpt(content, maxLength = 120) {
    const text = removeMarkdown(content).replace(/\s+/g, " ").trim();

    return text.length > maxLength
        ? text.slice(0, maxLength) + " ..."
        : text;
}

export default function BlogCard({ post, locale }) {

    const article = post[locale];

    return (
        <div className="blogCard" data-aos="fade-up">

            <img src={post.image} alt={article.title} />

            <h2>{article.title}</h2>

            <p>{getExcerpt(article.content)}</p>

            <Link href={`/${locale}/blog/${post.slug}`}>
                {locale === "ar"
                    ? "قراءة المقال"
                    : "Read Article"}
            </Link>

        </div>
    );
}