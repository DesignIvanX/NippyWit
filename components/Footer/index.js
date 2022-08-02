import Image from "next/image";
import { motion } from "framer-motion";
import styles from "./styles.module.css";
export const Footer = () => {
  return (
    <motion.footer
      initial={{ y: 100, opacity: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      whileInView={{ y: 0, opacity: 1 }}
      className={styles.footer}
    >
      <div className={styles.container}>
        <div className={styles.containerOne}>
          <Image
            className={styles.oneImage}
            src="/static/logo.png"
            alt=""
            width={100}
            height={70}
          />
          <p className={styles.oneP}>
            Mejores soluciones para hacer su éxito en línea.
          </p>
          <p className={styles.oneP}>
            <a href="mailto:hola@nippywit.com">hola@nippywit.com</a>
          </p>
        </div>
        <div className={styles.containerTwo}>
          <h3 className={styles.threeH3}>Empresa</h3>
          <p className={styles.threeP}>
            <a href="">Portafolio</a>
          </p>
          <p className={styles.threeP}>
            <a href="">Nosotros</a>
          </p>
          <p className={styles.threeP}>
            <a href="">Servicios</a>
          </p>
          <p className={styles.threeP}>
            <a href="">Contacto</a>
          </p>
        </div>
        <div className={styles.contact}>
          <h3 className={styles.contactH3}>Contacto</h3>
          <p className={styles.contactP}>
            Soluciones de negocios que impulsen a las PYMES en su incursión al
            mundo del Internet con un servicio de alta calidad.
          </p>
          <p className={styles.contactP}>
            <a href="mailto:hola@nippywit.com">hola@nippywit.com</a>
            <br />
            <a href="tel:+595981154054">+595981154054</a>
          </p>
        </div>
        <div>
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
      </div>
      <div className={styles.foot}>
        <h5 className={styles.footH5}>Copyright® 2022 Nippy Wit</h5>
      </div>
    </motion.footer>
  );
};
