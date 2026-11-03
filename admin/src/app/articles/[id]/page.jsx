import { notFound } from "next/navigation";
import ArticleForm from "../ArticleForm";
import { updateArticle } from "../../actions/articles";
import { getArticle } from "../../../lib/dal";

export const instant = false;

export default async function EditArticlePage({ params }) {
  const { id } = await params;
  const article = await getArticle(id);
  if (!article) notFound();

  return (
    <main className="dashboard">
      <div className="page-heading">
        <div><p className="eyebrow">Content</p><h1>Edit blog article</h1></div>
      </div>
      <ArticleForm action={updateArticle} article={article} />
    </main>
  );
}
