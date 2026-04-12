import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function POST(request: NextRequest) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  if (
    typeof body !== "object" ||
    body === null ||
    typeof (body as Record<string, unknown>).path !== "string" ||
    typeof (body as Record<string, unknown>).locale !== "string"
  ) {
    return NextResponse.json(
      { error: "path and locale are required strings" },
      { status: 400 },
    );
  }

  const { path, locale } = body as { path: string; locale: string };
  const userAgent = request.headers.get("user-agent") ?? undefined;

  await db.pageView.create({
    data: { path, locale, userAgent },
  });

  return NextResponse.json({ success: true }, { status: 201 });
}
