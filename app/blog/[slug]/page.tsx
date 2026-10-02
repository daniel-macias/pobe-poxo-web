"use client";

import { useLanguage } from "@/components/LanguageProvider";
import PageShell from "@/components/PageShell";
// app/blog/[slug]/page.tsx


interface BlogPostProps {
  params: {
    slug: string;
  };
}

export default function BlogPost({ params }: BlogPostProps) {
  const { t } = useLanguage();
  const { slug } = params;

  // Example static data for the blog post
  const post = {
    title: 'Example Blog Post',
    content: 'This is the content of the example blog post...',
  };

  return (
    <PageShell><div className="page-container">
      <h1 className="page-title mb-6">{t(post.title)}</h1>
      <div className="text-lg">{t(post.content)}</div>
    </div></PageShell>
  );
}
