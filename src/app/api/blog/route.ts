import { db, posts } from "@/shared/lib/db";
import { count, ilike, sql } from "drizzle-orm";

export async function GET(request: Request) {
  const searchParams = new URL(request.url).searchParams;

  const q = searchParams.get("q") ?? "";
  const pageSize = +(searchParams.get("pageSize") ?? 10);
  const page = +(searchParams.get("page") ?? 1);

  const offset = (page - 1) * pageSize;

  const postList = await db
    .select()
    .from(posts)
    .where(ilike(posts.title, `%${q.toLowerCase()}%`))
    .limit(pageSize)
    .offset(offset);

  const postsCount = (
    await db
      .select({ count: count() })
      .from(posts)
      .where(ilike(posts.title, `%${q.toLowerCase()}%`))
  )[0].count;

  const lastPage = Math.ceil(+postsCount / pageSize);

  const response = {
    content: postList,
    lastPage,
    total: +postsCount,
  };

  return new Response(JSON.stringify(response), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
