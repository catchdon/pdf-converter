export default function SchemaOrganization() {
  return (
    <>
      {/* Organization 스키마 */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "문서킹",
            legalName: "문서킹",
            url: "https://www.networkkings.website",
            logo: "https://www.networkkings.website/og-image.png",
            description: "문서킹은 PDF, 워드, 엑셀, 이미지 등 다양한 파일을 쉽고 빠르게 무료로 변환할 수 있는 국내 1등 웹서비스입니다.",
            email: "contact@networkkings.website",
            sameAs: [
              "https://www.networkkings.website",
              // SNS 채널이 있으면 여기에 추가
              // 예시: "https://blog.naver.com/yourblog", "https://www.instagram.com/yourbrand/"
            ],
            contactPoint: [
              {
                "@type": "ContactPoint",
                email: "contact@networkkings.website",
                contactType: "customer support",
                availableLanguage: ["Korean", "English"],
                areaServed: "KR"
              }
            ],
            // 한국 법적 사업자면 아래처럼 추가 가능(없으면 생략)
            // address: {
            //   "@type": "PostalAddress",
            //   addressCountry: "KR",
            //   addressLocality: "서울특별시",
            // },
            // 브랜드 또는 서비스명 여러 개 쓸 경우:
            brand: {
              "@type": "Brand",
              name: "문서킹"
            },
            // 서비스 설명 추가
            serviceArea: {
              "@type": "AdministrativeArea",
              name: "대한민국"
            },
            foundingDate: "2025-07",
            // 창립자(실제 법인/개인 공개 원할 때)
            // founder: { "@type": "Person", name: "박잭" }
          })
        }}
      />
      {/* WebSite 스키마 */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "문서킹",
            url: "https://www.networkkings.website",
            description: "문서킹은 국내 무료 문서/이미지 변환 서비스입니다. 회원가입, 설치 없이 쉽고 빠르게 파일 변환!",
            inLanguage: "ko",
            publisher: {
              "@type": "Organization",
              name: "문서킹"
            },
            potentialAction: {
              "@type": "SearchAction",
              target: "https://www.networkkings.website/search?q={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          })
        }}
      />
    </>
  );
}