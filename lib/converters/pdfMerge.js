export async function handleConvert(files) {
  const formData = new FormData();
  // 여러 파일 업로드
  files.forEach((file) => formData.append("files", file));

  try {
    const response = await fetch("http://141.164.61.24:5000/convert/pdf-merge", {
      method: "POST",
      body: formData,
    });
    const result = await response.json();
    if (!result.success) throw new Error(result.error || "PDF 병합 실패");

    // 실제 파일 다운로드
    const downloadRes = await fetch(`http://141.164.61.24:5000/download/${result.filename}`);
    const blob = await downloadRes.blob();
    const downloadUrl = window.URL.createObjectURL(blob);

    return {
      success: true,
      downloadUrl,
      filename: result.filename,
    };
  } catch (error) {
    console.error("PDF 병합 오류:", error);
    return { success: false };
  }
}