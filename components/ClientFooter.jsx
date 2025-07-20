"use client"
import dynamic from "next/dynamic"

// Footer를 동적으로 import (클라이언트에서만 렌더링)
const Footer = dynamic(() => import("./footer"))

export default function ClientFooter(props) {
  return <Footer {...props} />
}