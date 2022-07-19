import Image from "next/image";
import styles from "./styles.module.css";
export const Services = () => {
  return (
    <section className={styles.services}>
      <div className={styles.box}>
        <div className={styles.containerImg}>
          <Image
            className={styles.image}
            src="/static/seo.png"
            alt=""
            width={55}
            height={55}
          />
        </div>
        <div className={styles.text}>
          <h3 className={styles.h3}>SEO</h3>
          <p className={styles.p}>Lorem ipsum dolor.</p>
        </div>
      </div>
      <div className={styles.box}>
        <div className={styles.containerImg}>
          <Image
            className={styles.image}
            src="/static/social.png"
            alt=""
            width={55}
            height={55}
          />
        </div>
        <div className={styles.text}>
          <h3 className={styles.h3}>Redes sociales</h3>
          <p className={styles.p}>Lorem ipsum dolor.</p>
        </div>
      </div>
      <div className={styles.box}>
        <div className={styles.containerImg}>
          <Image
            className={styles.image}
            src="/static/shop.png"
            alt=""
            width={55}
            height={55}
          />
        </div>
        <div className={styles.text}>
          <h3 className={styles.h3}>E-commerce</h3>
          <p className={styles.p}>Lorem ipsum dolor.</p>
        </div>
      </div>
      <div className={styles.box}>
        <div className={styles.containerImg}>
          <Image
            className={styles.image}
            src="/static/web.png"
            alt=""
            width={55}
            height={55}
          />
        </div>
        <div className={styles.text}>
          <h3 className={styles.h3}>Diseno web</h3>
          <p className={styles.p}>Lorem ipsum dolor.</p>
        </div>
      </div>
    </section>
  );
};
