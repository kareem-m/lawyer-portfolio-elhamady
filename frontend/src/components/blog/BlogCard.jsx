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

    const article = post[locale === "ar" ? "ar" : "en"];

    return (
        <Link href={`/${locale}/blog/${post.slug}`} className="blogCard" data-aos="fade-up">
            <div>
                <img src={post.image} alt={article.title} />
                <h2>{article.title}</h2>
                <p>{getExcerpt(article.content)}</p>
            </div>

            <span className="readArticle">
                {locale === "ar"
                    ? "قراءة المقال"
                    : "Read Article"}
            </span>

        </Link>
    );
}