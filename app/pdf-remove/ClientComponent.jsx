// app/pdf-remove/page.jsx

"use client";
import { useState, useEffect  } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Upload, FileText, Download, Loader2, CheckCircle, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { handleConvert as handlePdfRemove } from "@/lib/converters/pdfRemove";
import { BiSolidFilePdf } from "react-icons/bi"



export default function PdfRemovePage() {
  const [file, setFile] = useState(null);
  const [pages, setPages] = useState(""); // "1,3,5" 등 제거할 페이지
  const [isConverting, setIsConverting] = useState(false);
  const [isConverted, setIsConverted] = useState(false);
  const [convertedUrl, setConvertedUrl] = useState(null);
  const [convertedFilename, setConvertedFilename] = useState(null);
  const [isDragOver, setIsDragOver] = useState(false);

    const MAX_FILE_SIZE_MB = 100;

    const isValidFile = (file) => {
    if (file.type !== "application/pdf") {
        alert("PDF 파일만 업로드할 수 있습니다.");
        return false;
    }
    if (file.size > MAX_FILE_SIZE_MB * 1024 * 1024) {
        alert("파일 용량은 최대 100MB까지 가능합니다.");
        return false;
    }
    return true;
    };

    const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragOver(true);
    };

    const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragOver(false);
    };

    const handleDrop = (e) => {
    e.preventDefault();
    setIsDragOver(false);

    const droppedFiles = Array.from(e.dataTransfer.files);
    if (droppedFiles.length === 0) return;
    const f = droppedFiles[0];
    if (!isValidFile(f)) return;

    setFile(f);
    setIsConverted(false);
    };

    const handleFileSelect = (e) => {
    const f = e.target.files[0];
    if (!f) return;
    if (!isValidFile(f)) return;

    setFile(f);
    setIsConverted(false);
    };

  const handleConvertClick = async () => {
    if (!file || !pages) return;
    setIsConverting(true);
    const result = await handlePdfRemove(file, pages);
    setIsConverting(false);

    if (result?.success) {
      setConvertedUrl(result.downloadUrl);
      setConvertedFilename(result.filename);
      setIsConverted(true);
    } else {
      alert("PDF 페이지 제거 실패. 다시 시도해주세요.");
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
    setPages("");
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
        {/* Back Button */}
        <div className="mb-8">
          <Link
            href="/tools"
            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium">
            <ArrowLeft className="w-4 h-4 mr-2" />
            모든 도구 보러 가기
          </Link>
        </div>

        <div className="text-center mb-12">
          <div className="text-6xl mb-4 flex justify-center items-center">
            <BiSolidFilePdf size={60} color="#FF4646" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">PDF 페이지 제거</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            PDF에서 필요 없는 페이지를 삭제하세요! 예시: 2,5,7-10
          </p>
        </div>

        <div className="max-w-2xl mx-auto mb-16">
          <Card className="shadow-xl border-0">
            <CardContent className="p-8">
                <div
                className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors duration-300 
                    ${isDragOver ? "bg-green-100 border-green-500" : "bg-white border-gray-300"}`}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                >
                {file ? (
                  <div className="space-y-4">
                    <CheckCircle className="w-12 h-12 text-green-500 mx-auto" />
                    <p className="text-lg font-medium text-gray-900">{file.name}</p>
                    <Button variant="outline" size="sm" onClick={resetConverter}>
                      다른 파일 선택
                    </Button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <Upload className="w-12 h-12 text-gray-400 mx-auto" />
                    <div>
                      <p className="text-lg font-medium text-gray-900">
                        PDF 파일을 드래그하거나 클릭하여 업로드하세요
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

              {/* 페이지 입력 */}
              {file && (
                <div className="mt-6 space-y-4">
                  <label className="block mb-2 text-md text-gray-700 font-medium">
                    제거할 페이지 번호 입력 (예: 1,3,5-7)
                  </label>
                  <input
                    type="text"
                    className="border rounded w-full px-2 py-2 text-lg"
                    value={pages}
                    onChange={(e) => setPages(e.target.value)}
                    placeholder="예시: 2,5,8-10"
                  />
                  {!isConverted ? (
                    <Button
                      onClick={handleConvertClick}
                      disabled={isConverting || !pages}
                      className="w-full h-12 text-lg"
                      size="lg"
                    >
                      {isConverting ? (
                        <>
                          <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                          처리 중...
                        </>
                      ) : (
                        "페이지 제거"
                      )}
                    </Button>
                  ) : (
                    <div className="space-y-3">
                      <div className="flex items-center justify-center text-green-600 font-medium">
                        <CheckCircle className="w-5 h-5 mr-2" />
                        변환이 완료되었습니다!
                      </div>
                      <Button onClick={handleDownload} className="w-full h-12 text-lg" size="lg">
                        <Download className="w-5 h-5 mr-2" />
                        결과 파일 다운로드
                      </Button>
                      <Button
                        variant="outline"
                        onClick={resetConverter}
                        className="w-full bg-transparent">
                        다른 파일 처리하기
                      </Button>
                    </div>
                  )}
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}