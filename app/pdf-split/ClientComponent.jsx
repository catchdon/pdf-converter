"use client";
import { useState, useEffect } from "react";
import { Upload, FileText, Download, Loader2, CheckCircle, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { handleConvert as handlePdfSplit } from "@/lib/converters/pdfSplit";
import { BiSolidFilePdf } from "react-icons/bi"



export default function PdfSplitPage() {
  const [file, setFile] = useState(null);
  const [ranges, setRanges] = useState(""); // "1-3,5,7-8"
  const [isConverting, setIsConverting] = useState(false);
  const [isConverted, setIsConverted] = useState(false);
  const [downloadUrl, setDownloadUrl] = useState(null);
  const [downloadFilename, setDownloadFilename] = useState(null);
  const [isDragOver, setIsDragOver] = useState(false);
  
  const MAX_FILE_SIZE_MB = 100;
  const MAX_TOTAL_SIZE_MB = 100;

    const isValidFile = (file) => {
    if (file.type !== "application/pdf") {
        alert("PDF 파일만 업로드할 수 있습니다.");
        return false;
    }
    if (file.size > MAX_FILE_SIZE_MB * 1024 * 1024) {
        alert("파일 용량은 최대 100MB까지만 허용됩니다.");
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
    if (f.size > MAX_TOTAL_SIZE_MB * 1024 * 1024) {
        alert("파일 용량은 100MB를 초과할 수 없습니다.");
        return;
    }

    setFile(f);
    setIsConverted(false);
    };
  
    const handleFileSelect = (e) => {
    const f = e.target.files[0];
    if (!f) return;
    if (!isValidFile(f)) return;
    if (f.size > MAX_TOTAL_SIZE_MB * 1024 * 1024) {
        alert("파일 용량은 100MB를 초과할 수 없습니다.");
        return;
    }
    setFile(f);
    setIsConverted(false);
    };

  const handleConvertClick = async () => {
    if (!file || !ranges) {
      alert("PDF 파일과 분할 범위를 입력하세요.");
      return;
    }
    setIsConverting(true);
    const result = await handlePdfSplit(file, ranges);
    setIsConverting(false);
    if (result?.success) {
      setDownloadUrl(result.downloadUrl);
      setDownloadFilename(result.filename);
      setIsConverted(true);
    } else {
      alert("분할 실패. 다시 시도해주세요.");
    }
  };

  const handleDownload = () => {
    if (!downloadUrl || !downloadFilename) return;
    const link = document.createElement("a");
    link.href = downloadUrl;
    link.download = downloadFilename;
    link.click();
  };

  const resetConverter = () => {
    setFile(null);
    setRanges("");
    setDownloadUrl(null);
    setDownloadFilename(null);
    setIsConverted(false);
  };

  useEffect(() => {
    if (isConverted && downloadUrl && downloadFilename) {
      const link = document.createElement("a");
      link.href = downloadUrl;
      link.download = downloadFilename;
      link.click();
    }
  }, [isConverted, downloadUrl, downloadFilename]);

  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <div className="mb-8">
          <Link href="/tools" className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium">
            <ArrowLeft className="w-4 h-4 mr-2" />
            다른 도구 보러 가기
          </Link>
        </div>
        <div className="text-center mb-12">
            <div className="text-6xl mb-4 flex justify-center items-center">
                <BiSolidFilePdf size={60} color="#FF4646" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">PDF 분할</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">페이지 범위를 입력해서 PDF를 여러 개로 분할하세요.</p>
        </div>
        <div className="max-w-2xl mx-auto mb-16">
          <Card className="shadow-xl border-0">
            <CardContent className="p-8">
              {/* 업로드/입력 영역 */}
                <div
                className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors duration-300 
                    ${isDragOver ? "bg-green-100 border-green-500" : "bg-white border-gray-300"}`}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                >              
                {file ? (
                  <div className="space-y-4 text-center">
                    <CheckCircle className="w-12 h-12 text-green-500 mx-auto" />
                    <div>
                      <p className="text-lg font-medium text-gray-900">{file.name}</p>
                      <Button variant="outline" size="sm" onClick={resetConverter}>
                        다른 파일 선택
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4 text-center">
                    <Upload className="w-12 h-12 text-gray-400 mx-auto" />
                    <div>
                      <p className="text-lg font-medium text-gray-900">여기에 PDF를 드래그하거나 클릭하여 업로드하세요</p>
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
              {/* 범위 입력란 */}
              {file && (
                <div className="my-6">
                  <label className="block mb-2 font-semibold text-gray-900">
                    분할할 페이지 범위 <span className="text-gray-400 text-sm">(예: 1-3,5,7-8)</span>
                  </label>
                  <input
                    type="text"
                    className="border rounded w-full px-4 py-2"
                    value={ranges}
                    onChange={e => setRanges(e.target.value)}
                    placeholder="예: 1-3,5,7-8"
                  />
                </div>
              )}
              {/* 변환/다운로드 버튼 */}
              {file && (
                <div className="mt-6 space-y-4">
                  {!isConverted ? (
                    <Button
                      onClick={handleConvertClick}
                      disabled={isConverting || !file || !ranges}
                      className="w-full h-12 text-lg"
                      size="lg"
                    >
                      {isConverting ? (
                        <>
                          <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                          분할 중...
                        </>
                      ) : (
                        "PDF 분할하기"
                      )}
                    </Button>
                  ) : (
                    <div className="space-y-3">
                      <div className="flex items-center justify-center text-green-600 font-medium">
                        <CheckCircle className="w-5 h-5 mr-2" />
                        분할이 완료되었습니다!
                      </div>
                      <Button onClick={handleDownload} className="w-full h-12 text-lg" size="lg">
                        <Download className="w-5 h-5 mr-2" />
                        분할된 PDF 다운로드
                      </Button>
                      <Button
                        variant="outline"
                        onClick={resetConverter}
                        className="w-full bg-transparent">
                        다른 PDF 분할하기
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