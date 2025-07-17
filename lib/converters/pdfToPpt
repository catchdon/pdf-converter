// lib/converters/pdfToPpt.js

export async function handleConvert(file) {
  const formData = new FormData();
  formData.append("file", file);

  try {
    // ❶ 변환 요청
    const response = await fetch("https://api.networkkings.website/convert/pdf-to-ppt", {
      method: "POST",
      body: formData,
    });

    const result = await response.json();

    if (!result.success) {
      throw new Error(result.error || "변환 실패");
    }

    // ❷ 실제 다운로드
    const downloadRes = await fetch(`https://api.networkkings.website/download/${result.filename}`);
    const blob = await downloadRes.blob();
    const downloadUrl = window.URL.createObjectURL(blob);

    return {
      success: true,
      downloadUrl,
      filename: result.filename,
    };
  } catch (error) {
    console.error("❌ 변환 중 오류 발생:", error);
    return { success: false };
  }
}