import { CiMail } from "react-icons/ci";
import Link from "next/link";
import { FaGithub, FaTelegram, FaVk } from "react-icons/fa";
import { bio, db } from "@/shared/lib/db";
import { Metadata } from "next";


export const generateMetadata = async (): Promise<Metadata> => {
  const data = (await db.select().from(bio))[0];

  return {
    title: data.username + ' :: bio'
  }
}


export default async function Home() {
  const data = (await db.select().from(bio))[0];

  return (
    <main className="h-[100dvh] w-[100dvw] flex justify-center items-center">
      <div className="md:px-60 max-md:px-2">
        <section className="grid gap-1">
          <h1 className="text-2xl">👋 hey! i'm {data.username}</h1>
          <p className="text-gray-600 font-mono">{data.bio}</p>
          <Link href="/blog">blog {`->`}</Link>
          <div className="flex gap-2">
            <a
              href={data.contacts?.email}
              className="p-2 border rounded-md hover:bg-slate-50 transition-all cursor-pointer text-slate-500"
            >
              <CiMail />
            </a>
            <a
              href={data.contacts?.github}
              className="p-2 border rounded-md hover:bg-slate-50 transition-all cursor-pointer text-slate-500"
            >
              <FaGithub />
            </a>
            <a
              href={data.contacts?.telegram}
              className="p-2 border rounded-md hover:bg-slate-50 transition-all cursor-pointer text-slate-500"
            >
              <FaTelegram />
            </a>
            <a href={data.contacts?.vk} className="p-2 border rounded-md hover:bg-slate-50 transition-all cursor-pointer text-slate-500">
              <FaVk />
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
