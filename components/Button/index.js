import styles from "./styles.module.css";
export const Button = ({ children, type }) => {
  return (
    <button
      className={type === "fill" ? styles.buttonFill : styles.buttonUnfilled}
    >
      {children}
    </button>
  );
};
