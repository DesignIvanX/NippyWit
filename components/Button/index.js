import Link from "next/link";
import styles from "./styles.module.css";
export const Button = ({ children, type, path = "/" }) => {
  return (
    <Link href={path}>
      <a
        className={type === "fill" ? styles.buttonFill : styles.buttonUnfilled}
      >
        {children}
      </a>
    </Link>
  );
};
