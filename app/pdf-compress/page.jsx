import ClientComponent from "./ClientComponent";

export const metadata = {
  title: "PDF 용량 줄이기 - 무료 PDF 압축 | 문서킹",
  description: "PDF 파일을 최대 90%까지 압축! 고화질부터 초경량까지, 품질 저하 최소화로 빠르고 간편하게 PDF 용량을 줄이세요. 100% 무료, 설치 필요 없음.",
  keywords: [
    "PDF 압축", "PDF 용량 줄이기", "무료 PDF 압축", "PDF 파일 크기 줄이기", "PDF 경량화", "문서킹"
  ],
  alternates: {
    canonical: "https://www.networkkings.website/pdf-compress",
  },
  openGraph: {
    title: "PDF 용량 줄이기 - 무료 PDF 압축 | 문서킹",
    description: "PDF 파일을 클릭 한 번에 초간편 압축! 고화질 유지, 빠른 처리, 무료 제공. 모바일·PC 어디서나 사용.",
    url: "https://www.networkkings.website/pdf-compress",
    images: [
      { url: "/og-image.png", width: 1200, height: 630, alt: "PDF 용량 줄이기" }
    ],
    siteName: "문서킹",
    locale: "ko_KR",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "PDF 용량 줄이기 - 무료 PDF 압축 | 문서킹",
    description: "PDF 파일을 클릭 한 번에 초간편 압축! 고화질 유지, 빠른 처리, 무료 제공. 모바일·PC 어디서나 사용.",
    images: ["/og-image.png"]
  }
};

export default function Page() {
  return <ClientComponent />;
}