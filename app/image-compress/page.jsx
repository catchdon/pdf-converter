import ClientComponent from "./ClientComponent";

// app/image-compress/page.jsx 상단에 추가
export const metadata = {
  title: "이미지 용량 줄이기 - JPG, PNG, HEIC, WEBP 무료 압축 | 문서킹",
  description: "이미지 품질을 조절해 용량을 1/10까지 줄이세요! JPG, PNG, WEBP, HEIC 등 다양한 포맷 지원, 완전 무료. 파일 손실 없는 고품질 이미지 압축, 문서킹에서 빠르고 쉽게!",
  keywords: [
    "이미지 압축", "JPG 압축", "PNG 압축", "HEIC 압축", "WEBP 압축",
    "무료 이미지 용량 줄이기", "이미지 퀄리티 조절", "이미지 최적화", "문서킹"
  ],
  alternates: {
    canonical: "https://www.networkkings.website/image-compress",
  },
  openGraph: {
    title: "이미지 용량 줄이기 - JPG, PNG, HEIC, WEBP 무료 압축 | 문서킹",
    description: "JPG, PNG, HEIC, WEBP 이미지를 고품질로 빠르게 압축! 무료로 쉽고 빠르게 이미지 용량을 줄여보세요.",
    url: "https://www.networkkings.website/image-compress",
    images: [
      { url: "/og-image.png", width: 1200, height: 630, alt: "이미지 용량 줄이기" }
    ],
    siteName: "문서킹",
    locale: "ko_KR",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "이미지 용량 줄이기 - JPG, PNG, HEIC, WEBP 무료 압축 | 문서킹",
    description: "JPG, PNG, HEIC, WEBP 이미지를 고품질로 빠르게 압축! 무료로 쉽고 빠르게 이미지 용량을 줄여보세요.",
    images: ["/og-image.png"]
  }
};

export default function Page() {
  return <ClientComponent />;
}