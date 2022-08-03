import Image from "next/image";
import Link from "next/link";
import { Button } from "../Button";
import styles from "./styles.module.css";

export const Navegation = () => {
  const handleOnCLick = () => {
    const hamburger = document.querySelector("#hamburger");
    const nav = document.querySelector("#nav-ul");
    hamburger.classList.toggle("toggleBurger");
    nav.classList.toggle("toggleNav");
  };
  return (
    <nav className={styles.nav}>
      <ul className={styles.ulImage}>
        <Image
          className={styles.image}
          src="/static/logo.png"
          alt="Nippy Wit Logo"
          width={55}
          height={40}
        />
      </ul>
      <ul
        onClick={() => handleOnCLick()}
        className={styles.hamburger}
        id="hamburger"
      >
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </ul>
      <ul className={styles.ul} id="nav-ul">
        <li className={`${styles.li} ${styles.active}`}>
          <Link href="/">
            <a onClick={() => handleOnCLick()}>Inicio</a>
          </Link>
        </li>
        <li className={styles.li}>
          <Link href="/about">
            <a onClick={() => handleOnCLick()}>Nosotros</a>
          </Link>
        </li>
        <li className={styles.li}>
          <Link href="/services">
            <a onClick={() => handleOnCLick()}>Servicios</a>
          </Link>
        </li>
        <Button type="fill" path="/contact" onClick={() => handleOnCLick()}>
          Contacto
        </Button>
      </ul>
    </nav>
  );
};
