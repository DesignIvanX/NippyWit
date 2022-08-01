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
      <h2 className={styles.h2}>ESTAS INTERESADO EN NUESTROS SERVICIOS</h2>
      <form className={styles.form}>
        <input
          className={styles.input}
          type="email"
          placeholder="Ingresa tu correo electronico"
          required
        />

        <Button type="fill">Suscribete</Button>
      </form>
    </motion.section>
  );
};
