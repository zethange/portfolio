import { GithubUser } from "@/shared/lib/types";
import { CiMail } from "react-icons/ci";
import Link from "next/link";
import { FaGithub, FaTelegram, FaVk } from "react-icons/fa";

const getGithubData = async () => {
  const res = await fetch(`https://api.github.com/users/zethange`);
  return (await res.json()) as GithubUser;
};

export default async function Home() {
  const data = await getGithubData();

  return (
    <main className="h-[100vh] w-[100vw] flex justify-center items-center">
      <div className="md:px-60">
        <section className="grid gap-1">
          <h1 className="text-2xl">👋 hey! i'm {data.login}</h1>
          <p className="text-gray-600 font-mono">{data.bio}</p>
          <Link href="/blog">blog {`->`}</Link>
          <div className="flex gap-2">
            <a
              href={"mailto:zethange@yandex.ru"}
              className="p-2 border rounded-md hover:bg-slate-50 transition-all cursor-pointer text-slate-500"
            >
              <CiMail />
            </a>
            <a
              href={data.html_url}
              className="p-2 border rounded-md hover:bg-slate-50 transition-all cursor-pointer text-slate-500"
            >
              <FaGithub />
            </a>
            <a
              href={`https://${data.login}.t.me`}
              className="p-2 border rounded-md hover:bg-slate-50 transition-all cursor-pointer text-slate-500"
            >
              <FaTelegram />
            </a>
            <a href={'https://vk.com/pomidorooo'} className="p-2 border rounded-md hover:bg-slate-50 transition-all cursor-pointer text-slate-500">
              <FaVk />
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
