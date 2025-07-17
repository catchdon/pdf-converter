// /lib/converters/pptToPdf.js

export async function handleConvert(file) {
  const formData = new FormData();
  formData.append("file", file);

  try {
    // 1차 변환 요청
    const response = await fetch("https://api.networkkings.website/convert/ppt-to-pdf", {
      method: "POST",
      body: formData,
    });

    const result = await response.json();

    if (!result.success) {
      throw new Error(result.error || "PPT → PDF 변환 실패");
    }

    // 2차: 실제 PDF 파일 다운로드 (blob 변환)
    const downloadRes = await fetch(`https://api.networkkings.website/download/${result.filename}`);
    const blob = await downloadRes.blob();
    const downloadUrl = window.URL.createObjectURL(blob);

    return {
      success: true,
      downloadUrl,
      filename: result.filename,
    };
  } catch (error) {
    console.error("❌ PPT → PDF 변환 중 오류:", error);
    return { success: false };
  }
}