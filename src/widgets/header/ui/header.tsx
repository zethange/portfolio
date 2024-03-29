import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { GithubUser } from "@/shared/lib/types";
import { FC } from "react";

export interface IHeaderProps {
  user: GithubUser;
}

const Header: FC<IHeaderProps> = ({ user }) => {
  return (
    <header>
      <h3>{user.login}</h3>
			<Input placeholder="Search..." />
			<Button>aaa</Button>
    </header>
  );
};

export { Header };
