import { NextRequest } from "next/server";
import { revalidatePath } from "next/cache";

export async function POST(req: NextRequest) {
  const secret = req.nextUrl.searchParams.get("secret");
  const slug = req.nextUrl.searchParams.get("slug");

  if (secret !== process.env.REVALIDATE_SECRET) {
    return new Response("Unauthorized", { status: 401 });
  }

  if (!slug) {
    return new Response("Missing slug", { status: 400 });
  }

  try {
    // Revalidate the specific post
    await revalidatePath(`/posts/${slug}`);

    // Revalidate pages
    await revalidatePath(`/pages/autoridades`);
    await revalidatePath(`/pages/contenidos`);
    await revalidatePath(`/pages/socios`);

    // Revalidate home
    await revalidatePath(`/`);

    return Response.json({ revalidated: true });
  } catch (err) {
    console.error(err);
    return new Response("Error revalidating", { status: 500 });
  }
}
