import removeMarkdown from "remove-markdown";
import Image from "next/image";
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
        <Link href={`/${locale}/blog/${post.slug}`} className="blogCard" data-aos="fade-up">
            <div>
                <Image src={post.image} alt={article.title} width={1200} height={675} />
                <h2>{article.title}</h2>
                <p>{getExcerpt(article.content)}</p>
            </div>

            <Link href={`/${locale}/blog/${post.slug}`}>
                {locale === "ar"
                    ? "قراءة المقال"
                    : "Read Article"}
            </Link>

        </Link>
    );
}