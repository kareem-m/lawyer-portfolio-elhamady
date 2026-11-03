import Link from "next/link";
import { redirect } from "next/navigation";
import ArticleList from "./ArticleList";
import { logout } from "./actions/auth";
import { getArticles } from "../lib/dal";
import { hasValidSession } from "../lib/session";

export const instant = false;

export default async function Home() {
  if (!(await hasValidSession())) redirect("/login");
  const articles = await getArticles();

  return (
    <main className="dashboard">
      <header className="page-heading">
        <div><p className="eyebrow">Admin portal</p><h1>Blog articles</h1><p className="muted">Manage your Arabic and English content.</p></div>
        <div className="header-actions">
          <Link href="/articles/new" className="button">Add blog</Link>
          <form action={logout}><button className="button secondary" type="submit">Log out</button></form>
        </div>
      </header>
      <ArticleList articles={articles} />
    </main>
  );
}
