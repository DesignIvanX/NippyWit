import { Button } from "../Button";
import Typed from "react-typed";
import { motion } from "framer-motion";
import styles from "./styles.module.css";
export const Newsletter = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      whileInView={{ opacity: 1 }}
      className={styles.newsletter}
    >
      <h2 className={styles.h2}>
        Lorem Ipsum is simply dummy text of the printing.
      </h2>
      <form className={styles.form}>
        <Typed
          strings={["Ingresa tu correo electronico"]}
          typeSpeed={50}
          backSpeed={50}
          loop
        >
          <input className={styles.input} type="email" required />
        </Typed>
        <Button type="fill">Subscribe</Button>
      </form>
    </motion.section>
  );
};
