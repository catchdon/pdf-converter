import ClientComponent from "./ClientComponent";

export const metadata = {
  title: "이미지 사이즈 바꾸기 - JPG, PNG, HEIC, WEBP 무료 리사이즈 | 문서킹",
  description: "이미지 크기를 원하는 픽셀로 변환! 비율 유지도 OK, JPG·PNG·WEBP·HEIC 등 다양한 이미지 리사이즈를 완전 무료로. 모바일/PC 모두 쉽고 빠르게!",
  keywords: "이미지 리사이즈, 이미지 크기 변경, JPG 크기 줄이기, PNG 리사이즈, HEIC 변환, 무료 이미지 사이즈 조절, 사진 리사이즈, 이미지 변환, 문서킹",
  openGraph: {
    title: "이미지 사이즈 바꾸기 - JPG, PNG, HEIC, WEBP 무료 리사이즈 | 문서킹",
    description: "이미지 크기를 원하는 픽셀로 바꿔보세요! 고화질 그대로, 무료 리사이즈 서비스. 비율 유지, 모바일 최적화까지.",
    url: "https://www.networkkings.website/image-resize",
    images: [
      { url: "/og-image.png", width: 1200, height: 630, alt: "이미지 사이즈 바꾸기" }
    ],
  }
};

export default function Page() {
  return <ClientComponent />;
}