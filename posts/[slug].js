import { useRouter } from 'next/router';

export default function Post() {
  const router = useRouter();
  const { slug } = router.query;

  // Fetch the blog post content based on the slug
  // You can use a static JSON file, Markdown files, or a CMS
  const post = {
    title: 'First Blog Post',
    content: 'This is the content of the first blog post.',
  };

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
}