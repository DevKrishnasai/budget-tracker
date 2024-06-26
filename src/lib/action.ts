"use server";
import { auth, signIn, signOut } from "@/auth";
import { LOGIN } from "@/utils/constants";
import { redirect } from "next/navigation";

export const Logout = async () => {
  await signOut({
    redirectTo: "/",
    redirect: true,
  });
};

export const Login = async () => {
  await signIn("github", {
    redirect: true,
    callbackUrl: "/dashboard",
  });
};

export const Redirect = async (path: string) => {
  const session = await auth();
  if (!session?.user) {
    redirect(LOGIN);
  }
  redirect(path);
};
