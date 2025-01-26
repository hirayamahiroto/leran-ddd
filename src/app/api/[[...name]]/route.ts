import { NextResponse } from "next/server";
import { POST as createMenuHandler } from "./menu/index";

// APIハンドラーの型定義
type ApiHandler = {
  GET?: (req: Request) => Promise<Response | NextResponse>;
  POST?: (req: Request) => Promise<Response | NextResponse>;
  PUT?: (req: Request) => Promise<Response | NextResponse>;
  DELETE?: (req: Request) => Promise<Response | NextResponse>;
};

// エンドポイントごとのハンドラーマッピング
const handlers: Record<string, ApiHandler> = {
  menu: {
    POST: createMenuHandler,
  },
};

// 共通のルーティングロジック
async function handleRequest(
  req: Request,
  method: keyof ApiHandler,
  slug: string
): Promise<Response | NextResponse> {
  const handler = handlers[slug]?.[method];

  if (!handler) {
    return NextResponse.json(
      { success: false, message: "無効なエンドポイントまたはメソッドです" },
      { status: 404 }
    );
  }

  try {
    return await handler(req);
  } catch (error) {
    console.error(`${slug} ${method} エラー:`, error);
    return NextResponse.json({ success: false, message: "処理に失敗しました" }, { status: 500 });
  }
}

// HTTPメソッドごとのエクスポート
export async function GET(req: Request, { params }: { params: { slug: string } }) {
  return handleRequest(req, "GET", params.slug);
}

export async function POST(req: Request, { params }: { params: { slug: string } }) {
  return handleRequest(req, "POST", params.slug);
}

export async function PUT(req: Request, { params }: { params: { slug: string } }) {
  return handleRequest(req, "PUT", params.slug);
}

export async function DELETE(req: Request, { params }: { params: { slug: string } }) {
  return handleRequest(req, "DELETE", params.slug);
}
