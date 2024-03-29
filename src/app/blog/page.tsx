"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";

export default function Blog() {
  const [query, setQuery] = useState({
    page: 1,
    pageSize: 2,
    q: "",
  });
  const [posts, setPosts] = useState<any>(null);

  useEffect(() => {
    (async () => {
      const res = await fetch(
        `/api/blog?q=${query.q}&pageSize=${query.pageSize}&page=${query.page}`
      );
      const data = await res.json();

      setPosts(data);
    })();

    return () => setPosts(null)
  }, [query]);

  return (
    <main className="md:px-72 my-2">
      <h1 className="text-2xl">Blog :: zethange</h1>
      <div className="flex gap-1 items-baseline">
        <Input
          placeholder="Search..."
          className="mt-2"
          onChange={(e) => {
            setQuery((before) => ({ ...before, q: e.target.value, page: 1 }))
          }}
          value={query.q}
        />
        <Button
          disabled={query.page == 1}
          onClick={() => {
            setQuery((before) => ({ ...before, page: before.page - 1 }));
          }}
        >
          туда
        </Button>
        <span>
          {query.page}/{posts?.lastPage ?? "..."}
        </span>
        <Button
          disabled={query.page == posts?.lastPage}
          onClick={() => {
            setQuery((before) => ({ ...before, page: before.page + 1 }));
          }}
        >
          сюда
        </Button>
      </div>
      <section className="grid gap-2 mt-3">
        {!posts && <p>Loading...</p>}
        {posts?.content.map((post: any) => (
          <div key={post.id} className="border-[1.5px] p-2 rounded-md">
            <h3 className="text-lg">{post.title}</h3>
            <p>{post.description}</p>
          </div>
        ))}
      </section>
    </main>
  );
}
