import { NextRequest, NextResponse } from "next/server";

async function handleRequest(request: NextRequest) {
  try {
    // 記錄收到的數據
    console.log("[XSS Log]", {
      timestamp: new Date().toISOString(),
      href: request.nextUrl.href
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