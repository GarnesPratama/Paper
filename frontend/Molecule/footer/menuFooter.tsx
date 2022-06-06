import React from "react";
import Link from "next/link";
interface menuFooter {
  title: string;
  href: string;
}
export default function menuFooter(props: menuFooter) {
  const { title, href = "/" } = props;
  return (
    <div>
      <p className="item-title m-0">
        <Link href={href}>
          <a href="" className="text-lg text-decoration-none">
            {title}
          </a>
        </Link>
      </p>
    </div>
  );
}
