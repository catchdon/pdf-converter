// lib/converters/imageCompress.js

export async function handleConvert(file, quality = 70) {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("quality", quality);

  try {
    const response = await fetch("https://api.networkkings.website/convert/image-compress", {
      method: "POST",
      body: formData,
    });
    const result = await response.json();
    if (!result.success) throw new Error(result.error || "이미지 압축 실패");

    const downloadRes = await fetch(`https://api.networkkings.website/download/${result.filename}`);
    const blob = await downloadRes.blob();
    const downloadUrl = window.URL.createObjectURL(blob);

    return {
      success: true,
      downloadUrl,
      filename: result.filename,
    };
  } catch (error) {
    console.error("이미지 압축 오류:", error);
    return { success: false };
  }
}