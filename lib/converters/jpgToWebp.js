// lib/converters/jpgToWebp.js

export async function handleConvert(file) {
  const formData = new FormData();
  formData.append("file", file);

  try {
    const response = await fetch("http://141.164.61.24:5000/convert/jpg-to-webp", {
      method: "POST",
      body: formData,
    });
    const result = await response.json();
    if (!result.success) throw new Error(result.error || "JPG → WEBP 변환 실패");

    // 실제 파일 다운로드 (blob)
    const downloadRes = await fetch(`http://141.164.61.24:5000/download/${result.filename}`);
    const blob = await downloadRes.blob();
    const downloadUrl = window.URL.createObjectURL(blob);

    return {
      success: true,
      downloadUrl,
      filename: result.filename,
    };
  } catch (error) {
    console.error("JPG → WEBP 변환 오류:", error);
    return { success: false };
  }
}