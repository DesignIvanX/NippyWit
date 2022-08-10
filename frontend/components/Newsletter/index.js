import { Button } from "../Button";
import { motion } from "framer-motion";
import styles from "./styles.module.css";
import axios from "axios";
import useChangeForm from "../../hooks/useChangeForm";
export const Newsletter = () => {
  const { handleOnChange, value } = useChangeForm();
  const changeForm = (e) => {
    handleOnChange(e);
  };

  const handleSubmit = async (e) => {
    console.log(value.email[0]);
    const newUser = { email: value.email[0] };
    await axios
      .post(
        "https://nippywitbackend-production.up.railway.app/api/newsletter/",
        newUser
      )
      .then((data) => {
        const alert = document.querySelector("#alert");
        alert.classList.add("displayBlock");
        console.log("Enviado: " + data);
      })
      .catch((e) => {
        console.error(new Error("Error: " + e));
      });
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      whileInView={{ opacity: 1 }}
      className={styles.newsletter}
    >
      <div>
        <h2 className={styles.h2}>
          Estas <span className={styles.active}>Interesado en Nuestros </span>
          Servicios
        </h2>
        <form className={styles.form}>
          <input
            className={styles.input}
            type="email"
            name="email"
            placeholder="Ingresa tu correo electronico"
            required
            onChange={changeForm}
          />
          <div className={styles.btn}>
            <Button
              onClick={() => handleSubmit()}
              path="/services/"
              type="small"
            >
              Suscribete
            </Button>
          </div>
        </form>
      </div>
    </motion.section>
  );
};
