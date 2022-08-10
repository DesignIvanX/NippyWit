import { motion } from "framer-motion";
import Image from "next/image";
import styles from "./styles.module.css";
export const Loader = () => {
  return (
    <motion.div
      initial={{ x: 0, opacity: 1 }}
      transition={{ delay: 1, duration: 1 }}
      animate={{ x: "-100%" }}
      className={styles.loader}
    >
      <motion.img
        initial={{ x: 0, opacity: 1 }}
        transition={{ repeat: Infinity, duration: 1 }}
        animate={{ rotate: [0, 360] }}
        className={styles.image}
        src="/static/logo.png"
        alt="Nippy Wit Logo"
        width={150}
        height={100}
      />
    </motion.div>
  );
};
