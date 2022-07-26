import Image from "next/image";
import { motion } from "framer-motion";
import styles from "./styles.module.css";
export const Clients = () => {
  return (
    <section className={styles.clients}>
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        whileInView={{ x: 0, opacity: 1 }}
        className={styles.title}
      >
        <h2 className={styles.h2}>NUESTROS CLIENTES</h2>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1 }}
        className={styles.clientsContent}
      >
        <Image
          className={styles.images}
          src="/static/clients/beneoshop.png"
          alt=""
          width={170}
          height={150}
        />
        <Image
          className={styles.images}
          src="/static/clients/caspio.png"
          alt=""
          width={170}
          height={150}
        />
        <Image
          src="/static/clients/HyperGrid.png"
          alt=""
          width={170}
          height={150}
        />
        <Image
          className={styles.images}
          src="/static/clients/leotrippi.png"
          alt=""
          width={170}
          height={150}
        />
      </motion.div>
    </section>
  );
};
