"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { FileText, Menu, X, ChevronDown } from "lucide-react"
import { useState, useRef } from "react"
import { BiSolidFilePdf, BiSolidFilePng, BiSolidFileJpg } from "react-icons/bi"
import { RiFileWord2Fill, RiFileImageFill, RiFileExcel2Fill, RiFilePpt2Fill, RiCustomSize, RiFileZipFill } from "react-icons/ri"
import { BsFiletypeHeic } from "react-icons/bs"
import { SiWebtrees } from "react-icons/si"
import { useEffect } from "react";


const menu = [
  { name: "홈", href: "/" },
  {
    name: "PDF 편집", children: [
      { name: "PDF 합치기", href: "/pdf-merge", icon: <BiSolidFilePdf size={22} color="#FF4646" /> },
      { name: "PDF 분할", href: "/pdf-split", icon: <BiSolidFilePdf size={22} color="#FF4646" /> },
      { name: "PDF 페이지 제거", href: "/pdf-remove", icon: <BiSolidFilePdf size={22} color="#FF4646" /> },
      { name: "PDF 페이지 추출", href: "/pdf-extract", icon: <BiSolidFilePdf size={22} color="#FF4646" /> },
      { name: "PDF 용량 줄이기", href: "/pdf-compress", icon: <BiSolidFilePdf size={22} color="#FF4646" /> },
    ]
  },
  {
    name: "PDF를 변환", children: [
      { name: "PDF를 워드로 변환", href: "/pdf-to-word", icon: <RiFileWord2Fill size={22} color="#185ABD" /> },
      { name: "PDF를 이미지로 변환", href: "/pdf-to-image", icon: <RiFileImageFill size={22} color="#FFD500" /> },
      { name: "PDF를 엑셀로 변환", href: "/pdf-to-excel", icon: <RiFileExcel2Fill size={22} color="#1BC47D" /> },
      { name: "PDF를 파워포인트로 변환", href: "/pdf-to-ppt", icon: <RiFilePpt2Fill size={22} color="#FF8000" /> },
    ]
  },
  {
    name: "PDF로 변환", children: [
      { name: "워드를 PDF로 변환", href: "/word-to-pdf", icon: <RiFileWord2Fill size={22} color="#185ABD" /> },
      { name: "이미지를 PDF로 변환", href: "/image-to-pdf", icon: <RiFileImageFill size={22} color="#FFD500" /> },
      { name: "엑셀을 PDF로 변환", href: "/excel-to-pdf", icon: <RiFileExcel2Fill size={22} color="#1BC47D" /> },
      { name: "파워포인트를 PDF로 변환", href: "/ppt-to-pdf", icon: <RiFilePpt2Fill size={22} color="#FF8000" /> },
    ]
  },
  {
    name: "이미지 도구", children: [
      { name: "이미지 용량 줄이기", href: "/image-compress", icon: <RiFileZipFill size={22} color="#FF4646" /> },
      { name: "이미지 사이즈 변경", href: "/image-resize", icon: <RiCustomSize size={22} color="#FF4646" /> },
      { name: "JPG를 PNG로", href: "/jpg-to-png", icon: <BiSolidFilePng size={22} color="#F76808" /> },
      { name: "PNG를 JPG로", href: "/png-to-jpg", icon: <BiSolidFileJpg size={22} color="#FF7043" /> },
      { name: "HEIC를 JPG로", href: "/heic-to-jpg", icon: <BsFiletypeHeic size={22} color="#3DDC97" /> },
      { name: "JPG를 WEBP로", href: "/jpg-to-webp", icon: <SiWebtrees size={22} color="#185ABD" /> },
      { name: "PNG를 WEBP로", href: "/png-to-webp", icon: <SiWebtrees size={22} color="#185ABD" /> },
    ]
  },
  { name: "모든 도구", href: "/tools" },
  { 
    name: "문서킹", children: [
      {name: "소개", href: "/about"},
      {name: "이용약관", href: "/terms"},
      {name: "개인정보처리방침", href: "/privacy"},
      {name: "문의", href: "/contact"}
    ]}
];

