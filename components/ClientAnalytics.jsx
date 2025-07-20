"use client"
import dynamic from "next/dynamic"

// Analytics를 동적으로 import (클라이언트에서만 렌더링)
const Analytics = dynamic(() => import("@vercel/analytics/react"))

export default function ClientAnalytics() {
  return <Analytics />
}