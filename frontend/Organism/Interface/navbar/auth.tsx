import React, { useEffect, useState } from "react";
import Link from "next/link";
import jwt_decode from "jwt-decode";
import cookie from "js-cookie";
import { useRouter } from "next/router";

interface navbar {
  id: string;
  email: string;
}

export default function auth(props: navbar) {
  const [isLogin, setisLogin] = useState(false);
  const [user, setuser] = useState({
    name: "",
    email: "",
  });
  const router = useRouter();
  useEffect(() => {
    const token = cookie.get("token");
    if (token) {
      const jwtToken = atob(token);
      const payload = jwt_decode(jwtToken);
      const users = payload;
      setisLogin(true);
      setuser(users);
    }
  }, []);
  const onLogout = () => {
    cookie.remove("token");
    router.push("/");
    setisLogin(false);
  };
  if (isLogin) {
    return (
      <div>
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto text-lg gap-lg-0 gap-2">
              <li className="nav-item my-auto dropdown d-flex">
                <div>
                  <a
                    className="dropdown-toggle ms-lg-40"
                    href="#"
                    role="button"
                    id="dropdownMenuLink"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    halo, {user.name}
                  </a>

                  <ul
                    className="dropdown-menu border-0"
                    aria-labelledby="dropdownMenuLink"
                  >
                    <li>
                      <Link href={`/dashboard/${user.email}`}>
                        <a
                          className="dropdown-item text-lg color-palette-2"
                          href="overview"
                        >
                          Dashboard
                        </a>
                      </Link>
                    </li>

                    <li>
                      <a
                        className="dropdown-item text-lg color-palette-2"
                        href="#"
                        onClick={onLogout}
                      >
                        Log Out
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>
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
