"use client";
import { usePathname } from "next/navigation";

// 도메인 반드시 본인걸로!
const BASE_URL = "https://www.networkkings.website";

export default function CanonicalTag() {
  const pathname = usePathname();
  const canonicalUrl = BASE_URL + pathname;

  // JSX 리턴만 해도 SSR에서 바로 <head>에 들어감
  return <link rel="canonical" href={canonicalUrl} />;
}