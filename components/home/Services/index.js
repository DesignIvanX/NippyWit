import Image from "next/image";
import { motion } from "framer-motion";
import styles from "./styles.module.css";
export const Services = () => {
  return (
    <section className={styles.services}>
      <motion.div
        initial={{ opacity: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1 }}
        className={styles.box}
      >
        <div className={styles.containerImg}>
          <Image
            className={styles.image}
            src="/static/services/seo.png"
            alt=""
            width={55}
            height={55}
          />
        </div>
        <div className={styles.text}>
          <h3 className={styles.h3}>SEO</h3>
          <p className={styles.p}>Lorem ipsum dolor.</p>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1 }}
        className={styles.box}
      >
        <div className={styles.containerImg}>
          <Image
            className={styles.image}
            src="/static/services/social.png"
            alt=""
            width={55}
            height={55}
          />
        </div>
        <div className={styles.text}>
          <h3 className={styles.h3}>Redes sociales</h3>
          <p className={styles.p}>Lorem ipsum dolor.</p>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1 }}
        className={styles.box}
      >
        <div className={styles.containerImg}>
          <Image
            className={styles.image}
            src="/static/services/shop.png"
            alt=""
            width={55}
            height={55}
          />
        </div>
        <div className={styles.text}>
          <h3 className={styles.h3}>E-commerce</h3>
          <p className={styles.p}>Lorem ipsum dolor.</p>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1 }}
        className={styles.box}
      >
        <div className={styles.containerImg}>
          <Image
            className={styles.image}
            src="/static/services/web.png"
            alt=""
            width={55}
            height={55}
          />
        </div>
        <div className={styles.text}>
          <h3 className={styles.h3}>Diseno web</h3>
          <p className={styles.p}>Lorem ipsum dolor.</p>
        </div>
      </motion.div>
    </section>
  );
};
