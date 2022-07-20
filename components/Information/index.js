import Image from "next/image";
import styles from "./styles.module.css";
export const Information = () => {
  return (
    <section className={styles.information}>
      <div className={styles.box}>
        <div className={styles.containerImage}>
          <Image
            src="/static/Information/website.png"
            alt=""
            width={300}
            height={300}
          />
        </div>
        <div className={styles.containerText}>
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
        </div>
      </div>
      <div className={styles.box}>
        <div className={styles.containerImage}>
          <Image
            src="/static/Information/social.png"
            alt=""
            width={300}
            height={300}
          />
        </div>
        <div className={styles.containerText}>
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
        </div>
      </div>
    </section>
  );
};
