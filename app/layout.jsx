import { Inter } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Analytics } from "@vercel/analytics/react" 

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "문서킹 - 무료 파일 변환기",
  description: "문서킹에서 PDF, 워드, 엑셀, 이미지 파일을 쉽고 빠르게 무료로 변환하세요. 설치·광고·회원가입 없이 완전 무료!",
  keywords: ["문서킹", "파일변환", "PDF변환", "이미지변환", "문서 변환기", "웹 변환툴", "jpg png heic pdf xlsx ppt"],
  openGraph: {
    title: "문서킹 - 무료 파일 변환기",
    description: "PDF, 이미지, 문서를 쉽고 빠르게 무료 변환!",
    url: "https://www.networkkings.website",
    siteName: "문서킹",
    images: [
      {
        url: "/og-image.png", // public 폴더에 og-image.png 준비
        width: 1200,
        height: 630,
        alt: "문서킹 메인 이미지",
      },
    ],
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "문서킹 - 무료 파일 변환기",
    description: "PDF, 이미지, 문서를 쉽고 빠르게 무료 변환!",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico", // public 폴더에 favicon.ico 준비
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <head>
        {/* 네이버 소유확인 meta */}
        <meta name="naver-site-verification" content="a15e9c24bed6fa364370353014afb579be302a6a" />
        <link rel="icon" href="/favicon.ico" />
        {/* 네이버 애널리틱스 */}
        <script type="text/javascript" src="//wcs.naver.net/wcslog.js"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if(!wcs_add) var wcs_add = {};
              wcs_add["wa"] = "82a9610ad38048";
              if(window.wcs) { wcs_do(); }
            `,
          }}
        />
                {/* Google AdSense 코드 - 소유권 인증용 */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-223732758246542"
          crossOrigin="anonymous"
        ></script>
      </head>
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
