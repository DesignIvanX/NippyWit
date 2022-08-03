import styles from "./styles.module.css";
export const Button = ({ children, type, path = "/" }) => {
  return (
    <a
      href={path}
      className={
        type === "fill"
          ? styles.buttonFill
          : type === "small"
          ? styles.small
          : styles.buttonUnfilled
      }
    >
      {children}
    </a>
  );
};
