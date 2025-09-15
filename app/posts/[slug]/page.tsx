import { posts } from "../../data/posts";
import LikeButton from "../../components/LikeButton";

interface PostPageProps {
  params: { slug: string };
}

export default function PostPage({ params }: PostPageProps) {
  const post = posts.find((p) => p.id === Number(params.slug));

  if (!post) {
    return <p className="p-10">Post não encontrado.</p>;
  }

  return (
    <main className="max-w-3xl mx-auto py-10 px-6">
      <h1 className="text-4xl font-extrabold mb-6">{post.title}</h1>
      <article className="prose dark:prose-invert">
        <p className="whitespace-pre-line">{post.content}</p>
      </article>
      <div className="mt-6">
        <LikeButton />
      </div>
    </main>
  );
}