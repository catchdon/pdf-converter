"use client"
import { useEffect, useState } from "react"

function isInAppBrowser() {
  if (typeof window === "undefined") return false;
  const ua = navigator.userAgent || "";
  return (
    ua.includes("KAKAOTALK") ||
    ua.includes("FBAN") ||
    ua.includes("FBAV") ||
    ua.includes("Instagram") ||
    ua.includes("Line")
  );
}

export function InAppBrowserGuide() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (isInAppBrowser()) setShow(true);
  }, []);

  if (!show) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 0, left: 0, right: 0, zIndex: 9999,
        background: "#222", color: "#fff",
        padding: "14px 16px", fontSize: "15px", lineHeight: 1.6,
        display: "flex", alignItems: "center", justifyContent: "center",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        flexDirection: "column",
        textAlign: "center",        // ✅ 중앙 정렬
      }}
    >
      <b style={{ fontSize: "16px", marginBottom: "4px" }}>
        ⚠️ 안내: 변환 파일 다운로드는 메시지앱 내에서 불가능해요
      </b>
      <div style={{ textAlign: "center" }}>
        카카오톡, 인스타, 페이스북 등 앱 내에서<br />
        <b>
          <span style={{color: "#ffe066"}}>공유하기 아이콘</span>을 눌러
        </b>
        <br />
        <b style={{color: "#ffe066"}}>
          “다른 브라우저로 열기(네이버·사파리·구글)”
        </b>
        를 선택해주세요!
      </div>
      {/* 아래에 안내용 이미지, GIF, 아이콘 등 추가 가능 */}
      {/* <img src="/inapp-browser-guide.gif" alt="외부 브라우저 안내" style={{marginTop: 8, maxHeight: 40}} /> */}
    </div>
  );
}