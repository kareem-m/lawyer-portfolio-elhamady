import { redirect } from "next/navigation";
import LoginForm from "./LoginForm";
import { hasValidSession } from "../../lib/session";

export const instant = false;

export default async function LoginPage() {
  if (await hasValidSession()) redirect("/");

  return (
    <main className="auth-page">
      <section className="panel">
        <p className="eyebrow">Admin portal</p>
        <h1>Sign in</h1>
        <p className="muted">Manage the legal blog content.</p>
        <LoginForm />
      </section>
    </main>
  );
}