import React from "react";

interface auth {
  isLogin: boolean;
}

export default function auth(props: auth) {
  const { isLogin } = props;
  if (isLogin) {
    return <div></div>;
  }
  return (
    <div>
      <a className="btn-navy" href="signin.html">
        Sign In
      </a>
    </div>
  );
}
