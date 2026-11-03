"use client";

import Link from "next/link";
import { deleteArticle } from "./actions/articles";
import Swal from "sweetalert2";

export default function ArticleList({ articles }) {
  async function confirmDelete(event) {
    const form = event.currentTarget;
    if (form.dataset.confirmed === "true") {
      delete form.dataset.confirmed;
      return;
    }

    event.preventDefault();
    const result = await Swal.fire({
      title: "Delete article?",
      text: "This action cannot be undone.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it",
      cancelButtonText: "Cancel",
      confirmButtonColor: "#8d3c3c",
      cancelButtonColor: "#555b66",
      background: "#191b1f",
      color: "#f5f5f5",
    });

    if (result.isConfirmed) {
      form.dataset.confirmed = "true";
      form.requestSubmit();
    }
  }

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
            <form action={deleteArticle} onSubmit={confirmDelete}>
              <input type="hidden" name="id" value={article.id} />
              <button type="submit" className="button danger">Delete</button>
            </form>
          </div>
        </article>
      ))}
    </div>
  );
}
