import { Button } from "../../Button";
import { motion } from "framer-motion";
import styles from "./styles.module.css";
export const About = () => {
  return (
    <section className={styles.about}>
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

      <motion.div
        initial={{ x: 100, opacity: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        whileInView={{ x: 0, opacity: 1 }}
        className={styles.text}
      >
        <h2 className={styles.h2}>
          NOSOTROS GANAMOS CUANDO NUESTROS CLIENTES GANAN
        </h2>
        <p className={styles.p}>
          NippyWit es una Agencia De Marketing que ayuda actualmente a las PYMES
          con su presencia digital, escalabilidad de ventas a través de paginas
          web, redes sociales, e-commerce entre otros métodos.
        </p>
        <Button type="fill">Portafolio</Button>
      </motion.div>
    </section>
  );
};
