// lib/converters/pdfCompress.js

export async function handleConvert(file, quality = "ebook") {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("quality", quality);  // 👈 추가

  try {
    // 1. 변환(압축) 요청
    const response = await fetch("http://141.164.61.24:5000/convert/pdf-compress", {
      method: "POST",
      body: formData,
    });
    const result = await response.json();
    if (!result.success) throw new Error(result.error || "PDF 압축 실패");

    // 2. 압축된 파일 다운로드
    const downloadRes = await fetch(`http://141.164.61.24:5000/download/${result.filename}`);
    const blob = await downloadRes.blob();
    const downloadUrl = window.URL.createObjectURL(blob);

    return {
      success: true,
      downloadUrl,
      filename: result.filename,
    };
  } catch (error) {
    console.error("PDF 압축 오류:", error);
    return { success: false };
  }
}