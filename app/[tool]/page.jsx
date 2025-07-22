import ClientComponent from "./ClientComponent";
export async function generateMetadata({ params }) {
  const metadataMap = {
    "pdf-to-word": {
      title: "PDF를 워드로 변환 - 문서킹",
      description: "PDF 파일을 DOCX 워드 파일로 무료 변환! 온라인에서 쉽고 빠르게 변환하세요.",
      keywords: "PDF 워드 변환, PDF DOCX 변환, 무료 PDF 변환, 문서킹",
      alternates: {
        canonical: "https://www.networkkings.website/pdf-to-word",
      },
      openGraph: {
        title: "PDF를 워드로 변환 - 문서킹",
        description: "PDF 파일을 DOCX 워드 파일로 무료 변환! 온라인에서 쉽고 빠르게 변환하세요.",
        url: "https://www.networkkings.website/pdf-to-word",
        images: [
          { url: "/og-image.png", width: 1200, height: 630, alt: "PDF를 워드로 변환" }
        ]
      }
    },
    "pdf-to-image": {
      title: "PDF를 이미지로 변환 - 문서킹",
      description: "PDF 파일을 JPG/PNG 이미지로 변환! 한 번에 여러 페이지 변환 가능.",
      keywords: "PDF 이미지 변환, PDF JPG, PDF PNG, 무료 PDF 변환, 문서킹",
      alternates: {
        canonical: "https://www.networkkings.website/pdf-to-image",
      },
      openGraph: {
        title: "PDF를 이미지로 변환 - 문서킹",
        description: "PDF 파일을 JPG/PNG 이미지로 변환! 한 번에 여러 페이지 변환 가능.",
        url: "https://www.networkkings.website/pdf-to-image",
        images: [
          { url: "/og-image.png", width: 1200, height: 630, alt: "PDF를 이미지로 변환" }
        ]
      }
    },
    "pdf-to-excel": {
      title: "PDF를 엑셀로 변환 - 문서킹",
      description: "PDF 파일을 XLSX/CSV 엑셀 파일로 무료 변환! 표/리스트 추출에 최적화.",
      keywords: "PDF 엑셀 변환, PDF XLSX, PDF CSV, 무료 PDF 변환, 문서킹",
      alternates: {
        canonical: "https://www.networkkings.website/pdf-to-excel",
      },
      openGraph: {
        title: "PDF를 엑셀로 변환 - 문서킹",
        description: "PDF 파일을 XLSX/CSV 엑셀 파일로 무료 변환! 표/리스트 추출에 최적화.",
        url: "https://www.networkkings.website/pdf-to-excel",
        images: [
          { url: "/og-image.png", width: 1200, height: 630, alt: "PDF를 엑셀로 변환" }
        ]
      }
    },
    "pdf-to-ppt": {
      title: "PDF를 파워포인트로 변환 - 문서킹",
      description: "PDF 파일을 PPTX 파워포인트 파일로 무료 변환! 프레젠테이션 제작을 빠르게.",
      keywords: "PDF PPT 변환, PDF PPTX, PDF 파워포인트, 무료 PDF 변환, 문서킹",
      alternates: {
        canonical: "https://www.networkkings.website/pdf-to-ppt",
      },
      openGraph: {
        title: "PDF를 파워포인트로 변환 - 문서킹",
        description: "PDF 파일을 PPTX 파워포인트 파일로 무료 변환! 프레젠테이션 제작을 빠르게.",
        url: "https://www.networkkings.website/pdf-to-ppt",
        images: [
          { url: "/og-image.png", width: 1200, height: 630, alt: "PDF를 파워포인트로 변환" }
        ]
      }
    },
    "word-to-pdf": {
      title: "워드를 PDF로 변환 - 문서킹",
      description: "Word(.docx) 파일을 PDF로 무료 변환! 인쇄/공유에 최적화된 포맷 제공.",
      keywords: "워드 PDF 변환, DOCX PDF, 무료 워드 변환, 문서킹",
      alternates: {
        canonical: "https://www.networkkings.website/word-to-pdf",
      },
      openGraph: {
        title: "워드를 PDF로 변환 - 문서킹",
        description: "Word(.docx) 파일을 PDF로 무료 변환! 인쇄/공유에 최적화된 포맷 제공.",
        url: "https://www.networkkings.website/word-to-pdf",
        images: [
          { url: "/og-image.png", width: 1200, height: 630, alt: "워드를 PDF로 변환" }
        ]
      }
    },
    "image-to-pdf": {
      title: "이미지를 PDF로 변환 - 문서킹",
      description: "여러 장의 이미지를 하나의 PDF로 합치기! JPG, PNG 등 다양한 이미지 지원.",
      keywords: "이미지 PDF 변환, JPG PDF, PNG PDF, 이미지 합치기, 무료 변환, 문서킹",
      alternates: {
        canonical: "https://www.networkkings.website/image-to-pdf",
      },
      openGraph: {
        title: "이미지를 PDF로 변환 - 문서킹",
        description: "여러 장의 이미지를 하나의 PDF로 합치기! JPG, PNG 등 다양한 이미지 지원.",
        url: "https://www.networkkings.website/image-to-pdf",
        images: [
          { url: "/og-image.png", width: 1200, height: 630, alt: "이미지를 PDF로 변환" }
        ]
      }
    },
    "excel-to-pdf": {
      title: "엑셀을 PDF로 변환 - 문서킹",
      description: "엑셀(xlsx, csv) 파일을 PDF로 무료 변환! 인쇄/제출용으로 손쉽게 변환.",
      keywords: "엑셀 PDF 변환, XLSX PDF, CSV PDF, 무료 엑셀 변환, 문서킹",
      alternates: {
        canonical: "https://www.networkkings.website/excel-to-pdf",
      },
      openGraph: {
        title: "엑셀을 PDF로 변환 - 문서킹",
        description: "엑셀(xlsx, csv) 파일을 PDF로 무료 변환! 인쇄/제출용으로 손쉽게 변환.",
        url: "https://www.networkkings.website/excel-to-pdf",
        images: [
          { url: "/og-image.png", width: 1200, height: 630, alt: "엑셀을 PDF로 변환" }
        ]
      }
    },
    "ppt-to-pdf": {
      title: "파워포인트를 PDF로 변환 - 문서킹",
      description: "파워포인트(PPT, PPTX)를 PDF 문서로 무료 변환! 프레젠테이션 파일도 쉽게 인쇄.",
      keywords: "파워포인트 PDF 변환, PPT PDF, PPTX PDF, 무료 파워포인트 변환, 문서킹",
      alternates: {
        canonical: "https://www.networkkings.website/ppt-to-pdf",
      },
      openGraph: {
        title: "파워포인트를 PDF로 변환 - 문서킹",
        description: "파워포인트(PPT, PPTX)를 PDF 문서로 무료 변환! 프레젠테이션 파일도 쉽게 인쇄.",
        url: "https://www.networkkings.website/ppt-to-pdf",
        images: [
          { url: "/og-image.png", width: 1200, height: 630, alt: "파워포인트를 PDF로 변환" }
        ]
      }
    },
    "jpg-to-png": {
      title: "JPG를 PNG로 변환 - 문서킹",
      description: "JPG 이미지를 고화질 PNG로 무료 변환! 간편하게 이미지 포맷 변환 가능.",
      keywords: "JPG PNG 변환, 이미지 포맷 변환, 무료 JPG 변환, 문서킹",
      alternates: {
        canonical: "https://www.networkkings.website/jpg-to-png",
      },
      openGraph: {
        title: "JPG를 PNG로 변환 - 문서킹",
        description: "JPG 이미지를 고화질 PNG로 무료 변환! 간편하게 이미지 포맷 변환 가능.",
        url: "https://www.networkkings.website/jpg-to-png",
        images: [
          { url: "/og-image.png", width: 1200, height: 630, alt: "JPG를 PNG로 변환" }
        ]
      }
    },
    "png-to-jpg": {
      title: "PNG를 JPG로 변환 - 문서킹",
      description: "PNG 이미지를 고화질 JPG로 무료 변환! 사진, 스크린샷 포맷 변환도 손쉽게.",
      keywords: "PNG JPG 변환, 이미지 포맷 변환, 무료 PNG 변환, 문서킹",
      alternates: {
        canonical: "https://www.networkkings.website/png-to-jpg",
      },
      openGraph: {
        title: "PNG를 JPG로 변환 - 문서킹",
        description: "PNG 이미지를 고화질 JPG로 무료 변환! 사진, 스크린샷 포맷 변환도 손쉽게.",
        url: "https://www.networkkings.website/png-to-jpg",
        images: [
          { url: "/og-image.png", width: 1200, height: 630, alt: "PNG를 JPG로 변환" }
        ]
      }
    },
    "heic-to-jpg": {
      title: "HEIC를 JPG로 변환 - 문서킹",
      description: "HEIC 이미지를 JPG로 변환! 아이폰 사진 호환성 문제를 한방에 해결.",
      keywords: "HEIC JPG 변환, 아이폰 사진 변환, 무료 HEIC 변환, 문서킹",
      alternates: {
        canonical: "https://www.networkkings.website/heic-to-jpg",
      },
      openGraph: {
        title: "HEIC를 JPG로 변환 - 문서킹",
        description: "HEIC 이미지를 JPG로 변환! 아이폰 사진 호환성 문제를 한방에 해결.",
        url: "https://www.networkkings.website/heic-to-jpg",
        images: [
          { url: "/og-image.png", width: 1200, height: 630, alt: "HEIC를 JPG로 변환" }
        ]
      }
    },
    "jpg-to-webp": {
      title: "JPG를 WEBP로 변환 - 문서킹",
      description: "JPG 이미지를 웹 최적화 WEBP 포맷으로 무료 변환! 이미지 압축까지 한 번에.",
      keywords: "JPG WEBP 변환, 이미지 압축, 웹 최적화 이미지, 무료 변환, 문서킹",
      alternates: {
        canonical: "https://www.networkkings.website/jpg-to-webp",
      },
      openGraph: {
        title: "JPG를 WEBP로 변환 - 문서킹",
        description: "JPG 이미지를 웹 최적화 WEBP 포맷으로 무료 변환! 이미지 압축까지 한 번에.",
        url: "https://www.networkkings.website/jpg-to-webp",
        images: [
          { url: "/og-image.png", width: 1200, height: 630, alt: "JPG를 WEBP로 변환" }
        ]
      }
    },
    "png-to-webp": {
      title: "PNG를 WEBP로 변환 - 문서킹",
      description: "PNG 이미지를 WEBP 포맷으로 무료 변환! 이미지 품질은 유지, 용량은 줄이기.",
      keywords: "PNG WEBP 변환, 이미지 압축, 웹 최적화 이미지, 무료 변환, 문서킹",
      alternates: {
        canonical: "https://www.networkkings.website/png-to-webp",
      },
      openGraph: {
        title: "PNG를 WEBP로 변환 - 문서킹",
        description: "PNG 이미지를 WEBP 포맷으로 무료 변환! 이미지 품질은 유지, 용량은 줄이기.",
        url: "https://www.networkkings.website/png-to-webp",
        images: [
          { url: "/og-image.png", width: 1200, height: 630, alt: "PNG를 WEBP로 변환" }
        ]
      }
    }
  };

  const meta = metadataMap[params.tool];
  if (!meta) {
    return {
      title: "문서킹 - 무료 문서/이미지 변환 사이트",
      description: "PDF, 이미지, 오피스 파일을 쉽고 빠르게 변환하세요.",
      alternates: {
        canonical: "https://www.networkkings.website/"
      }
    };
  }
  return meta;
}
export default function Page() { return <ClientComponent />; }