export async function handleConvert(file, imgFormat = "jpg") {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("format", imgFormat); // jpg or png

  try {
    const response = await fetch("https://api.networkkings.website/convert/pdf-to-image", {
      method: "POST",
      body: formData,
    });

    const result = await response.json();

    if (!result.success) {
      throw new Error(result.error || "변환 실패");
    }

    // 실제 다운로드
    const downloadRes = await fetch(`https://api.networkkings.website/download/${result.filename}`);
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