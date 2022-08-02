import Image from "next/image";
import styles from "./styles.module.css";
import { motion } from "framer-motion";
import { Button } from "../Button";

export const Started = () => {
  return (
    <motion.section
      initial={{ y: 100, opacity: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      whileInView={{ y: 0, opacity: 1 }}
      className={styles.started}
    >
      <div className={styles.containerText}>
        <p className={styles.pTop}>
          <span className={styles.active}>En que te podemos ayudar</span>
        </p>
        <h2 className={styles.h2}>
          We Help to Create your{" "}
          <span className={styles.active}> Bussiness</span> Change
        </h2>
        <p className={styles.p}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione
          doloremque recusandae ullam magnam aperiam quae. Fugit ullam, dolorem
          cupiditate quidem molestiae ut eveniet tenetur eius reprehenderit non
          commodi fugiat debitis?
        </p>
        <Button type="fill">Comencemos</Button>
      </div>
      <div>
        <Image src="/static/man3d.jpg" alt="" width={300} height={280} />
      </div>
    </motion.section>
  );
};
