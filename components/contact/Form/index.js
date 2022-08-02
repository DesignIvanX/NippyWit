import { Button } from "../../Button";
import { motion } from "framer-motion";
import styles from "./styles.module.css";
export const Form = () => {
  return (
    <motion.form
      initial={{ opacity: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      whileInView={{ opacity: 1 }}
      className={styles.form}
    >
      <div className={styles.top}>
        <h2>Say hello</h2>
        <p>Lorem Ipsum is simply dummy text of the printing.</p>
      </div>
      <div className={styles.bottom}>
        <div className={styles.content}>
          <div className={styles.contentInputTop}>
            <label className={styles.label}>Nombre</label>
            <input className={styles.input} type="text" required />
          </div>
          <div className={styles.contentInputTop}>
            <label className={styles.label}>Apellido</label>
            <input className={styles.input} type="text" required />
          </div>
        </div>
        <div className={styles.contentInputBottom}>
          <label className={styles.label}>Email</label>
          <input className={styles.input} type="email" required />
        </div>
        <div className={styles.contentInputBottom}>
          <label className={styles.label}>Mensaje</label>
          <textarea
            className={styles.input}
            name=""
            id=""
            cols="30"
            rows="10"
          />
        </div>
        <Button type="fill">Enviar</Button>
      </div>
    </motion.form>
  );
};
