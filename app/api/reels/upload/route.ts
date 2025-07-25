import { NextResponse } from "next/server";
import { writeFile } from "fs/promises";
import path from "path";
import { mkdir } from "fs/promises";

export async function POST(req: Request) {
  const formData = await req.formData();
  const file = formData.get("video") as File;
  const caption = formData.get("caption") as string;
  const userId = formData.get("userId") as string;

  if (!file || !caption || !userId) {
    return NextResponse.json({ error: "Missing data" }, { status: 400 });
  }

  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  const uploadDir = path.join(process.cwd(), "public", "uploads");
  await mkdir(uploadDir, { recursive: true });

  const filename = `${Date.now()}-${file.name}`;
  const filePath = path.join(uploadDir, filename);
  await writeFile(filePath, buffer);

  
  console.log("Saved file at:", filePath);
  console.log("User:", userId, "Caption:", caption);

  return NextResponse.json({ message: "Uploaded", file: `/uploads/${filename}` });
}
