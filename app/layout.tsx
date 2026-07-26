import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ひとつやねっと｜調布・狛江の地域の居場所",
  description: "調布・狛江の周辺エリアで「地域の居場所」づくりに取り組む市民ネットワーク、ひとつやねっとの公式サイトです。",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "ひとつやねっと｜調布・狛江の地域の居場所",
    description: "家でも学校や職場でもない、誰もがホッと羽を休められる地域の居場所。",
    locale: "ja_JP",
    type: "website",
    images: [{ url: "/og-v2.png", width: 1200, height: 630, alt: "ひとつやねっと - 調布・狛江の、まちの居場所。" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "ひとつやねっと｜調布・狛江の地域の居場所",
    description: "家でも学校や職場でもない、誰もがホッと羽を休められる地域の居場所。",
    images: ["/og-v2.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
