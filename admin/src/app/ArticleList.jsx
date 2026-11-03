"use client";

import Link from "next/link";
import { deleteArticle } from "./actions/articles";

export default function ArticleList({ articles }) {
  return (
    <div className="article-list">
      {articles.length === 0 && <p className="empty-state">No articles yet. Add your first blog article.</p>}
      {articles.map((article) => (
        <article className="article-row" key={article.id}>
          <img src={`/api/image?url=${encodeURIComponent(article.image)}`} alt="" />
          <div className="article-summary">
            <h2>{article.titleEn}</h2>
            <p>{article.titleAr}</p>
          </div>
          <div className="row-actions">
            <Link href={`/articles/${article.id}`} className="button secondary">Edit</Link>
            <form action={deleteArticle}>
              <input type="hidden" name="id" value={article.id} />
              <button type="submit" className="button danger">Delete</button>
            </form>
          </div>
        </article>
      ))}
    </div>
  );
}
