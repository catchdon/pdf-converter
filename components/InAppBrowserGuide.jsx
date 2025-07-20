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
        padding: "14px 16px", fontSize: "15px", lineHeight: 1.7,
        display: "flex", alignItems: "center", justifyContent: "center",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        flexDirection: "column",
        textAlign: "center",
        wordBreak: "keep-all",
      }}
    >
      <b style={{ fontSize: "16px", marginBottom: "8px", letterSpacing: "-0.5px" }}>
        ⚠️ 안내<br />
        변환 파일 다운로드는 <br />메시지앱 안에서는 할 수 없어요.
      </b>
      <div style={{ textAlign: "center", marginTop: "4px" }}>
        카카오톡, 인스타, 페이스북 등에서는<br />
        <b>
          <span style={{ color: "#ffe066" }}>공유하기</span>
          {" 또는 "}
          <span style={{ color: "#ffe066" }}>메뉴(...)</span>
        </b>
        <span> 버튼을 눌러</span>
        <br />
        <b style={{ color: "#ffe066" }}>
          “다른 브라우저로 열기”
        </b>
        <span> (네이버, 사파리, 구글 등)</span>
        <br />
        를 선택해주세요.
      </div>
      {/* <img src="/inapp-browser-guide.gif" alt="외부 브라우저 안내" style={{marginTop: 8, maxHeight: 40}} /> */}
    </div>
  );
}