export async function handleConvert(file, excelFormat = "xlsx") {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("format", excelFormat); // "xlsx" 또는 "csv"

  try {
    // Flask 백엔드에 변환 요청
    const response = await fetch("http://141.164.61.24:5000/convert/pdf-to-excel", {
      method: "POST",
      body: formData,
    });

    const result = await response.json();

    if (!result.success) {
      throw new Error(result.error || "변환 실패");
    }

    // 변환된 파일을 다시 다운로드(BLOB)
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