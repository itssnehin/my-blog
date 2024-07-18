import Link from 'next/link';

interface Post {
  title: string;
  slug: string;
}

export default function Home() {
  const posts: Post[] = [
    { title: 'First Blog Post', slug: 'first-post' },
    { title: 'Second Blog Post', slug: 'second-post' },
    // Add more posts as needed
  ];

  return (
    <div>
      <h1>Welcome to My Blog</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={`/posts/${post.slug}`}>
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}