export async function handleConvert(file) {
  const formData = new FormData();
  formData.append('file', file);

  try {
    // 1. 파일 업로드해서 변환 요청
    const response = await fetch('http://141.164.61.24:5000/convert/pdf-to-word', {
      method: 'POST',
      body: formData,
    });

    // 2. 변환 결과 JSON 받기
    const result = await response.json();
    console.log('변환 결과 result:', result);

    if (!result.success) {
      throw new Error(result.error || '변환 실패');
    }

    // 3. 실제 파일 다운로드
    const downloadRes = await fetch(`http://141.164.61.24:5000/download/${result.filename}`);
    const blob = await downloadRes.blob();
    const downloadUrl = window.URL.createObjectURL(blob);

    return {
      success: true,
      downloadUrl,
      filename: result.filename,
    };
  } catch (error) {
    console.error('❌ 변환 중 오류 발생:', error);
    return { success: false };
  }
}