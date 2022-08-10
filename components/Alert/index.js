import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "../Button";
import styles from "./styles.module.css";
export const Alert = () => {
  const handleOnClick = () => {
    const alert = document.querySelector("#alert");
    alert.classList.remove("displayBlock");
  };
  return (
    <section className={styles.alert} id="alert">
      <motion.div
        transition={{ repeat: Infinity, duration: 4 }}
        animate={{ rotate: [-40, 40, 0, 40, -40] }}
      >
        <Image
          src="/static/alert/hand.svg"
          alt="mano 3d"
          width={200}
          height={190}
        />
      </motion.div>

      <p className={styles.p}>Subscrito correctamente!</p>
      <Button path="/services/" onClick={handleOnClick}>
        OK!
      </Button>
    </section>
  );
};
