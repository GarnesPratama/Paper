import React from "react";
import Link from "next/link";

interface auth {
  isLogin?: boolean;
}

export default function auth(props: auth) {
  const { isLogin } = props;
  if (isLogin) {
    return <div></div>;
  }
  return (
    <div>
      <Link href="/signIn">
        <a className="btn-navy" href="signin.html">
          Sign In
        </a>
      </Link>
    </div>
  );
}
