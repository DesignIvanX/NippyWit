import { Button } from "../../Button";
import { motion } from "framer-motion";
import styles from "./styles.module.css";
import useChangeForm from "../../../hooks/useChangeForm";
export const Form = () => {
  const { handleOnChange, value } = useChangeForm();
  const changeForm = (e) => {
    handleOnChange(e);
    console.log(value);
  };
  const handleOnClick = () => {};
  return (
    <motion.form
      initial={{ opacity: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      whileInView={{ opacity: 1 }}
      className={styles.form}
    >
      <div className={styles.top}>
        <h2>Hola</h2>
        <p>En que te podemos ayudar, comentanos que necesitas.</p>
      </div>
      <div className={styles.bottom}>
        <div className={styles.content}>
          <div className={styles.contentInputTop}>
            <label className={styles.label}>Nombre</label>
            <input
              onChange={changeForm}
              className={styles.input}
              type="text"
              name="name"
              value={value.name}
              required
            />
          </div>
          <div className={styles.contentInputTop}>
            <label className={styles.label}>Apellido</label>
            <input
              onChange={changeForm}
              className={styles.input}
              type="text"
              name="lastName"
              value={value.lastName}
              required
            />
          </div>
        </div>
        <div className={styles.contentInputBottom}>
          <label className={styles.label}>Email</label>
          <input
            onChange={changeForm}
            className={styles.input}
            type="email"
            name="email"
            value={value.email}
            required
          />
        </div>
        <div className={styles.contentInputBottom}>
          <label className={styles.label}>Mensaje</label>
          <textarea
            onChange={changeForm}
            className={styles.input}
            name="message"
            value={value.message}
            id=""
            cols="30"
            rows="10"
          />
        </div>
        <Button type="fill" onClick={() => handleOnClick()}>
          Enviar
        </Button>
      </div>
    </motion.form>
  );
};
