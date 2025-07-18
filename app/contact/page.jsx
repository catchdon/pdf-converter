export const metadata = {
  title: "문의하기 | 문서킹",
  description: "문서킹 서비스 이용 중 궁금한 점이 있다면 언제든 연락해 주세요.",
};

export default function ContactPage() {
  return (
    <div className="max-w-2xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-6">문의하기</h1>
      <p className="mb-8 text-gray-700">
        문서킹 서비스와 관련해 궁금한 점, 개선 요청, 버그 제보 등 어떤 문의라도 환영합니다.<br />
        아래 이메일 또는 문의 폼으로 연락주시면, 신속하게 답변드리겠습니다.
      </p>
      <div className="bg-gray-100 rounded p-6 mb-6">
        <p className="mb-2 font-semibold">이메일 문의</p>
        <a href="mailto:contact@networkkings.website" className="text-blue-700 underline font-mono">
          contact@networkkings.website
        </a>
      </div>
      {/* 향후 폼 도입 시 아래 주석 해제 */}
      <form className="space-y-4">
        <input type="text" placeholder="이름" className="border rounded w-full p-2" />
        <input type="email" placeholder="이메일" className="border rounded w-full p-2" />
        <textarea placeholder="문의 내용" rows={5} className="border rounded w-full p-2"></textarea>
        <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded font-semibold">문의 보내기</button>
      </form>
      <p className="mt-10 text-xs text-gray-400">
        답변은 평일 기준 24시간 이내 이메일로 발송됩니다.
      </p>
    </div>
  );
}