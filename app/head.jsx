import { headers } from "next/headers";

export default function Head() {
  // SSR에서 현재 경로 추출
  // Next 14+에서는 headers().get("x-invoke-path")가 동작 (구버전이면 generateMetadata 사용)
  const host = "https://www.networkkings.website";
  const pathname = headers().get("x-invoke-path") || "/";
  const canonicalUrl = host + pathname;

  return (
    <>
      <title>문서킹 - 무료 파일 변환기</title>
      <meta name="description" content="문서킹에서 PDF, 워드, 엑셀, 이미지 파일을 쉽고 빠르게 무료로 변환하세요. 설치·광고·회원가입 없이 완전 무료!" />
      <meta name="keywords" content="문서킹, 파일변환, PDF변환, 이미지변환, 문서 변환기, 웹 변환툴, jpg png heic pdf xlsx ppt" />
      {/* 네이버, 구글 소유확인 */}
      <meta name="google-adsense-account" content="ca-pub-2232732758246542" />
      <meta name="naver-site-verification" content="a15e9c24bed6fa364370353014afb579be302a6a" />
      {/* 캐노니컬 */}
      <link rel="canonical" href={canonicalUrl} />
      {/* 파비콘 및 앱 아이콘 */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" href="/apple-icon.png" />
      <link rel="manifest" href="/manifest.json" />
      <link rel="icon" type="image/png" sizes="192x192" href="/web-app-manifest-192.png" />
      <link rel="icon" type="image/png" sizes="512x512" href="/web-app-manifest-512.png" />
      {/* preconnect, preload */}
      <link rel="preconnect" href="https://ssl.pstatic.net" crossOrigin="" />
      <link rel="preconnect" href="https://nam.veta.naver.com" crossOrigin="" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link rel="preload" as="style" href="/_next/static/css/0540e53a0da54d97.css" />
      {/* OG 태그 */}
      <meta property="og:title" content="문서킹 - 무료 파일 변환기" />
      <meta property="og:description" content="PDF, 이미지, 문서를 쉽고 빠르게 무료 변환!" />
      <meta property="og:image" content="/og-image.png" />
      <meta property="og:url" content="https://www.networkkings.website" />
      <meta property="og:site_name" content="문서킹" />
      <meta property="og:locale" content="ko_KR" />
      <meta property="og:type" content="website" />
      {/* 트위터 카드 */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="문서킹 - 무료 파일 변환기" />
      <meta name="twitter:description" content="PDF, 이미지, 문서를 쉽고 빠르게 무료 변환!" />
      <meta name="twitter:image" content="/og-image.png" />
    </>
  );
}