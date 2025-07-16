// /lib/converters/heicToJpg.js

export async function handleConvert(file) {
  const formData = new FormData();
  formData.append("file", file);

  try {
    const response = await fetch("http://141.164.61.24:5000/convert/heic-to-jpg", {
      method: "POST",
      body: formData,
    });
    const result = await response.json();
    if (!result.success) throw new Error(result.error || "HEIC → JPG 변환 실패");

    const downloadRes = await fetch(`http://141.164.61.24:5000/download/${result.filename}`);
    const blob = await downloadRes.blob();
    const downloadUrl = window.URL.createObjectURL(blob);

    return {
      success: true,
      downloadUrl,
      filename: result.filename,
    };
  } catch (error) {
    console.error("HEIC → JPG 변환 오류:", error);
    return { success: false };
  }
}