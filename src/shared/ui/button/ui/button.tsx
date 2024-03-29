import { FC, ReactNode } from "react";

export const Button: FC<{
    children: ReactNode
}> = (props) => {
  return <div>{props.children}</div>;
};
