import Image from "next/image";
import styles from "./styles.module.css";
export const Footer = () => {
  return (
    <footer className={styles.footer}>
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
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <p className={styles.oneP}>@Lorem</p>
        </div>
        <div className={styles.containerTwo}>
          <h3 className={styles.threeH3}>About us</h3>
          <p className={styles.threeP}>Lorem</p>
          <p className={styles.threeP}>Portfolio</p>
          <p className={styles.threeP}>Careers</p>
          <p className={styles.threeP}>Contact us</p>
        </div>
        <div className={styles.contact}>
          <h3 className={styles.contactH3}>Contact us</h3>
          <p className={styles.contactP}>
            Lorem ipsum dolor. Lorem Ipsum is simply dummy text of the printing
            and typesetting industry.
          </p>
          <p className={styles.contactP}>+908 89097 890</p>
        </div>
        <div>
          <Image
            src="/static/social/instagram.png"
            alt="instagram"
            width={80}
            height={80}
          />
          <Image
            src="/static/social/facebook.png"
            alt="facebook"
            width={80}
            height={80}
          />
          <Image
            src="/static/social/twitter.png"
            alt="twitter"
            width={80}
            height={80}
          />
        </div>
      </div>
      <div className={styles.foot}>
        <h5 className={styles.footH5}>
          Copyright ® 2021 Lorem All rights Rcerved
        </h5>
      </div>
    </footer>
  );
};
