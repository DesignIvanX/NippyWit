import { Button } from "../Button";
import styles from "./styles.module.css";

export const Newsletter = () => {
  return (
    <section className={styles.newsletter}>
      <h2 className={styles.h2}>
        Lorem Ipsum is simply dummy text of the printing.
      </h2>
      <form className={styles.form}>
        <input
          className={styles.input}
          type="email"
          placeholder="Enter your email"
          required
        />
        <Button type="fill">Subscribe</Button>
      </form>
    </section>
  );
};
