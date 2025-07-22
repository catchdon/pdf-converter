export const metadata = {
  title: "이용약관 | 문서킹",
  description: "문서킹 서비스의 이용약관을 안내합니다.",
  keywords: [
    "문서킹", "이용약관", "서비스 약관", "무료 파일 변환", "문서킹 이용규정", "문서킹 정책"
  ],
  alternates: {
    canonical: "https://www.networkkings.website/terms",
  },
  openGraph: {
    title: "이용약관 | 문서킹",
    description: "문서킹 서비스의 이용약관을 안내합니다.",
    url: "https://www.networkkings.website/terms",
    images: [
      { url: "/og-image.png", width: 1200, height: 630, alt: "문서킹 이용약관" }
    ],
    siteName: "문서킹",
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "이용약관 | 문서킹",
    description: "문서킹 서비스의 이용약관을 안내합니다.",
    images: ["/og-image.png"]
  }
};

export default function TermsPage() {
  return (
    <div className="max-w-2xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-6">이용약관</h1>
      <ol className="list-decimal ml-6 space-y-4 text-sm">
        <li>
          <b>서비스 개요</b>
          <ul className="list-disc ml-6 mt-2">
            <li>문서킹은 누구나 자유롭게 사용할 수 있는 무료 파일 변환 서비스입니다.</li>
            <li>회원가입 및 로그인 절차 없이 이용 가능합니다.</li>
          </ul>
        </li>
        <li>
          <b>이용자의 의무</b>
          <ul className="list-disc ml-6 mt-2">
            <li>이용자는 저작권 등 관련 법령에 위반되지 않는 파일만 업로드해야 합니다.</li>
            <li>불법 콘텐츠, 바이러스, 개인정보가 포함된 파일의 변환을 금지합니다.</li>
          </ul>
        </li>
        <li>
          <b>서비스 제공 및 책임</b>
          <ul className="list-disc ml-6 mt-2">
            <li>사이트는 무료로 파일 변환 기능을 제공합니다.</li>
            <li>파일 변환 결과물의 정확성, 보존, 복원 등에 대해 보장하지 않으며, 데이터 손실 등 문제에 대해 법적 책임을 지지 않습니다.</li>
          </ul>
        </li>
        <li>
          <b>서비스의 변경 및 종료</b>
          <ul className="list-disc ml-6 mt-2">
            <li>서비스 내용은 사전 예고 없이 변경되거나 중단될 수 있습니다.</li>
          </ul>
        </li>
        <li>
          <b>기타</b>
          <ul className="list-disc ml-6 mt-2">
            <li>본 약관은 2025년 7월 19일부터 적용됩니다.</li>
            <li>약관에 변경이 있을 경우 홈페이지에 공지합니다.</li>
          </ul>
        </li>
      </ol>
      <p className="mt-8 text-xs text-gray-400">
        본 약관 및 방침에 동의하지 않을 경우 서비스 이용을 중단하실 수 있습니다.
      </p>
    </div>
  );
}