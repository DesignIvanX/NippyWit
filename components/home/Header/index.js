import Image from "next/image";
import { Button } from "../../Button";
import Typed from "react-typed";
import styles from "./styles.module.css";
export const Header = () => {
  return (
    <header className={styles.headerContent}>
      <div className={styles.header}>
        <section className={styles.text}>
          <h1 className={styles.h1}>
            <span className={styles.active}>Mejores soluciones </span>para tu
            éxito en <br />
            <Typed
              strings={[
                "tu e-commerce",
                "línea",
                "redes sociales",
                "tu empresa",
              ]}
              typeSpeed={50}
              backSpeed={50}
              loop
            />
          </h1>
          <p className={styles.p}>
            Brindar soluciones empresariales que promuevan a las PYMES a
            ingresar al mundo en línea incrementando la capacidad de nuestros
            clientes a su nuevo exito en linea.
          </p>
          <div className={styles.div}>
            <Button type="fill" path="contact">
              Contacto
            </Button>
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
