"use client";
import { useState, useCallback, useEffect } from "react";
import { Upload, FileText, Download, Loader2, CheckCircle, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { handleConvert as handlePdfCompress } from "@/lib/converters/pdfCompress"; // 백엔드 연결
import { BiSolidFilePdf } from "react-icons/bi"


export const metadata = {
  title: "PDF 용량 줄이기 - 무료 PDF 압축 | 문서킹",
  description: "PDF 파일을 최대 90%까지 압축! 고화질부터 초경량까지, 품질 저하 최소화로 빠르고 간편하게 PDF 용량을 줄이세요. 100% 무료, 설치 필요 없음.",
  keywords: "PDF 압축, PDF 용량 줄이기, 무료 PDF 압축, PDF 파일 크기 줄이기, PDF 경량화, 문서킹",
  openGraph: {
    title: "PDF 용량 줄이기 - 무료 PDF 압축 | 문서킹",
    description: "PDF 파일을 클릭 한 번에 초간편 압축! 고화질 유지, 빠른 처리, 무료 제공. 모바일·PC 어디서나 사용.",
    url: "https://www.networkkings.website/pdf-compress",
    images: [
      { url: "/og-image.png", width: 1200, height: 630, alt: "PDF 용량 줄이기" }
    ],
  }
};

export default function PdfCompressPage() {
  const [file, setFile] = useState(null);
  const [isConverting, setIsConverting] = useState(false);
  const [isConverted, setIsConverted] = useState(false);
  const [convertedUrl, setConvertedUrl] = useState(null);
  const [convertedFilename, setConvertedFilename] = useState(null);
  const [isDragOver, setIsDragOver] = useState(false);
  const [quality, setQuality] = useState("ebook"); // 기본값 'ebook'(균형)

  const MAX_FILE_SIZE_MB = 100;

  const isValidFile = (file) => {
    if (file.type !== "application/pdf") {
      alert("PDF 파일만 업로드할 수 있습니다.");
      return false;
    }
    if (file.size > MAX_FILE_SIZE_MB * 1024 * 1024) {
      alert("파일 크기는 최대 100MB까지 가능합니다.");
      return false;
    }
    return true;
  };

  const handleDragOver = useCallback((e) => {
    e.preventDefault();
    setIsDragOver(true);
  }, []);
  const handleDragLeave = useCallback((e) => {
    e.preventDefault();
    setIsDragOver(false);
  }, []);
  const handleDrop = useCallback((e) => {
    e.preventDefault();
    setIsDragOver(false);

    const droppedFiles = Array.from(e.dataTransfer.files);
    if (droppedFiles.length === 0) return;
    const f = droppedFiles[0];
    if (!isValidFile(f)) return;

    setFile(f);
    setIsConverted(false);
  }, []);

  const handleFileSelect = (e) => {
    const f = e.target.files[0];
    if (!f) return;
    if (!isValidFile(f)) return;

    setFile(f);
    setIsConverted(false);
  };

  // 압축 변환
    const handleConvertClick = async () => {
    if (!file) return;
    setIsConverting(true);
    // 여기서 quality 함께 전달
    const result = await handlePdfCompress(file, quality);
    setIsConverting(false);

    if (result?.success) {
        setConvertedUrl(result.downloadUrl);
        setConvertedFilename(result.filename);
        setIsConverted(true);
    } else {
        alert("PDF 압축 실패. 다시 시도해주세요.");
    }
    };

  const handleDownload = () => {
    if (!convertedUrl || !convertedFilename) return;
    const link = document.createElement("a");
    link.href = convertedUrl;
    link.download = convertedFilename;
    link.click();
  };

  const resetConverter = () => {
    setFile(null);
    setConvertedUrl(null);
    setConvertedFilename(null);
    setIsConverted(false);
  };

    useEffect(() => {
    if (isConverted && convertedUrl && convertedFilename) {
        const link = document.createElement("a");
        link.href = convertedUrl;
        link.download = convertedFilename;
        link.click();
    }
    }, [isConverted, convertedUrl, convertedFilename]);   

  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <div className="mb-8">
          <Link
            href="/tools"
            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            다른 도구 보러 가기
          </Link>
        </div>
        <div className="text-center mb-12">
          <div className="text-6xl mb-4 flex justify-center items-center">
            <BiSolidFilePdf size={60} color="#FF4646" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">PDF 용량 줄이기</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            PDF 파일을 더 가볍게 압축해드립니다. (품질저하 최소화)
          </p>
        </div>
        <div className="max-w-2xl mx-auto mb-16">
          <Card className="shadow-xl border-0">
            <CardContent className="p-8">
                <div
                className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors duration-300 
                    ${isDragOver ? "bg-green-100 border-green-500" : "bg-white border-gray-300"}`}
                style={{ minHeight: 220, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                >
                {file ? (
                  <div className="space-y-4 text-center">
                    <CheckCircle className="w-12 h-12 text-green-500 mx-auto" />
                    <div>
                      <p className="text-lg font-medium text-gray-900">{file.name}</p>
                      <p className="text-sm text-gray-500">{(file.size / 1024 / 1024).toFixed(2)} MB</p>
                    </div>
                    <Button variant="outline" size="sm" onClick={resetConverter}>
                      다른 파일 선택
                    </Button>
                  </div>
                ) : (
                  <div className="space-y-4 text-center">
                    <Upload className="w-12 h-12 text-gray-400 mx-auto" />
                    <div>
                      <p className="text-lg font-medium text-gray-900">
                        여기에 PDF를 드래그하거나 클릭하여 업로드하세요
                      </p>
                      <p className="text-sm text-gray-500">지원 파일: .pdf</p>
                    </div>
                    <input
                      type="file"
                      onChange={handleFileSelect}
                      className="hidden"
                      id="file-upload"
                      accept=".pdf"
                    />
                    <label htmlFor="file-upload">
                      <Button asChild className="cursor-pointer">
                        <span>
                          <FileText className="w-4 h-4 mr-2" />
                          파일 선택
                        </span>
                      </Button>
                    </label>
                  </div>
                )}
              </div>
              {file && (
            <>
                {/* 👇 여기에 추가 */}
                <div className="mb-3 flex gap-3 justify-center">
                <label className="flex items-center gap-1 cursor-pointer">
                    <input
                    type="radio"
                    name="quality"
                    value="printer"
                    checked={quality === "printer"}
                    onChange={() => setQuality("printer")}
                    />
                    <span>고화질</span>
                </label>
                <label className="flex items-center gap-1 cursor-pointer">
                    <input
                    type="radio"
                    name="quality"
                    value="ebook"
                    checked={quality === "ebook"}
                    onChange={() => setQuality("ebook")}
                    />
                    <span>일반</span>
                </label>
                <label className="flex items-center gap-1 cursor-pointer">
                    <input
                    type="radio"
                    name="quality"
                    value="screen"
                    checked={quality === "screen"}
                    onChange={() => setQuality("screen")}
                    />
                    <span>최대압축</span>
                </label>
                </div>                
                <div className="mt-6 space-y-4">
                  {!isConverted ? (
                    <Button
                      onClick={handleConvertClick}
                      disabled={isConverting || !file}
                      className="w-full h-12 text-lg"
                      size="lg"
                    >
                      {isConverting ? (
                        <>
                          <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                          압축 중...
                        </>
                      ) : (
                        "압축하기"
                      )}
                    </Button>
                  ) : (
                    <div className="space-y-3">
                      <div className="flex items-center justify-center text-green-600 font-medium">
                        <CheckCircle className="w-5 h-5 mr-2" />
                        압축이 완료되었습니다!
                      </div>
                      <Button onClick={handleDownload} className="w-full h-12 text-lg" size="lg">
                        <Download className="w-5 h-5 mr-2" />
                        압축된 PDF 다운로드
                      </Button>
                      <Button
                        variant="outline"
                        onClick={resetConverter}
                        className="w-full bg-transparent"
                      >
                        다른 파일 압축하기
                      </Button>
                    </div>
                  )}
                </div>
                </>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}