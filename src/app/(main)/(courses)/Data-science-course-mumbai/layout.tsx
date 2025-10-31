"use client";

import { usePathname } from "next/navigation";
import Head from "next/head";
import { extractMetaFromPath } from "../../../utils/extractMeta";

export default function DynamicLayout({ children }: { children: React.ReactNode }) {
  const path = usePathname();
  const { title, description } = extractMetaFromPath(path);

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
      </Head>
      {children}
    </>
  );
}
