"use server";

import bcrypt from "bcryptjs";
import { redirect } from "next/navigation";
import { createSession, destroySession } from "../../lib/session";

export async function login(_previousState, formData) {
  const password = String(formData?.get("password") || "");
  const passwordHash = String(process.env.ADMIN_PASSWORD_HASH || "")
    .trim()
    .replace(/^["']|["']$/g, "")
    .replace(/\\\$/g, "$");

  if (!passwordHash) {
    return { error: "Admin password is not configured." };
  }

  const passwordMatches = await bcrypt.compare(password, passwordHash);
  if (!passwordMatches) {
    return { error: "Invalid password." };
  }

  await createSession();
  redirect("/");
}

export async function logout() {
  await destroySession();
  redirect("/login");
}