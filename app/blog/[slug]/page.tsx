import React from 'react';
import { useRouter } from 'next/router';

const BlogPost = () => {
  const { query } = useRouter();
  const { slug } = query;

  const post = {
    title: 'Example Blog Post',
    content: 'This is the content of the example blog post...',
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <div className="text-lg">{post.content}</div>
    </div>
  );
};

export default BlogPost;