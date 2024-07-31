// app/blog/[slug]/page.tsx
import { useRouter } from 'next/navigation';

interface BlogPostProps {
  params: {
    slug: string;
  };
}

export default function BlogPost({ params }: BlogPostProps) {
  const { slug } = params;

  // Example static data for the blog post
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
}
