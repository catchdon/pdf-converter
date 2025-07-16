// lib/converters/imageResize.js

export async function handleConvert(file, width, height, keepRatio = true) {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("width", width);
  formData.append("height", height);
  formData.append("keepRatio", keepRatio);

  try {
    const response = await fetch("http://141.164.61.24:5000/convert/image-resize", {
      method: "POST",
      body: formData,
    });
    const result = await response.json();
    if (!result.success) throw new Error(result.error || "이미지 리사이즈 실패");

    const downloadRes = await fetch(`http://141.164.61.24:5000/download/${result.filename}`);
    const blob = await downloadRes.blob();
    const downloadUrl = window.URL.createObjectURL(blob);

    return {
      success: true,
      downloadUrl,
      filename: result.filename,
    };
  } catch (error) {
    console.error("이미지 리사이즈 오류:", error);
    return { success: false };
  }
}