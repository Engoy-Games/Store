"use client";

import { useEffect, useState } from "react";
import Head from "next/head";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mounted, setMounted] = useState(false);

  // Ensures that the component is mounted on the client side
  useEffect(() => {
    setMounted(true);
  }, []);

  // Avoid rendering anything until the client-side rendering is complete
  if (!mounted) {
    return null;
  }

  return (
    <>
      <Head>
        <title>Login</title>
        <meta name="description" content="Login or Signup" />
      </Head>
      <html lang="en">
        <body className="flex justify-center items-center min-h-screen bg-[#1E1E1E]">
          <main>{children}</main>
        </body>
      </html>
    </>
  );
}
