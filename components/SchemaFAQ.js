// /components/SchemaFAQ.js
"use client";
export default function SchemaFAQ() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "문서킹은 정말 무료인가요?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "네, 문서킹의 모든 문서 변환 및 이미지 변환 서비스는 100% 무료입니다. 회원가입이나 설치 없이 누구나 바로 이용할 수 있습니다. 유료 결제, 숨겨진 비용 없이 진짜 무료로 안전하게 사용하세요."
              }
            },
            {
              "@type": "Question",
              "name": "파일은 어디에 저장되나요?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "문서킹에 업로드된 파일은 변환 후 1분 뒤 자동 삭제되며, 서버에도 남지 않습니다. 모든 파일은 암호화(SSL)로 안전하게 전송되고, 외부 유출 위험이 없는 안전한 환경을 제공합니다."
              }
            },
            {
              "@type": "Question",
              "name": "모바일도 지원되나요?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "네, 문서킹은 PC, 모바일, 태블릿 등 모든 기기에서 완벽하게 동작합니다. 스마트폰에서도 PDF 변환, 이미지 변환 등 다양한 기능을 간편하게 사용할 수 있습니다."
              }
            },
            {
              "@type": "Question",
              "name": "지원되는 파일 형식은?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "문서킹에서는 PDF, DOCX(워드), XLSX(엑셀), CSV, PPT, JPG, PNG, HEIC, WEBP 등 다양한 파일의 변환을 지원합니다. 문서 변환, 이미지 변환, 압축, 크기 조절 등 다양한 기능을 업무, 과제, 보고서, SNS 등 여러 상황에서 자유롭게 활용할 수 있습니다."
              }
            }
          ]
        })
      }}
    />
  );
}