import { Inter } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Analytics } from "@vercel/analytics/react"
import Script from "next/script"
import { InAppBrowserGuide } from "@/components/InAppBrowserGuide"
import SchemaOrganization from "@/components/SchemaOrganization";
import SchemaWebApp from "@/components/SchemaWebApp";

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "문서킹 - 무료 파일 변환기",
  description: "문서킹에서 PDF, 워드, 엑셀, 파워포인트, 이미지 파일을 쉽고 빠르게 무료로 변환하세요. 설치·회원가입 없이 완전 무료! 국내 서버를 운용하기 때문에 어느 곳 보다 빠른 속도를 누릴 수 있습니다!",
  keywords: [
    "문서킹", "파일변환", "PDF변환", "이미지변환", "문서 변환기", "웹 변환툴", "jpg png heic pdf xlsx ppt"
  ],
  alternates: {
    canonical: "https://www.networkkings.website/"
  },
  openGraph: {
    title: "문서킹 - 무료 파일 변환기",
    description: "PDF, 이미지, 문서를 쉽고 빠르게 무료 변환!",
    url: "https://www.networkkings.website",
    siteName: "문서킹",
    images: [
      {
        url: "/og-image.png",
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
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
    shortcut: "/favicon.ico",
    other: [
      { rel: "manifest", url: "/manifest.json" },
      { rel: "icon", url: "/web-app-manifest-192.png", sizes: "192x192" },
      { rel: "icon", url: "/web-app-manifest-512.png", sizes: "512x512" },
    ],
  },
  other: {
    "google-adsense-account": "ca-pub-2232732758246542",
    "naver-site-verification": "a15e9c24bed6fa364370353014afb579be302a6a",
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <SchemaOrganization />
        <SchemaWebApp />
        <InAppBrowserGuide />
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <Analytics />
        <Script
          id="adsense-script"
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2232732758246542"
          crossOrigin="anonymous"
        />
        {/* 네이버 애널리틱스 lazyOnload 적용 */}
        <Script
          src="https://wcs.naver.net/wcslog.js"
          strategy="lazyOnload"
        />
        <Script
          id="naver-analytics"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `
              if (!wcs_add) var wcs_add = {};
              wcs_add["wa"] = "82a9610ad38048";
              if (window.wcs) { wcs_do(); }
            `,
          }}
        />
        {/* 정말 필요한 경우에만 preconnect/preload 직접 추가, 아래는 선택사항 */}
        <link rel="preconnect" href="https://ssl.pstatic.net" crossOrigin="" />
        <link rel="preconnect" href="https://nam.veta.naver.com" crossOrigin="" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="preload" as="style" href="/_next/static/css/0540e53a0da54d97.css" />

      </body>
    </html>
  )
}