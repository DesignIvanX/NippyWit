import Image from "next/image";
import styles from "./styles.module.css";
export const Clients = () => {
  return (
    <section className={styles.clients}>
      <div className={styles.title}>
        <h2 className={styles.h2}>You will be in good Company</h2>
      </div>
      <div className={styles.clientsContent}>
        <Image
          className={styles.images}
          src="/static/clients/beneoshop.png"
          alt=""
          width={170}
          height={150}
        />
        <Image
          className={styles.images}
          src="/static/clients/caspio.png"
          alt=""
          width={170}
          height={150}
        />
        <Image
          className={styles.images}
          src="/static/clients/HyperGrid.png"
          alt=""
          width={170}
          height={150}
        />
        <Image
          className={styles.images}
          src="/static/clients/leotrippi.png"
          alt=""
          width={170}
          height={150}
        />
      </div>
    </section>
  );
};
