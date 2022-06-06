import React from "react";
import cx from "classnames";
import Link from "next/link";
interface MenuItem {
  title: String;
  active?: boolean;
  href: string;
}

export default function menu(props: MenuItem) {
  const { title, active, href = "/" } = props;
  const classTitle = cx({
    "nav-link": true,
    active,
  });
  return (
    <div>
      <Link href={href}>
        <a className={classTitle} aria-current="page">
          {title}
        </a>
      </Link>
    </div>
  );
}
