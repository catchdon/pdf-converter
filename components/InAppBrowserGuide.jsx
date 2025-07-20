"use client"
import { useEffect, useState } from "react"

function isInAppBrowser() {
  if (typeof window === "undefined") return false;
  const ua = navigator.userAgent || "";
  // 카카오톡, 페이스북, 인스타그램, 네이버앱 등 감지
  return (
    ua.includes("KAKAOTALK") ||
    ua.includes("FBAN") ||
    ua.includes("FBAV") ||
    ua.includes("Instagram") ||
    ua.includes("NAVER") ||
    ua.includes("Daum") ||
    ua.includes("Line")
  );
}

export function InAppBrowserGuide() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (isInAppBrowser()) setShow(true)
  }, []);

  // 외부 브라우저 열기
  const openExternal = () => {
    const url = window.location.href;
    // iOS: window.open 사용, Android: a 태그 클릭이 더 잘 동작
    window.open(url, "_blank");
  };

  if (!show) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 0, left: 0, right: 0, zIndex: 9999,
        background: "#222", color: "#fff",
        padding: "12px 16px", fontSize: "15px",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
      }}
    >
      <span>
        👉 더 편하게 이용하려면<br />
        <b>외부 브라우저에서 열어주세요!</b>
      </span>
      <button
        style={{
          background: "#fff", color: "#222", border: "none",
          padding: "8px 14px", borderRadius: "6px", fontWeight: 600, marginLeft: "14px",
          cursor: "pointer",
        }}
        onClick={openExternal}
      >
        외부 브라우저로 열기
      </button>
    </div>
  );
}