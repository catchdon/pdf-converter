import ClientComponent from "./ClientComponent";

export const metadata = {
  title: "PDF 분할 - 원하는 페이지 범위로 나누기 | 문서킹",
  description: "PDF 파일을 원하는 페이지 단위로 쉽고 빠르게 분할하세요! 여러 범위 지정, 무료 온라인 PDF 쪼개기 서비스.",
  keywords: [
    "PDF 분할", "PDF 쪼개기", "PDF 나누기", "PDF 여러개로", "PDF 범위 분할", "무료 PDF 분할", "문서킹"
  ],
  alternates: {
    canonical: "https://www.networkkings.website/pdf-split",
  },
  openGraph: {
    title: "PDF 분할 - 원하는 페이지 범위로 나누기 | 문서킹",
    description: "페이지 범위를 입력해서 PDF를 여러 개로 분할! 원하는 부분만 골라 안전하게 나누세요.",
    url: "https://www.networkkings.website/pdf-split",
    images: [
      { url: "/og-image.png", width: 1200, height: 630, alt: "PDF 분할" }
    ],
    siteName: "문서킹",
    locale: "ko_KR",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "PDF 분할 - 원하는 페이지 범위로 나누기 | 문서킹",
    description: "페이지 범위를 입력해서 PDF를 여러 개로 분할! 원하는 부분만 골라 안전하게 나누세요.",
    images: ["/og-image.png"]
  }
};

export default function Page() {
  return <ClientComponent />;
}