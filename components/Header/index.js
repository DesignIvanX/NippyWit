import Image from "next/image";
import { Button } from "../Button";
import styles from "./styles.module.css";
export const Header = () => {
  return (
    <header className={styles.headerContent}>
      <div>
        <img
          className={styles.wave}
          src="/static/header/wave.png"
          alt=""
          width={50}
          height={550}
        />
      </div>
      <div className={styles.header}>
        <section className={styles.text}>
          <h1 className={styles.h1}>
            Experienced <span className={styles.active}>mobile and web </span>
            applications and website builders measuring.
          </h1>
          <p className={styles.p}>
            Good health is the state of mental, physical and social well being
            and it does not just mean absence of diseases.
          </p>
          <div className={styles.div}>
            <Button type="fill">Get Started</Button>
            <Button type="UnFilled">Get Started</Button>
          </div>
        </section>
        <section className={styles.section}>
          <Image
            className={styles.image}
            src="/static/header/header.png"
            alt=""
            width={450}
            height={440}
          />
        </section>
      </div>
    </header>
  );
};
