import React from 'react';
import Link from 'next/link';

const Blog = () => {
  const posts = [
    { slug: 'example-blog-post', title: 'Example Blog Post' },
    // Add more posts here...
  ];

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold mb-4">Blog</h1>
      <ul className="space-y-4">
        {posts.map((post) => (
          <li key={post.slug} className="text-xl">
            <Link href={`/blog/${post.slug}`}>
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Blog;