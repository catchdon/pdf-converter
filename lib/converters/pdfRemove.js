// lib/converters/pdfRemove.js

export async function handleConvert(file, removePages) {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("pages", removePages);

  try {
    const response = await fetch("https://api.networkkings.website/convert/pdf-remove", {
      method: "POST",
      body: formData,
    });
    const result = await response.json();
    if (!result.success) throw new Error(result.error || "PDF 페이지 제거 실패");

    const downloadRes = await fetch(`https://api.networkkings.website/download/${result.filename}`);
    const blob = await downloadRes.blob();
    const downloadUrl = window.URL.createObjectURL(blob);

    return {
      success: true,
      downloadUrl,
      filename: result.filename,
    };
  } catch (error) {
    console.error("PDF 페이지 제거 오류:", error);
    return { success: false };
  }
}
