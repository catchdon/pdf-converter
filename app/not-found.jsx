// app/not-found.jsx
export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-white">
      <h1 className="text-4xl font-bold text-blue-700 mb-6">404 - 페이지를 찾을 수 없습니다</h1>
      <p className="mb-10 text-gray-600 text-lg text-center">
        입력하신 주소에 해당하는 페이지가 존재하지 않습니다.<br />
        주소를 다시 확인하거나 홈으로 이동해 주세요.
      </p>
      <a
        href="/"
        className="px-8 py-3 bg-blue-600 text-white rounded-xl shadow font-semibold text-lg hover:bg-blue-800 transition"
      >
        홈으로 가기
      </a>
    </div>
  );
}