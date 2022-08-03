import Image from "next/image";
import { Button } from "../../Button";
import styles from "./styles.module.css";
export const Information = () => {
  return (
    <section className={styles.content}>
      <div className={styles.text}>
        <h2 className={styles.h2}>
          <span className={styles.active}>Lorem Ipsum</span> is simply dummy
          text of the printing.
        </h2>
        <p className={styles.p}>
          KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web
          applications and website builders measuring dozens of completed
          projects. We build and develop mobile applications for several top
          platforms, including Android & IOS.
        </p>
        <p className={styles.p}>
          KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web
          applications and website builders measuring dozens
        </p>
        <Button type="unfilled" path="tel:+595992233418">
          Contactanos
        </Button>
      </div>
      <div>
        <Image
          className={styles.image}
          src="/static/about/illustration.png"
          width={400}
          height={400}
          alt=""
        />
      </div>
    </section>
  );
};
