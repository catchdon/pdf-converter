// lib/converters/pdfExtract.js

export async function handleConvert(file, pages) {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("pages", pages); // 예: "1,3,5-7"

  try {
    const response = await fetch("https://api.networkkings.website/convert/pdf-extract", {
      method: "POST",
      body: formData,
    });
    const result = await response.json();
    if (!result.success) throw new Error(result.error || "PDF 페이지 추출 실패");

    // 다운로드 (추출 결과는 보통 1개 PDF)
    const downloadRes = await fetch(`https://api.networkkings.website/download/${result.filename}`);
    const blob = await downloadRes.blob();
    const downloadUrl = window.URL.createObjectURL(blob);

    return {
      success: true,
      downloadUrl,
      filename: result.filename,
    };
  } catch (error) {
    console.error("PDF 페이지 추출 오류:", error);
    return { success: false };
  }
}

