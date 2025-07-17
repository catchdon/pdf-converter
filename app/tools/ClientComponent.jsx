import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"
import { RiFileWord2Fill, RiFileImageFill, RiFileExcel2Fill, RiFilePpt2Fill, RiCustomSize , RiFileZipFill } from "react-icons/ri"
import { BiSolidFilePng, BiSolidFileJpg, BiSolidFilePdf } from "react-icons/bi"
import { BsFiletypeHeic } from "react-icons/bs"
import { SiWebtrees } from "react-icons/si"



const toolCategories = [
  {
    name: "PDF 편집",
    tools: [
      {
        name: "PDF 합치기",
        description: "2개의 PDF 파일을 합쳐드릴게요.",
        href: "/pdf-merge",
        icon: <BiSolidFilePdf size={36} color="#FF4646" />,
      },
      { name: "PDF 분할", 
        description: "PDF 파일을 .jpg 또는 .png로 변환 시켜드릴게요!", 
        href: "/pdf-split", 
        icon: <BiSolidFilePdf size={36} color="#FF4646" />,},
      {
        name: "PDF 페이지 제거",
        description: "PDF 파일을 .xlsx 또는 .csv로 변환시켜드릴게요!",
        href: "/pdf-remove",
        icon: <BiSolidFilePdf size={36} color="#FF4646" />,
      },
      {
        name: "PDF 페이지 추출",
        description: "PDF 파일을 .pptx로 변환시켜드릴게요!",
        href: "/pdf-extract",
        icon: <BiSolidFilePdf size={36} color="#FF4646" />,
      },
      {
        name: "PDF 용량 줄이기",
        description: "PDF 파일을 .pptx로 변환시켜드릴게요!",
        href: "/pdf-compress",
        icon: <BiSolidFilePdf size={36} color="#FF4646" />,
      },      
    ],
  },  
  {
    name: "PDF를 변환",
    tools: [
      {
        name: "PDF를 워드로 변환",
        description: "PDF 파일을 .docx로 변환시켜드릴게요!",
        href: "/pdf-to-word",
        icon: <RiFileWord2Fill size={36} color="#185ABD" />,
      },
      { name: "PDF를 이미지로 변환", description: "PDF 파일을 .jpg 또는 .png로 변환 시켜드릴게요!", href: "/pdf-to-image", icon: <RiFileImageFill size={36} color="#FFD500" />,},
      {
        name: "PDF를 엑셀로 변환",
        description: "PDF 파일을 .xlsx 또는 .csv로 변환시켜드릴게요!",
        href: "/pdf-to-excel",
        icon: <RiFileExcel2Fill size={36} color="#1BC47D" />,
      },
      {
        name: "PDF를 파워포인트로 변환",
        description: "PDF 파일을 .pptx로 변환시켜드릴게요!",
        href: "/pdf-to-ppt",
        icon: <RiFilePpt2Fill size={36} color="#FF8000" />,
      },
    ],
  },
  {
    name: "PDF로 변환",
    tools: [
      { name: "워드를 PDF로 변환", description: ".docx 파일을 PDF로 변환시켜드릴게요!", href: "/word-to-pdf", icon: <RiFileWord2Fill size={36} color="#185ABD" />, },
      { name: "이미지를 PDF로 변환", description: ".png 또는 .jpg 파일을 PDF로 변환시켜드릴게요!", href: "/image-to-pdf", icon: <RiFileImageFill size={36} color="#FFD500" />, },
      { name: "엑셀을 PDF로 변환", description: ".xlsx 또는 .csv 파일을 PDF로 변환시켜드릴게요!", href: "/tools/excel-to-pdf", icon: <RiFileExcel2Fill size={36} color="#1BC47D" />,},
      { name: "파워포인트를 PDF로 변환", description: ".pptx 파일을 PDF로 변환시켜드릴게요!", href: "/ppt-to-pdf", icon: <RiFilePpt2Fill size={36} color="#FF8000" />, },
    ],
  },
  {
    name: "이미지 도구",
    tools: [
      { name: "이미지 사이즈 바꾸기", description: "원하시는 사이즈로 이미지를 변환시켜드릴게요", href: "/image-resize", icon: <RiCustomSize size={36} color="#FF4646" />,},
      { name: "이미지 용량 줄이기", description: "이미지 파일(jpg or png)을 압축하여 용량을 줄여드릴게요!", href: "/image-compress", icon: <RiFileZipFill size={36} color="#FF4646" />, },      
      { name: "jpg를 png로 변환", description: "jpg 파일을 png로 변환시켜드릴게요!", href: "/jpg-to-png", icon:  <BiSolidFilePng size={36} color="#F76808" />,  },
      { name: "png를 jpg로 변환", description: "png 파일을 jpg로 변환시켜드릴게요!", href: "/png-to-jpg", icon:  <BiSolidFileJpg size={36} color="#FF7043" />,  },
      { name: "heic를 jpg로 변환", description: "heic 파일을 jpg로 변환시켜드릴게요!", href: "/heic-to-jpg", icon:  <BsFiletypeHeic size={36} color="#3DDC97" />,  },
      { name: "jpg를 webp로 변환", description: "jpg 파일을 webp로 변환시켜드릴게요!", href: "/jpg-to-webp", icon:  <SiWebtrees size={36} color="#185ABD" />,  },
      { name: "png를 webp로 변환", description: "png 파일을 webp로 변환시켜드릴게요!", href: "/png-to-webp", icon:  <SiWebtrees size={36} color="#185ABD" />  },

    ],
  },
]

export default function ToolsPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">문서킹의 모든 도구 모음</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            PDF 변환, 워드 변환, 엑셀 변환, 이미지 변환 등 모든 파일 변환을 한 번에! 빠르고 안전하며, 100% 무료 파일 변환 도구로 지금 바로 변환을 시작해보세요.
          </p>
        </div>

        {/* Tool Categories */}
        <div className="space-y-16">
          {toolCategories.map((category) => (
            <div key={category.name}>
              <h2 className="text-2xl font-bold text-gray-900 mb-8">{category.name}</h2>
              <div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {category.tools.map((tool) => (
                  <Link key={tool.name} href={tool.href}>
                    <Card
                      className="h-full hover:shadow-lg transition-all duration-200 hover:-translate-y-1 cursor-pointer">
                      <CardContent className="p-6 text-center flex flex-col items-center justify-center h-full">
                        <div className="mb-4 flex items-center justify-center">{tool.icon}</div>
                        <h3 className="font-semibold text-gray-900 mb-2">{tool.name}</h3>
                        <p className="text-sm text-gray-600 mb-4">{tool.description}</p>
                        <div
                          className="flex items-center justify-center text-blue-600 text-sm font-medium">
                          변환 바로가기 <ArrowRight className="w-4 h-4 ml-1" />
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
