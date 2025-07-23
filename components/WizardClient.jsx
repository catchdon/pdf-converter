"use client";
import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Upload, FileText, Loader2, Download } from "lucide-react";
import Script from "next/script"

// 지원되는 변환 기능/옵션 정의
const conversionOptions = [
  // PDF 변환
  { key: "pdf-to-word", label: "PDF를 워드로", ext: ["pdf"], instant: true, color: "border border-blue-200 bg-white text-blue-700 hover:bg-blue-50 shadow-sm" },
  { key: "pdf-to-image", label: "PDF를 이미지로", ext: ["pdf"], instant: true, color: "border border-yellow-200 bg-white text-yellow-700 hover:bg-yellow-50 shadow-sm" },
  { key: "pdf-to-excel", label: "PDF를 엑셀로", ext: ["pdf"], instant: false, color: "border border-green-200 bg-white text-green-700 hover:bg-green-50 shadow-sm" },
  { key: "pdf-to-ppt", label: "PDF를 파워포인트로", ext: ["pdf"], instant: true, color: "border border-orange-200 bg-white text-orange-700 hover:bg-orange-50 shadow-sm" },
  // PDF 편집(모두 동일하게)
  { key: "pdf-merge", label: "PDF 합치기", ext: ["pdf"], multi: true, instant: true, color: "border border-red-200 bg-white text-red-700 hover:bg-red-50 shadow-sm" },  
  { key: "pdf-split", label: "PDF 분할", ext: ["pdf"], instant: false, color: "border border-red-200 bg-white text-red-700 hover:bg-red-50 shadow-sm" },
  { key: "pdf-extract", label: "PDF 페이지 추출", ext: ["pdf"], instant: false, color: "border border-red-200 bg-white text-red-700 hover:bg-red-50 shadow-sm" },
  { key: "pdf-remove", label: "PDF 페이지 제거", ext: ["pdf"], instant: false, color: "border border-red-200 bg-white text-red-700 hover:bg-red-50 shadow-sm" },
  { key: "pdf-compress", label: "PDF 용량 줄이기", ext: ["pdf"], instant: false, color: "border border-red-200 bg-white text-red-700 hover:bg-red-50 shadow-sm" },


  { key: "image-to-pdf", label: "이미지를 PDF로", ext: ["jpg", "jpeg", "png", "webp", "heic"], multi: true, instant: true, color: "border border-red-200 bg-white text-red-700 hover:bg-red-50 shadow-sm" },
  { key: "jpg-to-png", label: "JPG를 PNG로", ext: ["jpg", "jpeg"], instant: true, color: "border border-orange-200 bg-white text-orange-700 hover:bg-orange-50 shadow-sm" },
  { key: "jpg-to-webp", label: "JPG를 WEBP로", ext: ["jpg", "jpeg"], instant: true, color: "border border-blue-200 bg-white text-blue-700 hover:bg-blue-50 shadow-sm" },
  { key: "png-to-jpg", label: "PNG를 JPG로", ext: ["png"], instant: true, color: "border border-orange-200 bg-white text-orange-700 hover:bg-orange-50 shadow-sm"},
  { key: "png-to-webp", label: "PNG를 WEBP로", ext: ["png"], instant: true, color: "border border-blue-200 bg-white text-blue-700 hover:bg-blue-50 shadow-sm" },
  { key: "heic-to-jpg", label: "HEIC를 JPG로", ext: ["heic"], instant: true, color: "border border-green-300 bg-white text-green-800 hover:bg-green-50 shadow-sm" },

  // 이미지 옵션형 (토스 스타일, 중립/중성색)
  { key: "image-compress", label: "이미지 용량 줄이기", ext: ["jpg", "jpeg", "png"], instant: false, color: "border border-gray-200 bg-white text-gray-700 hover:bg-gray-50 shadow-sm" },
  { key: "image-resize", label: "이미지 사이즈 변경", ext: ["jpg", "jpeg", "png"], instant: false, color: "border border-gray-200 bg-white text-gray-700 hover:bg-gray-50 shadow-sm" },

  // 기타 오피스 문서 변환 (워드/엑셀/파워포인트 계열색 적용)
  { key: "word-to-pdf", label: "워드를 PDF로", ext: ["docx"], instant: true, color: "border border-blue-300 bg-white text-blue-800 hover:bg-blue-50 shadow-sm" },
  { key: "excel-to-pdf", label: "엑셀을 PDF로", ext: ["xlsx", "csv"], instant: true, color: "border border-green-300 bg-white text-green-800 hover:bg-green-50 shadow-sm" },
  { key: "ppt-to-pdf", label: "파워포인트를 PDF로", ext: ["ppt", "pptx"], instant: true, color: "border border-orange-300 bg-white text-orange-800 hover:bg-orange-50 shadow-sm" },
  ];

