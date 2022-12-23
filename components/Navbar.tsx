import React from "react";
import Link from "next/link";
import styles from "../styles/navbar.module.scss";

interface Props {
  path: string;
}

function Navbar({ path }: Props) {
  return (
    <nav className={styles.nav}>
      <h1 className={styles.title}>Image Filter Project</h1>
      <ul>
        <li className={styles.li}>
          <Link href={path === "/login" ? "/" : "/login"}>
            {path === "/login" ? "Home" : "Login"}
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
