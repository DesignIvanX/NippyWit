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
          Creamos soluciones digitales. <br />| Manejo de redes sociales |
          Creacion de logos | Fotografia profesional | Paginas web | Estrategias
          de Marketing |
        </p>
      </div>
    </header>
  );
};
