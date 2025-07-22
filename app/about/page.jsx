// app/about/page.jsx 상단에 추가

import ClientComponent from "./ClientComponent";

export const metadata = {
  title: "문서킹 소개 - 국내 1등 무료 문서 변환 사이트",
  description: "문서킹은 누구나 쉽게 사용할 수 있는 100% 무료 문서 변환 사이트입니다. 초고속 변환, 강력한 보안, 최고의 품질을 국내 서버에서 제공합니다. 회원가입·설치 없이, 클릭 한 번으로 파일 변환 끝!",
  keywords: "문서킹, 무료 문서 변환, PDF 변환, 이미지 변환, 오피스 변환, 국내 문서 변환 사이트, 파일 변환, 빠른 변환, 안전한 파일 삭제",
  alternates: {
    canonical: "https://www.networkkings.website/about",
  },  
  openGraph: {
    title: "문서킹 소개 - 국내 1등 무료 문서 변환 사이트",
    description: "설치도 회원가입도 필요 없는 무료 변환! PDF, 오피스, 이미지까지 국내 최적화 서버에서 초고속 처리, 최고의 보안까지.",
    url: "https://www.networkkings.website/about",
    images: [
      { url: "/og-image.png", width: 1200, height: 630, alt: "문서킹 서비스 소개" }
    ],
  }
};

export default function Page() {
  return <ClientComponent />;
}
