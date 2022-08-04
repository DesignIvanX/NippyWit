import Image from "next/image";
import { motion } from "framer-motion";
import styles from "./styles.module.css";
export const Plants = () => {
  return (
    <section className={styles.plants}>
      <motion.a
        initial={{ x: 100, opacity: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        whileInView={{ x: 0, opacity: 1 }}
        href="https://api.whatsapp.com/send/?phone=%2B595961154054&text&type=phone_number&app_absent=0"
        className={styles.box}
      >
        <Image
          className={styles.image}
          src="/static/plants/web.svg"
          alt=""
          width={250}
          height={200}
        />
        <h3 className={styles.h3}>Desarrollo Web</h3>
        <p className={styles.p}>
          Portales funcionales pensados en la experiencia del cliente.
        </p>
      </motion.a>
      <motion.a
        initial={{ x: -100, opacity: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        whileInView={{ x: 0, opacity: 1 }}
        href="https://api.whatsapp.com/send/?phone=%2B595961154054&text&type=phone_number&app_absent=0"
        className={styles.box}
      >
        <Image
          className={styles.image}
          src="/static/plants/social.svg"
          alt=""
          width={250}
          height={200}
        />
        <h3 className={styles.h3}>Redes Sociales</h3>
        <p className={styles.p}>
          Le damos visibilidad a tu marca mediante las redes sociales.
        </p>
      </motion.a>
      <motion.a
        initial={{ x: 100, opacity: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        whileInView={{ x: 0, opacity: 1 }}
        href="https://api.whatsapp.com/send/?phone=%2B595961154054&text&type=phone_number&app_absent=0"
        className={styles.box}
      >
        <Image
          className={styles.image}
          src="/static/plants/e-commerce.svg"
          alt=""
          width={250}
          height={200}
        />
        <h3 className={styles.h3}>E-commerce</h3>
        <p className={styles.p}>
          La mejor opccion es tener una tienda abierta 24/7
        </p>
      </motion.a>
      <motion.a
        initial={{ x: -100, opacity: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        whileInView={{ x: 0, opacity: 1 }}
        href="https://api.whatsapp.com/send/?phone=%2B595961154054&text&type=phone_number&app_absent=0"
        className={styles.box}
      >
        <Image
          className={styles.image}
          src="/static/plants/branding.svg"
          alt=""
          width={250}
          height={200}
        />
        <h3 className={styles.h3}>Branding</h3>
        <p className={styles.p}>
          Le damos poder grafico a las marcas de nuestros aliados.
        </p>
      </motion.a>
    </section>
  );
};
