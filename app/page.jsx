// app/page.jsx 또는 app/page.tsx

import WizardClient from "@/components/WizardClient";
import SchemaFAQ from "@/components/SchemaFAQ";

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">

      {/* 업로드/변환 마법사 */}
      <section id="wizard" className="max-w-2xl mx-auto mt-0">
        <WizardClient />
      </section>

      {/* 3단계 이용방법 카드 */}
        <section className="w-full flex flex-col items-center mt-16 px-2">
        <h2 className="text-2xl font-bold text-center mb-8">이용 방법 – 2단계로 끝!</h2>
        <div className="w-full max-w-3xl flex flex-col gap-7">
            {/* 1단계 */}
            <div className="flex flex-col items-center bg-white/95 p-10 rounded-3xl shadow-lg border hover:shadow-2xl transition">
            <img src="/images/home_step1.gif" alt="파일 올리기" loading="lazy" className="w-full h-44 md:h-56 rounded-2xl border mb-5 object-cover" />
            <h3 className="font-bold text-blue-700 mb-2 text-xl md:text-2xl">1. 파일 올리기</h3>
            <p className="text-gray-700 text-base md:text-lg text-center">
                변환할 파일을 <b>클릭 또는 드래그</b>해 업로드하세요.
            </p>
            </div>
            {/* 2단계 */}
            <div className="flex flex-col items-center bg-white/95 p-10 rounded-3xl shadow-lg border hover:shadow-2xl transition">
            <img src="/images/home_step2.gif" alt="도구 선택" loading="lazy" className="w-full h-44 md:h-56 rounded-2xl border mb-5 object-cover" />
            <h3 className="font-bold text-blue-700 mb-2 text-xl md:text-2xl">2. 도구 선택</h3>
            <p className="text-gray-700 text-base md:text-lg text-center">
                자동 추천되는 변환 도구 중 원하는 작업을 클릭!<br />
                변환 후 자동으로 다운로드
            </p>
            </div>
        </div>
        </section>

      {/* 특징 및 신뢰/FAQ – FAQ 디자인 개선 */}
      <section className="max-w-3xl mx-auto mt-16 mb-28 px-4">
        <h2 className="text-xl font-bold mb-6 text-blue-800 text-center">문서킹이 특별한 이유</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-700 mb-10">
          <li className="flex items-start gap-3 bg-white/80 p-5 rounded-2xl border">
            <span className="text-2xl">💯</span>
            <span><b>100% 무료</b> 모든 변환기능 완전 무료!</span>
          </li>
          <li className="flex items-start gap-3 bg-white/80 p-5 rounded-2xl border">
            <span className="text-2xl">⚡️</span>
            <span><b>빠른 속도</b> 평균 3~10초 내외 변환</span>
          </li>
          <li className="flex items-start gap-3 bg-white/80 p-5 rounded-2xl border">
            <span className="text-2xl">🔒</span>
            <span><b>안전 보안</b> 변환 후 파일 1시간 이내 자동 삭제, HTTPS 전송</span>
          </li>
          <li className="flex items-start gap-3 bg-white/80 p-5 rounded-2xl border">
            <span className="text-2xl">📱</span>
            <span><b>PC/모바일 모두 지원</b> 스마트폰, 태블릿에서도 바로 사용</span>
          </li>
        </ul>
        {/* FAQ */}
        <div className="mt-4 bg-white/95 p-8 rounded-2xl shadow border">
        <h3 className="font-semibold mb-7 text-blue-900 text-2xl text-center">자주 묻는 질문</h3>
        <ul className="space-y-8 text-gray-800 font-normal">
            <li>
            <div className="mb-2 text-lg font-bold text-blue-800 tracking-tight leading-snug">
                Q. 문서킹은 정말 무료인가요?
            </div>
            <div className="text-base md:text-lg leading-relaxed tracking-normal text-gray-800">
                네, <b className="text-blue-700 font-semibold">문서킹</b>의 모든 <b>문서 변환</b> 및 <b>이미지 변환</b> 서비스는 100% <b className="text-blue-700 font-semibold">무료</b>입니다.
                회원가입이나 설치 없이 누구나 바로 이용할 수 있으며, PDF, 워드, 엑셀, 이미지 등 다양한 파일을 자유롭게 변환하실 수 있습니다.<br />
                유료 결제, 숨겨진 비용 없이 진짜 무료로 안전하게 사용하세요.
            </div>
            </li>
            <li>
            <div className="mb-2 text-lg font-bold text-blue-800 tracking-tight leading-snug">
                Q. 파일은 어디에 저장되나요?
            </div>
            <div className="text-base md:text-lg leading-relaxed tracking-normal text-gray-800">
                <b className="text-blue-700 font-semibold">문서킹</b>에 업로드된 파일은 변환 후 1분 뒤 자동 삭제되며, 서버에도 남지 않습니다.
                모든 파일은 암호화(SSL)로 안전하게 전송되고, 외부 유출 위험이 없는 안전한 <b>문서 보안</b> 환경을 제공합니다.<br />
                개인정보 보호와 파일 보안을 최우선으로 생각하는 신뢰할 수 있는 변환 서비스입니다.
            </div>
            </li>
            <li>
            <div className="mb-2 text-lg font-bold text-blue-800 tracking-tight leading-snug">
                Q. 모바일도 지원되나요?
            </div>
            <div className="text-base md:text-lg leading-relaxed tracking-normal text-gray-800">
                네, <b className="text-blue-700 font-semibold">문서킹</b>은 PC, 모바일, 태블릿 등 모든 기기에서 완벽하게 동작합니다.<br />
                스마트폰에서도 PDF 변환, 이미지 변환 등 다양한 기능을 간편하게 사용할 수 있어 언제 어디서나 빠르고 편리하게 파일 변환이 가능합니다.
            </div>
            </li>
            <li>
            <div className="mb-2 text-lg font-bold text-blue-800 tracking-tight leading-snug">
                Q. 지원되는 파일 형식은?
            </div>
            <div className="text-base md:text-lg leading-relaxed tracking-normal text-gray-800">
                <b className="text-blue-700 font-semibold">문서킹</b>에서는 PDF, DOCX(워드), XLSX(엑셀), CSV, PPT, JPG, PNG, HEIC, WEBP 등 다양한 파일의 변환을 지원합니다.<br />
                문서 변환, 이미지 변환, 압축, 크기 조절 등 다양한 기능을 업무, 과제, 보고서, SNS 등 여러 상황에서 자유롭게 활용할 수 있습니다.
            </div>
            </li>
        </ul>
        </div>
        <SchemaFAQ />
      </section>

      {/* CTA 배너 */}
      <div className="w-full bg-gradient-to-r from-blue-200 to-indigo-200 py-10 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4">언제든 무료로 변환하세요!</h2>
        <a href="#wizard" className="inline-block px-10 py-4 bg-blue-700 text-white rounded-2xl font-semibold shadow hover:bg-blue-800 transition text-lg">
          파일 변환 바로 시작 &rarr;
        </a>
        <p className="mt-3 text-gray-700 text-sm">회원가입, 설치, 광고 전혀 없음. 필요한 순간, 문서킹!</p>
      </div>
    </div>
  );
}