import Image from "next/image";
import styles from "./styles.module.css";
export const Plants = () => {
  return (
    <section className={styles.plants}>
      <a
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
      </a>
      <a
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
      </a>
      <a
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
      </a>
      <a
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
      </a>
    </section>
  );
};
