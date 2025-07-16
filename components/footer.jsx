import Link from "next/link"
import { FileText } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {/* 로고 및 설명 */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <FileText className="w-6 h-6 text-blue-400" />
              <span className="text-lg font-bold">문서킹</span>
            </Link>
            <p className="text-gray-400 text-sm">
              무료로 쉽고 빠르게 문서와 이미지를 변환하세요.<br />
              설치와 회원가입 없이 바로 이용 가능합니다.
            </p>
          </div>

          {/* PDF 편집 */}
          <div>
            <h3 className="font-semibold mb-4">PDF 편집</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/pdf-merge" className="hover:text-white">PDF 합치기</Link></li>
              <li><Link href="/pdf-split" className="hover:text-white">PDF 분할</Link></li>
              <li><Link href="/pdf-remove" className="hover:text-white">PDF 페이지 제거</Link></li>
              <li><Link href="/pdf-extract" className="hover:text-white">PDF 페이지 추출</Link></li>
              <li><Link href="/pdf-compress" className="hover:text-white">PDF 용량 줄이기</Link></li>
            </ul>
          </div>

          {/* PDF 변환 */}
          <div>
            <h3 className="font-semibold mb-4">PDF를 변환</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/pdf-to-word" className="hover:text-white">PDF를 워드로 변환</Link></li>
              <li><Link href="/pdf-to-image" className="hover:text-white">PDF를 이미지로 변환</Link></li>
              <li><Link href="/pdf-to-excel" className="hover:text-white">PDF를 엑셀로 변환</Link></li>
              <li><Link href="/pdf-to-ppt" className="hover:text-white">PDF를 파워포인트로 변환</Link></li>

            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">PDF로 변환</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/word-to-pdf" className="hover:text-white">워드를 PDF로 변환</Link></li>
              <li><Link href="/image-to-pdf" className="hover:text-white">이미지를 PDF로 변환</Link></li>
              <li><Link href="/excel-to-pdf" className="hover:text-white">엑셀을 PDF로 변환</Link></li>
              <li><Link href="/ppt-to-pdf" className="hover:text-white">파워포인트를 PDF로 변환</Link></li>
            </ul>
          </div>

          {/* 이미지 도구 */}
          <div>
            <h3 className="font-semibold mb-4">이미지 도구</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/image-compress" className="hover:text-white">이미지 용량 줄이기</Link></li>
              <li><Link href="/image-resize" className="hover:text-white">이미지 사이즈 변경</Link></li>
              <li><Link href="/jpg-to-png" className="hover:text-white">JPG를 PNG로</Link></li>
              <li><Link href="/png-to-jpg" className="hover:text-white">PNG를 JPG로</Link></li>
              <li><Link href="/heic-to-jpg" className="hover:text-white">HEIC를 JPG로</Link></li>
              <li><Link href="/jpg-to-webp" className="hover:text-white">JPG를 WEBP로</Link></li>
              <li><Link href="/png-to-webp" className="hover:text-white">PNG를 WEBP로</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2025 문서킹. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}