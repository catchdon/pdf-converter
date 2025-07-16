"use client";
import { useState, useEffect  } from "react";
import { Upload, FileText, Download, Loader2, CheckCircle, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { handleConvert as handleImageCompress } from "@/lib/converters/imageCompress"; // 백엔드 연결
import { RiFileZipFill } from "react-icons/ri"

const ACCEPTED_TYPES = ".jpg .jpeg .png .webp .heic";
const MAX_FILE_SIZE_MB = 100;

const isValidImage = (file) => {
  const validTypes = [
    "image/jpeg", "image/png", "image/webp", "image/heic"
  ];
  if (!validTypes.includes(file.type)) {
    alert("이미지 파일만 업로드할 수 있습니다. (JPG, PNG, WEBP, HEIC)");
    return false;
  }
  if (file.size > MAX_FILE_SIZE_MB * 1024 * 1024) {
    alert("파일 용량은 최대 100MB까지만 허용됩니다.");
    return false;
  }
  return true;
};

export default function ImageCompressPage() {
  const [file, setFile] = useState(null);
  const [quality, setQuality] = useState(70); // 기본값 70%
  const [isConverting, setIsConverting] = useState(false);
  const [isConverted, setIsConverted] = useState(false);
  const [convertedUrl, setConvertedUrl] = useState(null);
  const [convertedFilename, setConvertedFilename] = useState(null);
  const [isDragOver, setIsDragOver] = useState(false);

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragOver(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragOver(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragOver(false);
    const files = Array.from(e.dataTransfer.files);
    if (files.length > 0) {
      const f = files[0];
      if (!isValidImage(f)) return;
      setFile(f);
      setIsConverted(false);
    }
  };

  const handleFileSelect = (e) => {
    const f = e.target.files[0];
    if (!f) return;
    if (!isValidImage(f)) return;
    setFile(f);
    setIsConverted(false);
  };


  // 변환 처리
  const handleConvertClick = async () => {
    if (!file || !quality) return;
    setIsConverting(true);
    const result = await handleImageCompress(file, quality);
    setIsConverting(false);

    if (result?.success) {
      setConvertedUrl(result.downloadUrl);
      setConvertedFilename(result.filename);
      setIsConverted(true);
    } else {
      alert("이미지 압축 실패. 다시 시도해주세요.");
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
    setQuality(70);
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
            다른 도구 보러 가기
          </Link>
        </div>

        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4 flex justify-center items-center">
            <RiFileZipFill size={60} color="#FF4646" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">이미지 용량 줄이기</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">이미지 품질을 조절해 용량을 크게 줄일 수 있습니다!</p>
        </div>

        <div className="max-w-2xl mx-auto mb-16">
          <Card className="shadow-xl border-0">
            <CardContent className="p-8">
              {/* 업로드/설정 영역 */}
              <div
                className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors duration-300
                  ${isDragOver ? "bg-green-100 border-green-500" : "bg-white border-gray-300"}`}
                style={{ minHeight: 220, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}
                onDragOver={handleDragOver}
                onDragLeave={() => setIsDragOver(false)}
                onDrop={handleDrop}
              >
                {file ? (
                  <div className="space-y-4 text-center">
                    <CheckCircle className="w-12 h-12 text-green-500 mx-auto" />
                    <div>
                      <p className="text-lg font-medium text-gray-900">{file.name}</p>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-4">
                      <label className="flex items-center gap-2 text-sm">
                        <span>품질(압축률):</span>
                        <input
                          type="range"
                          min={10}
                          max={100}
                          value={quality}
                          onChange={(e) => setQuality(Number(e.target.value))}
                          className="w-48"
                        />
                        <span className="ml-2">{quality}%</span>
                      </label>
                    </div>
                    <Button variant="outline" size="sm" onClick={resetConverter}>
                      다른 파일 선택
                    </Button>
                  </div>
                ) : (
                  <div className="space-y-4 text-center">
                    <Upload className="w-12 h-12 text-gray-400 mx-auto" />
                    <div>
                      <p className="text-lg font-medium text-gray-900">여기에 이미지를 드래그하거나 클릭하여 업로드하세요</p>
                      <p className="text-sm text-gray-500">지원 파일: {ACCEPTED_TYPES}</p>
                    </div>
                    <input
                      type="file"
                      onChange={handleFileSelect}
                      className="hidden"
                      id="file-upload"
                      accept={ACCEPTED_TYPES}
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

              {/* 변환/다운로드 버튼 */}
              {file && (
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
                        압축된 이미지 다운로드
                      </Button>
                      <Button
                        variant="outline"
                        onClick={resetConverter}
                        className="w-full bg-transparent">
                        다른 이미지 압축하기
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