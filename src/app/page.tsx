import { GithubUser } from "@/shared/lib/types";
import { Header } from "@/widgets/header";

const getGithubData = async () => {
  const res = await fetch(`https://api.github.com/users/zethange`);
  return (await res.json()) as GithubUser;
};

export default async function Home() {
  const data = await getGithubData();
  return (
    <main className="container mx-auto">
      <Header user={data} />
      <div className="flex gap-4 items-center">
        <img
          src={data.avatar_url}
          alt={data.login}
          className="rounded-full h-48"
        />
        <div className="grid gap-1">
          <h1 className="text-3xl">{data.login}</h1>
          <p>{data.bio}</p>
        </div>
      </div>
    </main>
  );
}
