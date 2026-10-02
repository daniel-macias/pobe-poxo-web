"use client";

import { useLanguage } from "@/components/LanguageProvider";
import PageShell from "@/components/PageShell";
import React from 'react';
import Link from 'next/link';

const Blog = () => {
  const { t } = useLanguage();
  const posts = [
    { slug: 'example-blog-post', title: 'Example Blog Post' },
    // Add more posts here...
  ];

  return (
    <PageShell><div className="page-container">
      <h1 className="page-title mb-6">Blog</h1>
      <ul className="space-y-4">
        {posts.map((post) => (
          <li key={post.slug} className="text-xl">
            <Link href={`/blog/${post.slug}`}>
              {t(post.title)}
            </Link>
          </li>
        ))}
      </ul>
    </div></PageShell>
  );
};

export default Blog;