export function Header() {
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(null)
  const [mobileOpen, setMobileOpen] = useState({})
  const dropdownRefs = useRef({})

  // 메뉴 중앙 정렬, 크기 키우기 (Tailwind로 w-full flex justify-center 등)
  // 데스크탑 드롭다운 - hover+focus 유지, 드롭다운 위 마우스 있을 때 닫히지 않게
  const handleDropdown = (idx) => setOpenDropdown(idx)
  const handleDropdownLeave = (idx) => {
    setTimeout(() => {
      // 드롭다운 내부에도 마우스 있으면 닫지 않음
      if (dropdownRefs.current[idx] && dropdownRefs.current[idx].matches(":hover")) return
      setOpenDropdown(null)
    }, 80)
  }
  
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isMobileMenuOpen]);

  const mobileMenuRef = useRef();

  useEffect(() => {
    if (!isMobileMenuOpen) return;

    const handleClickOutside = (e) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(e.target)
      ) {
        setIsMobileMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [isMobileMenuOpen]);  

  const handleMobileOpen = (idx) =>
    setMobileOpen((prev) => ({
      [idx]: !prev[idx], // 클릭한 idx만 토글, 나머진 false
    }))

  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-30">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="/" className="flex items-center space-x-2">
            <FileText className="w-9 h-9 text-blue-600" />
            <span className="text-2xl font-bold text-gray-900">문서킹</span>
          </a>

          {/* Desktop Navigation (중앙 정렬) */}
          <nav className="hidden md:flex flex-1 justify-center items-center gap-10">
            {menu.map((item, idx) =>
              !item.children ? (
                item.name === "홈" ? (
                  <a
                    key={item.name}
                    href="/"
                    className={`text-lg font-semibold px-2 py-1 rounded hover:text-blue-700 transition-colors ${
                      pathname === item.href ? "text-blue-700" : "text-gray-900"
                    }`}>
                    {item.name}
                  </a>
                ) : (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`text-lg font-semibold px-2 py-1 rounded hover:text-blue-700 transition-colors ${
                      pathname === item.href ? "text-blue-700" : "text-gray-900"
                    }`}>
                    {item.name}
                  </Link>
                )
              ) : (
                <div
                  key={item.name}
                  className="relative group"
                  onMouseEnter={() => handleDropdown(idx)}
                  onMouseLeave={() => handleDropdownLeave(idx)}
                >
                  <button
                    className={`text-lg font-semibold flex items-center gap-1 px-2 py-1 rounded hover:text-blue-700 transition-colors ${
                      openDropdown === idx ? "text-blue-700" : "text-gray-900"
                    }`}
                  >
                    {item.name} <ChevronDown className="w-5 h-5" />
                  </button>
                  {/* Dropdown */}
                  <div
                    ref={el => dropdownRefs.current[idx] = el}
                    className={`absolute left-1/2 -translate-x-1/2 top-12 min-w-max bg-white border rounded shadow-xl py-2 z-50 ${
                      openDropdown === idx ? "block" : "hidden"
                    }`}
                  >
                    {item.children.map(sub => (
                      <Link
                        key={sub.href}
                        href={sub.href}
                        className={`flex items-center gap-3 px-6 py-3 text-base whitespace-nowrap hover:bg-blue-50 hover:text-blue-700 transition-colors ${
                          pathname === sub.href ? "text-blue-700 font-bold" : "text-gray-800"
                        }`}
                      >
                        {sub.icon}
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )
            )}
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X className="w-10 h-10" /> : <Menu className="w-10 h-10" />}
          </Button>
        </div>

        {/* Mobile Navigation (아코디언) */}
        {isMobileMenuOpen && (
          <div
            ref={mobileMenuRef}
            className="md:hidden py-4 border-t fixed inset-0 z-40 bg-white overflow-y-auto"
            style={{ maxHeight: "100vh" }}
          >
            {/* 최상단 오른쪽 X(닫기) 버튼 추가 */}
            <div className="flex justify-end px-4 mb-2">
              <Button
                variant="ghost"
                size="icon"
                aria-label="닫기"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <X className="w-7 h-7" />
              </Button>
            </div>
            <nav className="flex flex-col space-y-4 px-2 pb-6 pt-2">
              {menu.map((item, idx) =>
                !item.children ? (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`text-lg font-bold transition-colors rounded-lg px-4 py-3
                      hover:text-blue-700 ${
                        pathname === item.href ? "text-blue-700" : "text-gray-900"
                      }`}
                    style={{ letterSpacing: "0.02em" }}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <div key={item.name} className="mb-2">
                    <button
                      className="flex items-center w-full text-lg font-bold justify-between text-gray-900 hover:text-blue-700 rounded-lg px-4 py-3"
                      style={{ letterSpacing: "0.02em" }}
                      onClick={() => handleMobileOpen(idx)}
                    >
                      <span>{item.name}</span>
                      <ChevronDown className={`w-5 h-5 transition-transform ${mobileOpen[idx] ? "rotate-180" : ""}`} />
                    </button>
                    {mobileOpen[idx] && (
                      <div
                        className="pl-2 pt-1 flex flex-col space-y-1 max-h-80 overflow-y-auto"
                        style={{ WebkitOverflowScrolling: "touch" }} // iOS 부드러운 스크롤
                      >
                        {item.children.map((sub) => (
                          <Link
                            key={sub.href}
                            href={sub.href}
                            className={`flex items-center gap-2 px-6 py-3 rounded text-base font-medium
                              hover:text-blue-700 hover:bg-blue-50 transition-colors ${
                                pathname === sub.href ? "text-blue-700 font-bold bg-blue-50" : "text-gray-900"
                              }`}
                            style={{ letterSpacing: "0.01em" }}
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {sub.icon}
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                )
              )}
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}