import { NextRequest, NextResponse } from "next/server";

async function handleRequest(request: NextRequest) {
  try {
    // 記錄收到的數據
    const { nextUrl, cookies } = request;
    console.log("[XSS Log]", {
      timestamp: new Date().toISOString(),
      href: nextUrl.href,
      cookies
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("[XSS Log Error]", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export const GET = handleRequest;
export const POST = handleRequest;

const a = {
  "type": "Text",
  "content": "123",
  "chatId": "75f2b456-5000-721b-9804-195616371e80",
  "identifyValue": "GUEST",
  "from": "web"
}