import { motion, useScroll } from "framer-motion";
import styles from "./styles.module.css";
export const Line = () => {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div className={styles.line} style={{ scaleX: scrollYProgress }} />
  );
};
