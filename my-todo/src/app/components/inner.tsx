import React from "react";

export default function Inner({ children }: { children: React.ReactNode }) {
  return <div className="flex flex-1">{children}</div>;
}
