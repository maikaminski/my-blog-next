"use client";

import { useState } from "react";

export default function LikeButton() {
  const [likes, setLikes] = useState(0);

  return (
    <button
      onClick={() => setLikes(likes + 1)}
      className="
        px-4 py-2 rounded-xl font-semibold transition-colors
        bg-blue-200 text-blue-900 hover:bg-blue-300
        dark:bg-purple-700 dark:text-purple-100 dark:hover:bg-purple-600
      "
    >
      👍 Curtir {likes > 0 && <span>({likes})</span>}
    </button>
  );
}