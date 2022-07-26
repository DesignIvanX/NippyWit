import Image from "next/image";
import styles from "./styles.module.css";
export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.content}>
        <Image
          className={styles.image}
          src="/static/about/speaker.png"
          alt="audifono 3d"
          width={100}
          height={100}
        />
        <h2 className={styles.h2}>
          NUESTROS <span className={styles.active}>SERVICIOS</span>
        </h2>
        <p className={styles.p}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry.
        </p>
      </div>
      <div className={styles.services}>
        <div
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
            <p className={styles.p}>
              Posicionate en internet para estar en las primeras listas de
              Google
            </p>
          </div>
        </div>
        <div
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
            <p className={styles.p}>
              Vender más con las piezas de diseño e interacción en las redes
              sociales
            </p>
          </div>
        </div>
        <div
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
            <p className={styles.p}>
              Una tienda en internet abierta 24/7 vendiendo por si misma
            </p>
          </div>
        </div>
        <div
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
            <p className={styles.p}>
              Mostrar la informacion de todo tu negocio
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};
