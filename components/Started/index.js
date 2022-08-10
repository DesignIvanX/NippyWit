import Image from "next/image";
import styles from "./styles.module.css";
import { motion } from "framer-motion";
import { Button } from "../Button";

export const Started = () => {
  return (
    <motion.section
      initial={{ y: 100, opacity: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      whileInView={{ y: 0, opacity: 1 }}
      className={styles.started}
    >
      <div className={styles.containerText}>
        <p className={styles.pTop}>
          <span className={styles.active}>En que te podemos ayudar</span>
        </p>
        <h2 className={styles.h2}>
          Ayudamos a Crear el
          <span className={styles.active}> Cambio</span> de tu Negocio
        </h2>
        <p className={styles.p}>
          En NippyWit entendemos que el éxito de nuestros clientes es nuestro
          éxito. Nos apasiona ayudar a negocios a través de Internet haciendo
          todo lo posible para que tu negocio sea exitoso.
        </p>
        <Button
          type="fill"
          path="https://api.whatsapp.com/send/?phone=%2B595961154054&text&type=phone_number&app_absent=0"
        >
          Comencemos
        </Button>
      </div>
      <div>
        <Image src="/static/man3d.jpg" alt="" width={300} height={280} />
      </div>
    </motion.section>
  );
};
