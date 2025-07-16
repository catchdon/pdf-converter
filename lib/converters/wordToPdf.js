export async function handleConvert(file) {
  const formData = new FormData();
  formData.append("file", file);

  try {
    const response = await fetch("http://141.164.61.24:5000/convert/word-to-pdf", {
      method: "POST",
      body: formData,
    });

    const result = await response.json();

    if (!result.success) {
      throw new Error(result.error || "변환 실패");
    }

    // 실제 PDF 파일 다운로드
    const downloadRes = await fetch(`http://141.164.61.24:5000/download/${result.filename}`);
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