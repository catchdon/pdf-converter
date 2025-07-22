import ClientComponent from "./ClientComponent";

export const metadata = {
  title: "PDF 합치기 - 여러 PDF를 한 번에 병합 | 문서킹",
  description: "여러 개의 PDF 파일을 빠르게 하나로 합치세요! 최대 5개, 100MB까지 무료로 병합. 설치·회원가입 없이 즉시 이용 가능.",
  keywords: [
    "PDF 합치기", "PDF 병합", "여러 PDF 한 파일로", "무료 PDF 병합", "PDF Merge", "문서킹"
  ],
  alternates: {
    canonical: "https://www.networkkings.website/pdf-merge",
  },
  openGraph: {
    title: "PDF 합치기 - 여러 PDF를 한 번에 병합 | 문서킹",
    description: "여러 개 PDF를 업로드하고 한 번에 병합! 국내 최강 PDF 합치기 서비스. 쉽고 안전하게 사용하세요.",
    url: "https://www.networkkings.website/pdf-merge",
    images: [
      { url: "/og-image.png", width: 1200, height: 630, alt: "PDF 합치기" }
    ],
    siteName: "문서킹",
    locale: "ko_KR",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "PDF 합치기 - 여러 PDF를 한 번에 병합 | 문서킹",
    description: "여러 개 PDF를 업로드하고 한 번에 병합! 국내 최강 PDF 합치기 서비스. 쉽고 안전하게 사용하세요.",
    images: ["/og-image.png"]
  }
};

export default function Page() {
  return <ClientComponent />;
}