const EXT_ALL = [
  "pdf", "jpg", "jpeg", "png", "webp", "heic", "docx", "xlsx", "csv", "ppt", "pptx"
];

function getExt(name) {
  return name.split('.').pop()?.toLowerCase() || "";
}

function isAllImages(files) {
  const exts = ["jpg", "jpeg", "png", "webp", "heic"];
  return files.every(f => exts.includes(getExt(f.name)));
}

function getAvailableConversions(files) {
  if (!files.length) return [];

  const firstExt = getExt(files[0].name);
  const allSameExt = files.every(f => getExt(f.name) === firstExt);

  // 2개 이상 PDF만 선택시 PDF 합치기만 노출
  if (files.length > 1 && allSameExt && firstExt === "pdf") {
    // PDF 합치기만 보여줌
    return conversionOptions.filter(opt => opt.key === "pdf-merge");
  }

  // 2개 이상 이미지(확장자 혼합도 허용)면 image-to-pdf만 노출
  if (files.length > 1 && isAllImages(files)) {
    return conversionOptions.filter(opt => opt.key === "image-to-pdf");
  }  

  // 여러 파일이지만 PDF 아니거나 확장자 다르면 아무것도 안 보임
  if (files.length > 1) {
    return [];
  }
  // 1개 파일이면 기존처럼 모든 옵션
  return conversionOptions.filter(opt => opt.ext.includes(firstExt));
}

