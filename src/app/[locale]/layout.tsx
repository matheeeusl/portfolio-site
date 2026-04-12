import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/app/globals.css";
import type { Locale } from "@/types";
import { locales } from "@/i18n/config";
import { LocaleProvider } from "@/i18n/LocaleProvider";
import { getDictionary } from "@/i18n/getDictionary";
import { Analytics } from "@/components/Analytics";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://matheeeusl.com";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#020617" },
  ],
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = (await params) as { locale: Locale };
  const dict = getDictionary(locale);
  const url = `${siteUrl}/${locale}`;
  const alternateLocale = locale === "en" ? "pt-BR" : "en";
  const ogLocale = locale === "en" ? "en_US" : "pt_BR";
  const alternateOgLocale = alternateLocale === "en" ? "en_US" : "pt_BR";

  return {
    title: dict.seo.title,
    description: dict.seo.description,
    metadataBase: new URL(siteUrl),
    alternates: {
      canonical: url,
      languages: {
        en: `${siteUrl}/en`,
        "pt-BR": `${siteUrl}/pt-BR`,
        "x-default": `${siteUrl}/pt-BR`,
      },
    },
    openGraph: {
      type: "website",
      url,
      title: dict.seo.title,
      description: dict.seo.description,
      locale: ogLocale,
      alternateLocale: [alternateOgLocale],
      siteName: "Matheus Laureano",
    },
    twitter: {
      card: "summary_large_image",
      title: dict.seo.title,
      description: dict.seo.description,
    },
    icons: {
      icon: "/logo.svg",
    },
  };
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = (await params) as { locale: Locale };
  const dict = getDictionary(locale);

  return (
    <html lang={locale}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen antialiased bg-white text-gray-900 dark:bg-slate-950 dark:text-slate-100`}
      >
        <a
          href="#content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-blue-500 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white focus:outline-none"
        >
          {dict.a11y.skipToContent}
        </a>
        <LocaleProvider locale={locale}>
          <Analytics />
          {children}
        </LocaleProvider>
      </body>
    </html>
  );
}
