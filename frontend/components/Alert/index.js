import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "../Button";
import styles from "./styles.module.css";
export const Alert = () => {
  return (
    <section className={styles.alert} id="alert">
      <motion.div>
        <Image src="/static/alert/hand.svg" alt="" width={200} height={190} />
      </motion.div>

      <p className={styles.p}>Subscrito correctamente!</p>
      <Button>OK!</Button>
    </section>
  );
};
