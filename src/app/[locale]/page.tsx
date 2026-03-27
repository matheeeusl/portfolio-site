import type { Locale } from "@/types";
import { getDictionary } from "@/i18n/getDictionary";
import { personalInfo } from "@/data/resume";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold">
        {dict.hero.greeting} {personalInfo.name}
      </h1>
      <p className="mt-4 text-xl text-gray-600">{personalInfo.title[locale]}</p>
    </main>
  );
}
