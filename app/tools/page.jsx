import ClientComponent from "./ClientComponent";

export const metadata = {
  title: "문서킹 모든 파일 변환 도구 모음 - PDF/워드/이미지/엑셀 변환",
  description: "PDF 변환, 워드 변환, 엑셀 변환, 이미지 변환 등 모든 파일 변환을 한 곳에서! 빠르고 안전하며 100% 무료, 클릭 몇 번이면 끝나는 문서킹 도구 모음.",
  keywords: [
    "PDF 변환", "워드 변환", "엑셀 변환", "이미지 변환", "파일 변환 도구",
    "무료 파일 변환", "온라인 파일 변환", "문서킹"
  ],
  alternates: {
    canonical: "https://www.networkkings.website/tools",
  },
  openGraph: {
    title: "문서킹 모든 파일 변환 도구 모음 - PDF/워드/이미지/엑셀 변환",
    description: "PDF/워드/엑셀/이미지 등 모든 파일 변환을 한 번에! 누구나 무료로 쓸 수 있는 올인원 변환 도구, 문서킹.",
    url: "https://www.networkkings.website/tools",
    images: [
      { url: "/og-image.png", width: 1200, height: 630, alt: "문서킹 모든 파일 변환 도구" }
    ],
    siteName: "문서킹",
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "문서킹 모든 파일 변환 도구 모음 - PDF/워드/이미지/엑셀 변환",
    description: "PDF/워드/엑셀/이미지 등 모든 파일 변환을 한 번에! 누구나 무료로 쓸 수 있는 올인원 변환 도구, 문서킹.",
    images: ["/og-image.png"]
  }
};

export default function Page() {
  return <ClientComponent />;
}