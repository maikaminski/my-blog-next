import Link from "next/link";
import type { post } from "../data/posts";

export default function PostCard({ post }: { post: post }) {
  return (
    <div
      className="
        border rounded-2xl p-6 shadow-sm mb-6 transition-colors
        bg-gray-50 hover:bg-gray-100 border-gray-200
        dark:bg-gray-900 dark:border-gray-700 dark:hover:bg-gray-800
      "
    >
      <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
      <p className="text-gray-700 dark:text-gray-300 line-clamp-3 mb-4">
        {post.content}
      </p>
      <Link
        href={`/posts/${post.id}`}
        className="
          inline-block px-4 py-2 rounded-lg font-medium
          bg-blue-200 text-blue-900 hover:bg-blue-300
          dark:bg-purple-700 dark:text-purple-100 dark:hover:bg-purple-600
        "
      >
        Ler mais →
      </Link>
    </div>
  );
}0