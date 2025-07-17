import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Shield, Zap, Users } from "lucide-react"

// app/about/page.jsx 상단에 추가
export const metadata = {
  title: "문서킹 소개 - 국내 1등 무료 문서 변환 사이트",
  description: "문서킹은 누구나 쉽게 사용할 수 있는 100% 무료 문서 변환 사이트입니다. 초고속 변환, 강력한 보안, 최고의 품질을 국내 서버에서 제공합니다. 회원가입·설치 없이, 클릭 한 번으로 파일 변환 끝!",
  keywords: "문서킹, 무료 문서 변환, PDF 변환, 이미지 변환, 오피스 변환, 국내 문서 변환 사이트, 파일 변환, 빠른 변환, 안전한 파일 삭제",
  openGraph: {
    title: "문서킹 소개 - 국내 1등 무료 문서 변환 사이트",
    description: "설치도 회원가입도 필요 없는 무료 변환! PDF, 오피스, 이미지까지 국내 최적화 서버에서 초고속 처리, 최고의 보안까지.",
    url: "https://www.networkkings.website/about",
    images: [
      { url: "/og-image.png", width: 1200, height: 630, alt: "문서킹 서비스 소개" }
    ],
  }
};

export default function AboutPage() {
  const features = [
    {
      icon: <Zap className="w-8 h-8 text-blue-600" />,
      title: "초고속 변환",
      description: "최적화된 변환 엔진으로 파일을 몇 초 만에 빠르게 처리합니다.",
    },
    {
      icon: <Shield className="w-8 h-8 text-green-600" />,
      title: "완벽한 보안",
      description: "모든 파일은 안전하게 처리되며, 변환 완료 후 즉시 자동 삭제됩니다.",
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-purple-600" />,
      title: "최고의 품질",
      description: "문서의 원본 품질과 레이아웃을 그대로 유지합니다.",
    },
    {
      icon: <Users className="w-8 h-8 text-orange-600" />,
      title: "누구나 쉽게",
      description: "별다른 기술 지식 없이도 누구나 손쉽게 사용할 수 있는 직관적인 인터페이스를 제공합니다.",
    },
  ]

  const stats = [
    { number: "1,000만+", label: "누적 변환 파일" },
    { number: "50만+", label: "만족한 이용자" },
    { number: "25+", label: "지원 파일 포맷" },
    { number: "99.9%", label: "서비스 가동률" },
  ]

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">문서킹 소개</h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                설치도, 회원가입도 필요 없습니다. 클릭 몇 번이면 끝.<br />
                국내 대표 무료 문서 변환 사이트 문서킹.<br /><br />

                <strong>모든 기능 100% 무료.</strong><br />
                써보시면 왜 다들 극찬하는지 바로 아실 겁니다.<br />
                지금 바로 이용해보세요.
              </p>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">문서킹! 선택해야 하는 이유</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            문서킹은 안정성, 사용 편의성, 보안, 품질 모든 면에서 최고의 웹 기반 파일 변환 플랫폼을 추구합니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="text-center">
              <CardContent className="p-6">
                <div className="flex justify-center mb-4">{feature.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Story Section */}
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">문서킹 이야기</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  문서킹은 단순한 문서 변환 사이트가 아닙니다.<br />
                  <strong>‘왜 이렇게까지 복잡해야 하지?’</strong><br />
                  우리는 기존의 느리고, 복잡하고, 믿을 수 없던 변환 서비스들에 불만을 품고 시작했습니다.
                </p>
                <p>
                  개발자와 디자이너, 실사용자들이 함께 고민했습니다.<br />
                  <strong>진짜 필요한 게 뭘까?</strong><br />
                  어떻게 하면 누구나 빠르고 쉽게 쓸 수 있을까?
                </p>
                <p>
                  그래서 결심했습니다.<br />
                  불필요한 기능은 다 버리자.<br />
                  정말 중요한 것들만 남기자.<br />
                  그 결과, 누구나 직관적으로 사용할 수 있는 간결한 인터페이스가 탄생했습니다.<br />
                  <strong>100% 한국어 안내, 모바일 환경까지 완벽하게 최적화.</strong><br />
                  그 어떤 기기에서도, 그 어떤 연령대도, 누구나 단 몇 초면 변환할 수 있습니다.
                </p>
                <p>
                  그리고 문서킹은 해외 서비스들과 다릅니다.<br />
                  국내 사용자만을 위한, 국내 전용 문서 변환 서비스입니다.<br />
                  해외에 서버가 있는 서비스들과 비교해선 안 됩니다.<br />
                  <strong>문서킹은 국내에 위치한 서버를 사용하기 때문에, 그 어떤 사이트보다 빠른 속도를 자랑합니다.</strong>
                </p>
                <p>
                  복잡한 세상에서, 단순함은 곧 경쟁력입니다.<br />
                  문서 변환? 이제 문서킹 하나면 충분합니다.
                </p>
              </div>
            </div>
              <div
                className="bg-gradient-to-br from-blue-100 to-indigo-200 rounded-2xl p-8 text-center">
                <div className="text-6xl mb-4">🚀</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">문서킹 지원 확장자</h3>
                <p className="text-gray-700 mb-3">
                  누구나, 어떤 환경에서도 쉽게 파일 변환을 할 수 있도록.<br />
                  전문지식이 없어도, 기기 성능과 상관없이 최고의 품질을 제공합니다.
                </p>
                <div className="text-base font-medium text-gray-900 mt-4">
                  <strong>지원 파일:</strong><br />
                  PDF, DOCX, XLSX, CSV, PPTX, JPG, JPEG, PNG, WEBP, HEIC
                </div>
              </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">문서킹의 약속</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">개인정보/보안 최우선</h3>
                <p className="text-gray-600">
                  여러분의 파일은 여러분의 소중한 자산입니다.<br />
                  모든 파일은 안전하게 처리되며, 변환이 끝나면 즉시 서버에서 완전히 삭제됩니다.<br />
                  서버 저장·추적·분석 일체 없습니다.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">완전 무료, 누구나 이용</h3>
                <p className="text-gray-600">
                  문서킹의 핵심 서비스는 앞으로도 무료로 제공됩니다.<br />
                  누구나 부담없이 이용해보실 것을 권해드립니다.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">지속적 개선과 혁신</h3>
                <p className="text-gray-600">
                  더 많은 포맷 지원, 더 빠른 속도, 더 편리한 기능을 위해 꾸준히 발전합니다.<br />
                  이용자 의견도 언제나 환영합니다!
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}