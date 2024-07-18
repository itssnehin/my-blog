import Link from 'next/link';

export default function Home() {
  const posts = [
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
              <a>{post.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}