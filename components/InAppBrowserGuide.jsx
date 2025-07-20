"use client"
import { useEffect, useState } from "react"

function isInAppBrowser() {
  if (typeof window === "undefined") return false;
  const ua = navigator.userAgent || "";
  // 카카오톡, 페이스북, 인스타그램, 라인 등 감지 (네이버앱 등 필요시 추가)
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
  const [url, setUrl] = useState("");

  useEffect(() => {
    if (isInAppBrowser()) {
      setShow(true);
      setUrl(window.location.href);
    }
  }, []);

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
        👉 변환 파일을 다운받으려면<br />
        <b>외부 브라우저를 이용해야해요!</b>
      </span>
      <a
        href={url}
        target="_blank"
        rel="noopener"
        style={{
          background: "#fff", color: "#222", border: "none",
          padding: "8px 14px", borderRadius: "6px", fontWeight: 600, marginLeft: "14px",
          textDecoration: "none", cursor: "pointer",
        }}
      >
        외부 브라우저로 열기
      </a>
    </div>
  );
}