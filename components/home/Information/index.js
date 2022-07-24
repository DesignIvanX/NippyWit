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
            <span className={styles.active}>Lorem Ipsum </span>is simply dummy
            text of the printing.
          </h3>
          <p className={styles.p}>
            KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web
            applications and website builders measuring dozens of completed
            projects. We build and develop mobile applications for several top
            platforms, including Android & IOS.
          </p>
        </motion.div>
      </div>
      <div className={styles.box}>
        <motion.div
          initial={{ opacity: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1 }}
          className={styles.containerText}
        >
          <h3 className={styles.h2}>
            <span className={styles.active}>Lorem Ipsum </span>is simply dummy
            text of the printing.
          </h3>
          <p className={styles.p}>
            KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web
            applications and website builders measuring dozens of completed
            projects. We build and develop mobile applications for several top
            platforms, including Android & IOS.{" "}
          </p>
        </motion.div>

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
      </div>
    </section>
  );
};
