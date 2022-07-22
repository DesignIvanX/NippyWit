import { Button } from "../Button";
import styles from "./styles.module.css";
export const About = () => {
  return (
    <section className={styles.about}>
      <div>
        <iframe
          className={styles.video}
          src="https://www.youtube.com/embed/kM_NbktXHLw"
          title="YouTube video player"
          frameBorder={0}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      <div className={styles.text}>
        <h2 className={styles.h2}>
          Lorem Ipsum is simply dummy text of the printing.
        </h2>
        <p className={styles.p}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry.
        </p>
        <Button type="fill">Portafolio</Button>
      </div>
    </section>
  );
};