export default function WizardClient() {
  const [files, setFiles] = useState([]);
  const [processing, setProcessing] = useState(false);
  const [resultUrl, setResultUrl] = useState(null);
  const [resultName, setResultName] = useState(null);
  const [optionTool, setOptionTool] = useState(null);
  const [excelFormat, setExcelFormat] = useState("xlsx");
  const [imgSize, setImgSize] = useState("1024");
  const [imgQuality, setImgQuality] = useState(80);
  const [pdfCompressQuality, setPdfCompressQuality] = useState("ebook"); // 기본값: 일반
  const [splitRange, setSplitRange] = useState("");
  const [extractRange, setExtractRange] = useState(""); // 추출 페이지 입력값 상태
  const [removeRange, setRemoveRange] = useState("");
  const [dragActive, setDragActive] = useState(false);  



  // 파일 선택
  const handleFileChange = e => {
    setFiles(Array.from(e.target.files));
    setResultUrl(null);
    setOptionTool(null);
  };


  const handleDragEnter = e => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(true);
  };
  const handleDragLeave = e => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
  };
  const handleDragOver = e => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(true);
  };
  const handleDrop = e => {
    e.preventDefault();
    setFiles(Array.from(e.dataTransfer.files));
    setResultUrl(null);
    setOptionTool(null);
    setDragActive(false); // 드롭 후에는 반드시 false
  };

  // 변환 요청
  const handleConvert = async (toolKey) => {
    setProcessing(true);
    setResultUrl(null);

    // 옵션/추가폼이 필요한 도구라면 해당 옵션만 열기
    if (["pdf-to-excel", "pdf-split", "pdf-compress","pdf-extract", "pdf-remove", "image-compress", "image-resize"].includes(toolKey)) {
      setOptionTool(toolKey);
      setProcessing(false);
      return;
    }

    if (toolKey === "pdf-merge" && files.length < 2) {
      alert("PDF 합치기는 2개 이상의 파일이 필요하기 때문에, 전용 페이지에서 더 편리하게 진행하실 수 있도록 준비했습니다.");
      window.location.href = "/pdf-merge";
      return;
    }


    setProcessing(true);
    setResultUrl(null);    
    // 실제 백엔드 엔드포인트로 변경
    const formData = new FormData();
    if (toolKey === "image-to-pdf") {
      files.forEach(f => formData.append("files", f));
    } else if (files.length === 1) {
      formData.append("file", files[0]);
    } else {
      files.forEach(f => formData.append("files", f));
    }
    let endpoint = `https://api.networkkings.website/convert/${toolKey}`;

    const res = await fetch(endpoint, { method: "POST", body: formData });
    const data = await res.json();
    setProcessing(false);

    if (data?.success) {
      // 서버에서 filename만 오고 파일은 따로 /download/filename에서 blob으로 받는 방식이면
      const downloadRes = await fetch(`https://api.networkkings.website/download/${data.filename}`);
      const blob = await downloadRes.blob();
      const downloadUrl = window.URL.createObjectURL(blob);

      setResultUrl(downloadUrl);
      setResultName(data.filename);
      setOptionTool(null);
    } else {
      alert("변환 실패");
    }
  };



  // 옵션 변환 요청
  const handleOptionConvert = async () => {
    setProcessing(true);
    const formData = new FormData();
    formData.append("file", files[0]);
    let endpoint = "";



    if (optionTool === "pdf-to-excel") {
      endpoint = "https://api.networkkings.website/convert/pdf-to-excel";
      formData.append("format", excelFormat);
    }
    if (optionTool === "image-resize") {
      endpoint = "https://api.networkkings.website/convert/image-resize";
      formData.append("size", imgSize);
    }
    if (optionTool === "image-compress") {
      endpoint = "https://api.networkkings.website/convert/image-compress";
      formData.append("quality", imgQuality);
    }
    if (optionTool === "pdf-compress") {
      endpoint = "https://api.networkkings.website/convert/pdf-compress";
      formData.append("quality", pdfCompressQuality); // <== 라디오에서 선택한 값!
    }
    if (optionTool === "pdf-split") {
      endpoint = "https://api.networkkings.website/convert/pdf-split";
      formData.append("ranges", splitRange); // 백엔드가 "ranges"로 받을 것
    }
    if (optionTool === "pdf-extract") {
      endpoint = "https://api.networkkings.website/convert/pdf-extract";
      formData.append("pages", extractRange);
    }
    if (optionTool === "pdf-remove") {
      endpoint = "https://api.networkkings.website/convert/pdf-remove";
      formData.append("pages", removeRange); // "ranges"로 통일!
    }        

    const res = await fetch(endpoint, { method: "POST", body: formData });
    const data = await res.json();
    setProcessing(false);

    if (data?.success) {
      const downloadRes = await fetch(`https://api.networkkings.website/download/${data.filename}`);
      const blob = await downloadRes.blob();
      const downloadUrl = window.URL.createObjectURL(blob);

      setResultUrl(downloadUrl);
      setResultName(data.filename);
      setOptionTool(null);
    } else {
      alert("변환 실패");
    }
  };

  useEffect(() => {
    if (resultUrl && resultName) {
      const link = document.createElement("a");
      link.href = resultUrl;
      link.download = resultName || "converted_file";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  }, [resultUrl, resultName]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col items-center">
      <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mt-8 mb-2 text-center">
        문서킹 - 무료 변환 도구 마법사
      </h1>      
      <div className="w-full max-w-2xl mt-6 mb-6">
        <Card>
          <CardContent className="p-8">
            <div
              className={
                "border-2 border-dashed rounded-lg p-8 flex flex-col items-center justify-center cursor-pointer transition " +
                (dragActive ? "bg-green-50 border-green-400" : "bg-white hover:bg-blue-50")
              }
              onDrop={handleDrop}
              onDragOver={handleDragOver}
              onDragEnter={handleDragEnter}
              onDragLeave={handleDragLeave}
            >                    
              <p className="text-lg font-semibold text-center mb-5 text-gray-700">
              어떤 파일이든 올려보세요! <span className="text-blue-700">자동으로 가능한 변환 도구</span>를 제안해드립니다.
              </p>

              <Upload className="w-12 h-12 text-gray-400 mb-4" />
              <input
                type="file"
                accept={EXT_ALL.map(e => "." + e).join(",")}
                multiple
                onChange={handleFileChange}
                className="hidden"
                id="file-upload"
              />
              <label htmlFor="file-upload" className="mb-2 cursor-pointer">
                <Button asChild>
                  <span>
                    <FileText className="w-4 h-4 mr-2" />
                    파일 선택 또는 드래그
                  </span>
                </Button>
              </label>
              {files.length > 0 && (
                <p className="text-sm text-gray-600 mt-2">
                  {files.length}개 파일 업로드됨:{" "}
                  {files.map(f => f.name).join(", ")}
                </p>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
      {/* 👇👇 파일 업로드된 경우 광고 노출! 👇👇 */}
      {files.length > 0 && (
        <div className="ad-placeholder mt-4 mb-4" style={{ minHeight: 280, width: "100%", maxWidth: 640 }}>
          <div style={{ textAlign: 'left', fontSize: 12, color: '#aaa', marginBottom: 4 }}>광고</div>
          <ins className="adsbygoogle"
            style={{ display: "block" }}
            data-ad-client="ca-pub-2232732758246542"
            data-ad-slot="5287055426"
            data-ad-format="auto"
            data-full-width-responsive="true"></ins>
          <Script id="adsbygoogle-inpage-init" strategy="afterInteractive">
            {`(adsbygoogle = window.adsbygoogle || []).push({});`}
          </Script>
        </div>
      )}
      {/* 👆👆 여기! 👆👆 */}
      {/* 변환 버튼/옵션 */}
      <div className="w-full max-w-2xl">
        <Card>
          <CardContent className="p-8">
            {files.length === 0 && <p className="text-center text-gray-400">파일을 먼저 업로드 해주세요.</p>}
            {/* 변환 기능 버튼 자동 표시 */}
            {files.length > 0 && (
              <>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {getAvailableConversions(files).map(opt => (
                    <Button
                      key={opt.key}
                      onClick={() => handleConvert(opt.key)}
                      disabled={processing}
                      className={`relative flex items-center justify-center py-5 px-2 text-base ${opt.color}`}
                    >
                      {processing && (
                        <span className="absolute inset-0 flex items-center justify-center bg-white/60 rounded-xl z-10">
                          <Loader2 className="animate-spin w-6 h-6 text-gray-400" />
                        </span>
                      )}
                      <span className={processing ? "opacity-40" : ""}>{opt.label}</span>
                    </Button>
                  ))}
                </div>
              </>
            )}

            {optionTool === "pdf-compress" && (
              <div className="mt-8 flex flex-col items-center">
                <p className="mb-4 font-bold">압축 품질 선택</p>
                <div className="flex gap-4 mb-6">
                  <label className="flex items-center gap-1 cursor-pointer">
                    <input
                      type="radio"
                      name="pdf-compress-quality"
                      value="printer"
                      checked={pdfCompressQuality === "printer"}
                      onChange={() => setPdfCompressQuality("printer")}
                    />
                    <span>고화질</span>
                  </label>
                  <label className="flex items-center gap-1 cursor-pointer">
                    <input
                      type="radio"
                      name="pdf-compress-quality"
                      value="ebook"
                      checked={pdfCompressQuality === "ebook"}
                      onChange={() => setPdfCompressQuality("ebook")}
                    />
                    <span>일반</span>
                  </label>
                  <label className="flex items-center gap-1 cursor-pointer">
                    <input
                      type="radio"
                      name="pdf-compress-quality"
                      value="screen"
                      checked={pdfCompressQuality === "screen"}
                      onChange={() => setPdfCompressQuality("screen")}
                    />
                    <span>최대압축</span>
                  </label>
                </div>
                <Button onClick={handleOptionConvert} disabled={processing}>
                  {processing ? <Loader2 className="animate-spin mr-2" /> : null}
                  압축하기
                </Button>
              </div>
            )}

            {optionTool === "pdf-split" && (
              <div className="mt-8 flex flex-col items-center">
                <p className="mb-2 font-bold">분할할 페이지 범위 입력 (예: 1-3,4,5-6):</p>
                <input
                  type="text"
                  value={splitRange}
                  onChange={e => setSplitRange(e.target.value)}
                  className="mb-3 border rounded p-2 w-64 text-center"
                  placeholder="예: 1-3,5,8"
                />
                <Button onClick={handleOptionConvert} disabled={processing}>
                  {processing ? <Loader2 className="animate-spin mr-2" /> : null}
                  분할하기
                </Button>
              </div>
            )}

            {optionTool === "pdf-extract" && (
              <div className="mt-8 flex flex-col items-center">
                <p className="mb-2 font-bold">추출할 페이지 범위 입력 (예: 2-4,7,10):</p>
                <input
                  type="text"
                  value={extractRange}
                  onChange={e => setExtractRange(e.target.value)}
                  className="mb-3 border rounded p-2 w-64 text-center"
                  placeholder="예: 2-4,7,10"
                />
                <Button onClick={handleOptionConvert} disabled={processing}>
                  {processing ? <Loader2 className="animate-spin mr-2" /> : null}
                  추출하기
                </Button>
              </div>
            )}

            {optionTool === "pdf-remove" && (
              <div className="mt-8 flex flex-col items-center">
                <p className="mb-2 font-bold">제거할 페이지 입력 (예: 1,3,5-7):</p>
                <input
                  type="text"
                  value={removeRange}
                  onChange={e => setRemoveRange(e.target.value)}
                  className="mb-3 border rounded p-2 w-64 text-center"
                  placeholder="예: 1,3,5-7"
                />
                <Button onClick={handleOptionConvert} disabled={processing || !removeRange.trim()}>
                  {processing ? <Loader2 className="animate-spin mr-2" /> : null}
                  페이지 제거
                </Button>
              </div>
            )}                        
            {/* 옵션/폼 표시: PDF→엑셀, 이미지 크기/품질 등 */}
            {optionTool === "pdf-to-excel" && (
              <div className="mt-8 flex flex-col items-center">
                <p className="mb-2 font-bold">엑셀 변환 형식 선택</p>
                <select
                  value={excelFormat}
                  onChange={e => setExcelFormat(e.target.value)}
                  className="mb-3 border rounded p-2"
                >
                  <option value="xlsx">XLSX</option>
                  <option value="csv">CSV</option>
                </select>
                <Button onClick={handleOptionConvert} disabled={processing}>
                  {processing ? <Loader2 className="animate-spin mr-2" /> : null}
                  변환하기
                </Button>
              </div>
            )}

            {optionTool === "image-resize" && (
              <div className="mt-8 flex flex-col items-center">
                <p className="mb-2 font-bold">이미지 크기(px)</p>
                <input
                  type="number"
                  value={imgSize}
                  onChange={e => setImgSize(e.target.value)}
                  className="mb-3 border rounded p-2 w-32 text-center"
                  min={100}
                  max={5000}
                />
                <Button onClick={handleOptionConvert} disabled={processing}>
                  {processing ? <Loader2 className="animate-spin mr-2" /> : null}
                  크기 변경
                </Button>
              </div>
            )}

            {optionTool === "image-compress" && (
              <div className="mt-8 flex flex-col items-center">
                <p className="mb-2 font-bold">이미지 품질 (%)</p>
                <input
                  type="number"
                  value={imgQuality}
                  onChange={e => setImgQuality(e.target.value)}
                  className="mb-3 border rounded p-2 w-32 text-center"
                  min={10}
                  max={100}
                />
                <Button onClick={handleOptionConvert} disabled={processing}>
                  {processing ? <Loader2 className="animate-spin mr-2" /> : null}
                  용량 줄이기
                </Button>
              </div>
            )}

            {/* 결과 다운로드 */}
            {resultUrl && (
              <div className="mt-8 flex flex-col items-center">
                <p className="mb-2 text-green-600 font-bold">변환 완료! 파일을 다운로드 하세요.</p>
                <Button
                  onClick={() => {
                    const link = document.createElement("a");
                    link.href = resultUrl;
                    link.download = resultName || "converted_file";
                    link.click();
                  }}
                  className="flex items-center gap-2"
                >
                  <Download className="w-5 h-5" /> 다운로드
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}