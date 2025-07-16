export async function handleConvert(file) {
  const formData = new FormData();
  formData.append("file", file);

  try {
    // 1차 변환 요청
    const response = await fetch("http://141.164.61.24:5000/convert/png-to-jpg", {
      method: "POST",
      body: formData,
    });

    const result = await response.json();

    if (!result.success) {
      throw new Error(result.error || "PNG → JPG 변환 실패");
    }

    // 2차: 실제 JPG 파일 다운로드 (blob 변환)
    const downloadRes = await fetch(`http://141.164.61.24:5000/download/${result.filename}`);
    const blob = await downloadRes.blob();
    const downloadUrl = window.URL.createObjectURL(blob);

    return {
      success: true,
      downloadUrl,
      filename: result.filename,
    };
  } catch (error) {
    console.error("❌ PNG → JPG 변환 중 오류:", error);
    return { success: false };
  }
}