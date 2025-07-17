// lib/converters/pngToWebp.js

export async function handleConvert(file) {
  const formData = new FormData();
  formData.append("file", file);

  try {
    const response = await fetch("https://api.networkkings.website/convert/png-to-webp", {
      method: "POST",
      body: formData,
    });
    const result = await response.json();
    if (!result.success) throw new Error(result.error || "PNG → WEBP 변환 실패");

    const downloadRes = await fetch(`https://api.networkkings.website/download/${result.filename}`);
    const blob = await downloadRes.blob();
    const downloadUrl = window.URL.createObjectURL(blob);

    return {
      success: true,
      downloadUrl,
      filename: result.filename,
    };
  } catch (error) {
    console.error("PNG → WEBP 변환 오류:", error);
    return { success: false };
  }
}