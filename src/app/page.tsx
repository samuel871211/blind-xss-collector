'use client'
import { CSSProperties, useEffect } from "react";

const rootStyle: CSSProperties = { fontSize: 26 }

export default function Home() {
  useEffect(() => alert('malicious script executed!!!'), [])
  return (
    <div style={rootStyle}>
      This is an example page that contains malicious script when page load
    </div>
  );
}
