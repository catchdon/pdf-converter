// app/layout.js

export const metadata = {
  title: "문서킹",
  description: "문서를 빠르고 무료로 변환하세요",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>
        {children}
      </body>
    </html>
  );
}