import Image from "next/image";
import { Button } from "../../Button";
import styles from "./styles.module.css";
export const Information = () => {
  return (
    <section className={styles.content}>
      <div className={styles.text}>
        <h2 className={styles.h2}>
          <span className={styles.active}>Nosotros te Ayudaremos</span> a Tener
          la Presencia Digital.
        </h2>
        <p className={styles.p}>
          En NippyWit entendemos que el éxito de nuestros clientes es nuestro
          éxito. Nos apasiona ayudar a negocios a través de Internet haciendo
          todo lo posible para que tu negocio sea exitoso.
        </p>
        <p className={styles.p}>
          Entendemos que para logar el exito no tenemos que dejar de mejorar.
          Proponemos a todos nuestros clientes a que nos dejen ayudarlos a
          mejorar cada día.
        </p>
        <Button
          type="unfilled"
          path="https://api.whatsapp.com/send/?phone=%2B595961154054&text&type=phone_number&app_absent=0"
        >
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
