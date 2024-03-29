import { GithubUser } from "@/shared/lib/types";
import { FC } from "react";

export interface IHeaderProps {
  user: GithubUser;
}

const Header: FC<IHeaderProps> = ({ user }) => {
  return (
    <header>
      <h3>{user.login}</h3>
    </header>
  );
};

export { Header };
