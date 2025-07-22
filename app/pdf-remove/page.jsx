import ClientComponent from "./ClientComponent";

export const metadata = {
  title: "PDF 페이지 제거 - 원하는 페이지만 삭제 | 문서킹",
  description: "PDF 파일에서 불필요한 페이지만 골라 빠르게 삭제! 여러 페이지 한 번에 제거 가능. 설치·회원가입 없이 무료로 이용하세요.",
  keywords: [
    "PDF 페이지 삭제", "PDF 페이지 제거", "PDF 한 장 삭제", "PDF 편집", "PDF 페이지 빼기", "무료 PDF 삭제", "문서킹"
  ],
  alternates: {
    canonical: "https://www.networkkings.website/pdf-remove",
  },
  openGraph: {
    title: "PDF 페이지 제거 - 원하는 페이지만 삭제 | 문서킹",
    description: "PDF에서 필요 없는 페이지만 골라서 삭제하세요! 쉽고 안전한 국내 대표 PDF 편집 서비스.",
    url: "https://www.networkkings.website/pdf-remove",
    images: [
      { url: "/og-image.png", width: 1200, height: 630, alt: "PDF 페이지 제거" }
    ],
    siteName: "문서킹",
    locale: "ko_KR",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "PDF 페이지 제거 - 원하는 페이지만 삭제 | 문서킹",
    description: "PDF에서 필요 없는 페이지만 골라서 삭제하세요! 쉽고 안전한 국내 대표 PDF 편집 서비스.",
    images: ["/og-image.png"]
  }
};

export default function Page() {
  return <ClientComponent />;
}