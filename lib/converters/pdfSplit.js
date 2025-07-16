// lib/converters/pdfSplit.js

export async function handleConvert(file, ranges) {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("ranges", ranges);

  try {
    const response = await fetch("http://141.164.61.24:5000/convert/pdf-split", {
      method: "POST",
      body: formData,
    });
    const result = await response.json();
    if (!result.success) throw new Error(result.error || "PDF 분할 실패");

    // zip 파일로 반환
    const downloadRes = await fetch(`http://141.164.61.24:5000/download/${result.filename}`);
    const blob = await downloadRes.blob();
    const downloadUrl = window.URL.createObjectURL(blob);

    return {
      success: true,
      downloadUrl,
      filename: result.filename,
    };
  } catch (error) {
    console.error("PDF 분할 오류:", error);
    return { success: false };
  }
}
