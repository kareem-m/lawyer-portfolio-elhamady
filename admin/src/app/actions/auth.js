"use server";

import bcrypt from "bcryptjs";
import { redirect } from "next/navigation";
import { createSession, destroySession } from "../../lib/session";

export async function login(_previousState, formData) {
  const email = String(formData?.get("email") || "").trim().toLowerCase();
  const password = String(formData.get("password") || "");
  const expectedEmail = String(process.env.ADMIN_EMAIL || "")
    .trim()
    .replace(/^["']|["']$/g, "")
    .toLowerCase();
  const passwordHash = String(process.env.ADMIN_PASSWORD_HASH || "")
    .trim()
    .replace(/^["']|["']$/g, "");

  if (!expectedEmail || !passwordHash) {
    return { error: "Admin credentials are not configured." };
  }

  const passwordMatches = await bcrypt.compare(password, passwordHash);
  if (email !== expectedEmail || !passwordMatches) {
    return { error: "Invalid email or password." };
  }

  await createSession();
  redirect("/");
}

export async function logout() {
  await destroySession();
  redirect("/login");
}