import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const runtime = "nodejs";

const cvFileName = "Muhammad-Valiant-Althaf-CV.pdf";
const cvPath = join(
  process.cwd(),
  "public",
  "document",
  "CV_Muhamad_Valiant_Present.pdf",
);

export async function GET() {
  try {
    const file = await readFile(cvPath);

    return new Response(file, {
      headers: {
        "Content-Disposition": `attachment; filename="${cvFileName}"`,
        "Content-Type": "application/pdf",
        "Content-Length": file.byteLength.toString(),
        "Cache-Control": "public, max-age=86400",
      },
    });
  } catch {
    return new Response("CV file not found", { status: 404 });
  }
}
