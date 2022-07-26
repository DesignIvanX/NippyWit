import Image from "next/image";
import { motion } from "framer-motion";
import styles from "./styles.module.css";
export const Information = () => {
  return (
    <section className={styles.information}>
      <div className={styles.box}>
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          whileInView={{ x: 0, opacity: 1 }}
          className={styles.containerImage}
        >
          <Image
            src="/static/Information/website.png"
            alt=""
            width={300}
            height={300}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1 }}
          className={styles.containerText}
        >
          <h3 className={styles.h2}>
            DISEÑO WEB <span className={styles.active}>A TU MEDIDA </span>
          </h3>
          <p className={styles.p}>
            Tu pagina web es la primera impresión de tu negocio, en estos
            momentos el mundo se rige por la internet si no tienes un sitio web
            estas dejando mucho dinero sobre la mesa.
          </p>
        </motion.div>
      </div>
      <div className={styles.box}>
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          whileInView={{ x: 0, opacity: 1 }}
          className={styles.containerImage}
        >
          <Image
            src="/static/Information/social.png"
            alt=""
            width={300}
            height={300}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1 }}
          className={styles.containerText}
        >
          <h3 className={styles.h2}>
            <span className={styles.active}>LAS REDES </span>SOCIALES
          </h3>
          <p className={styles.p}>
            Las redes sociales es la parte de tu negocio mas importante. ¿Quien
            no usa redes sociales? es mas sencillo vender y crear una comunidad
            para tu negocio.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
