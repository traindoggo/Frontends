import React from "react";

export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-neutral-950 max-w-[1100px] mx-auto min-h-screen flex flex-col border-neutral-900 border-l border-r">
      {children}
    </div>
  );
}
