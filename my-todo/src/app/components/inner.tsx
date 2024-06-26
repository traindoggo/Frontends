import React from "react";

export default function Inner({ children }: { children: React.ReactNode }) {
  return <div className="flex-1 flex">{children}</div>;
}
