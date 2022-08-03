import Link from "next/link";
import styles from "./styles.module.css";
export const Button = ({ children, type, path = "/", onClick }) => {
  return (
    <Link href={path}>
      <a
        className={
          type === "fill"
            ? styles.buttonFill
            : type === "small"
            ? styles.small
            : styles.buttonUnfilled
        }
        onClick={onClick ? () => onClick() : null}
      >
        {children}
      </a>
    </Link>
  );
};
