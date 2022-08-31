import React, { ReactNode } from "react";
import Link from "next/link";
import { StyledA } from "./UILink.style";

type Props = {
  href: string;
  children: ReactNode;
};

function UILink({ href, children }: Props) {
  return (
    <Link href={href} passHref>
      <StyledA>{children}</StyledA>
    </Link>
  );
}

export default UILink;
