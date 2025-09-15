import { posts } from "./data/posts";
import PostCard from "./components/PostCard";

export default function Home() {
  return (
    <main className="max-w-3xl mx-auto py-10 px-6">
      <h1 className="text-4xl font-extrabold mb-10">Meu Blog</h1>
      <div>
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </main>
  );
}
