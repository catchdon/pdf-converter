import ClientComponent from "./ClientComponent";

export const metadata = {
  title: "PDF 페이지 추출 - 원하는 페이지만 뽑기 | 문서킹",
  description: "PDF에서 필요한 페이지만 빠르게 추출! 1,2,5-7 페이지처럼 자유롭게 지정하여 새로운 PDF로 저장하세요. 100% 무료, 회원가입·설치 불필요.",
  keywords: [
    "PDF 페이지 추출", "PDF 일부 저장", "PDF 원하는 페이지만", "PDF 추출 툴", "무료 PDF 추출", "문서킹"
  ],
  alternates: {
    canonical: "https://www.networkkings.website/pdf-extract",
  },
  openGraph: {
    title: "PDF 페이지 추출 - 원하는 페이지만 뽑기 | 문서킹",
    description: "복잡한 PDF 문서, 필요한 페이지만 쏙 골라서 새 PDF로 만드세요! 국내 최강 무료 추출 서비스.",
    url: "https://www.networkkings.website/pdf-extract",
    images: [
      { url: "/og-image.png", width: 1200, height: 630, alt: "PDF 페이지 추출" }
    ],
    siteName: "문서킹",
    locale: "ko_KR",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "PDF 페이지 추출 - 원하는 페이지만 뽑기 | 문서킹",
    description: "복잡한 PDF 문서, 필요한 페이지만 쏙 골라서 새 PDF로 만드세요! 국내 최강 무료 추출 서비스.",
    images: ["/og-image.png"]
  }
};

export default function Page() {
  return <ClientComponent />;
}