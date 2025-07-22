// /components/SchemaWebApp.js
"use client";
export default function SchemaWebApp() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebApplication",
          "name": "문서킹",
          "url": "https://www.networkkings.website/",
          "applicationCategory": "BusinessApplication",
          "operatingSystem": "All",
          "browserRequirements": "Requires JavaScript. Works on Chrome, Safari, Edge, Firefox, Mobile browsers.",
          "description": "문서킹은 PDF, 워드, 엑셀, 이미지 등 다양한 파일을 쉽고 빠르게 변환하는 100% 무료 온라인 변환 도구입니다.",
          "inLanguage": "ko",
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "KRW"
          },
          "author": {
            "@type": "Organization",
            "name": "문서킹",
            "url": "https://www.networkkings.website/"
          },
          "publisher": {
            "@type": "Organization",
            "name": "문서킹",
            "url": "https://www.networkkings.website/"
          },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "bestRating": "5",
            "worstRating": "1",
            "ratingCount": "1200"
          },
          "screenshot": "https://www.networkkings.website/og-image.png",
          "email": "contact@networkkings.website",
          "sameAs": [
            "https://www.networkkings.website/",
            // SNS, 블로그 있으면 추가
          ]
        })
      }}
    />
  );
}