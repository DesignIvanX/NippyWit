import Image from "next/image";
import { motion } from "framer-motion";
import styles from "./styles.module.css";
export const Header = () => {
  return (
    <header className={styles.header}>
      <section className={styles.content}>
        <div className={styles.text}>
          <Image
            src="/head.svg"
            alt=""
            width={70}
            height={70}
            className={styles.image}
          />
          <h1 className={styles.h1}>Colaboremos</h1>
          <p className={styles.p}>Haremos un cambio en tu empresa.</p>
          <div className={styles.number}>
            <a className={styles.a} href="tel:+595992233418">
              <span className={styles.active}>+595 992 233418</span>
            </a>
          </div>
        </div>
        <div>
          <Image src="/map.svg" alt="" width={400} height={400} />
        </div>
      </section>
      <motion.section
        initial={{ y: 100, opacity: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        whileInView={{ y: 0, opacity: 1 }}
        className={styles.contact}
      >
        <div className={styles.social}>
          <h3 className={styles.socialh3}>Siguenos</h3>
          <a href="https://www.instagram.com/nippywit/">
            <Image
              src="/static/social/instagram.png"
              alt="instagram"
              width={80}
              height={80}
            />
          </a>
          <a href="">
            <Image
              src="/static/social/facebook.png"
              alt="facebook"
              width={80}
              height={80}
            />
          </a>
          <a href="">
            <Image
              src="/static/social/twitter.png"
              alt="twitter"
              width={80}
              height={80}
            />
          </a>
        </div>
      </motion.section>
    </header>
  );
};
