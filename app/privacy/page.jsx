export const metadata = {
  title: "개인정보처리방침 | 문서킹",
  description: "문서킹은 최소한의 개인정보만을 안전하게 보호하고 있습니다.",
  keywords: [
    "문서킹 개인정보", "개인정보처리방침", "개인정보 보호", "문서킹", "문서킹 개인정보정책"
  ],
  alternates: {
    canonical: "https://www.networkkings.website/privacy",
  },
  openGraph: {
    title: "개인정보처리방침 | 문서킹",
    description: "문서킹은 최소한의 개인정보만을 안전하게 보호하고 있습니다.",
    url: "https://www.networkkings.website/privacy",
    images: [
      { url: "/og-image.png", width: 1200, height: 630, alt: "문서킹 개인정보처리방침" }
    ],
    siteName: "문서킹",
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "개인정보처리방침 | 문서킹",
    description: "문서킹은 최소한의 개인정보만을 안전하게 보호하고 있습니다.",
    images: ["/og-image.png"]
  }
};

export default function PrivacyPage() {
  return (
    <div className="max-w-2xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-6">개인정보처리방침</h1>
      <p className="mb-6 text-gray-700">
        문서킹(이하 '사이트')은 이용자의 개인정보를 무엇보다 소중하게 생각합니다.<br />
        개인정보 보호법 등 관련 법령을 준수하며, 개인정보를 최소한으로 수집하고 안전하게 관리합니다.
      </p>
      <ol className="list-decimal ml-6 space-y-4 text-sm">
        <li>
          <b>수집하는 개인정보 항목 및 방법</b>
          <ul className="list-disc ml-6 mt-2">
            <li>사이트는 일반적인 파일 변환 서비스 이용 시 개인정보를 수집하지 않습니다.</li>
            <li>문의 시, 이메일 주소와 문의 내용을 입력받을 수 있습니다.</li>
          </ul>
        </li>
        <li>
          <b>개인정보의 이용 목적</b>
          <ul className="list-disc ml-6 mt-2">
            <li>문의 및 요청사항 응대, 서비스 개선을 위한 참고 자료로만 활용합니다.</li>
            <li>이외의 목적으로 개인정보를 이용하지 않습니다.</li>
          </ul>
        </li>
        <li>
          <b>개인정보의 보유 및 파기</b>
          <ul className="list-disc ml-6 mt-2">
            <li>문의가 해결된 후 즉시 개인정보를 안전하게 삭제합니다.</li>
            <li>별도의 회원가입·로그인 기능을 운영하지 않으므로 장기 보관하지 않습니다.</li>
          </ul>
        </li>
        <li>
          <b>개인정보 제공 및 위탁</b>
          <ul className="list-disc ml-6 mt-2">
            <li>제3자에게 개인정보를 제공하거나 위탁하지 않습니다.</li>
          </ul>
        </li>
        <li>
          <b>이용자의 권리</b>
          <ul className="list-disc ml-6 mt-2">
            <li>이용자는 언제든지 자신의 개인정보 열람, 정정, 삭제를 요청할 수 있습니다.</li>
            <li>문의: <a href="mailto:contact@networkkings.website" className="underline text-blue-700">contact@networkkings.website</a></li>
          </ul>
        </li>
      </ol>
      <p className="mt-8 text-xs text-gray-400">
        본 방침은 2025년 7월 19일부터 적용됩니다.<br />
        변경사항 발생 시 홈페이지를 통해 사전 공지합니다.
      </p>
    </div>
  );
}