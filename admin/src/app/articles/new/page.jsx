import ArticleForm from "../ArticleForm";
import { createArticle } from "../../actions/articles";

export default function NewArticlePage() {
  return (
    <main className="dashboard">
      <div className="page-heading">
        <div><p className="eyebrow">Content</p><h1>Add blog article</h1></div>
      </div>
      <ArticleForm action={createArticle} />
    </main>
  );
}
