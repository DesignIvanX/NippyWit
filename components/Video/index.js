import { motion } from "framer-motion";
import styles from "./styles.module.css";
export const Video = () => {
  return (
    <motion.div
      initial={{ x: -100, opacity: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      whileInView={{ x: 0, opacity: 1 }}
      className={styles.videoContainer}
    >
      <iframe
        className={styles.video}
        src="https://www.youtube.com/embed/CNgHTXSlVLM"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </motion.div>
  );
};
