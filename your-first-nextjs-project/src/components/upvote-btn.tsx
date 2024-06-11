// run this component on browser
"use client";

import React, { useState } from "react";

export default function UpvoteButton() {
  const [upvoteCount, setUpvoteCount] = useState(0);
  return (
    <button
      onClick={() => {
        setUpvoteCount(upvoteCount + 1);
      }}
      className="bg-blue-600 text-neutral-200 p-2 mt-10"
    >
      {upvoteCount}
      Upvote
    </button>
  );
}
