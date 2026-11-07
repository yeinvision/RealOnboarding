import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "RealWork 셀프 온보딩 플랫폼",
  description: "신입이 스스로 배우고 성장하는 온보딩 플랫폼",
  keywords: ["온보딩", "RealWork", "신입", "교육"],
  authors: [{ name: "RealWork" }],
  creator: "RealWork",
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "https://onboarding.realwork.group",
    title: "RealWork 셀프 온보딩 플랫폼",
    description: "신입이 스스로 배우고 성장하는 온보딩 플랫폼",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Pretendard:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
