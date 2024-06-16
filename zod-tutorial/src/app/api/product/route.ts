import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const product = {
    id: 1,
    name: "Cool Jeans",
    price: 100,
  };

  return NextResponse.json(product);
}
