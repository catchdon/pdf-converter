// lib/converters/imageToPdf.js

export async function handleConvert(files) {
  const formData = new FormData();
  // 여러 장 이미지 파일 추가
  files.forEach((file) => {
    formData.append("files", file); // 서버에서 files로 받음 (list)
  });

  try {
    // 백엔드 주소에 맞게 수정 (예시: /convert/image-to-pdf)
    const response = await fetch("http://141.164.61.24:5000/convert/image-to-pdf", {
      method: "POST",
      body: formData,
    });

    const result = await response.json();

    if (!result.success) {
      throw new Error(result.error || "변환 실패");
    }

    // 실제 PDF 파일 다운로드 (Blob → Object URL)
    const downloadRes = await fetch(`http://141.164.61.24:5000/download/${result.filename}`);
    const blob = await downloadRes.blob();
    const downloadUrl = window.URL.createObjectURL(blob);

    return {
      success: true,
      downloadUrl,
      filename: result.filename,
    };
  } catch (error) {
    console.error("❌ 이미지→PDF 변환 중 오류:", error);
    return { success: false };
  }
}