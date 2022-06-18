import React, { useEffect, useState } from "react";
import Link from "next/link";
import jwt_decode from "jwt-decode";
import cookie from "js-cookie";
export default function auth() {
  const [isLogin, setisLogin] = useState(false);
  const [user, setuser] = useState({
    name: "",
  });
  useEffect(() => {
    const token = cookie.get("token");
    if (token) {
      const jwtToken = atob(token);
      const payload = jwt_decode(jwtToken);
      const user = payload;
      setisLogin(true);
      setuser(user);
    }
  }, []);
  if (isLogin) {
    return (
      <div>
        <Link href="/overview">
          <a href="" className=" color-palette-2">
            Halo, {user.name}
          </a>
        </Link>
      </div>
    );
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
