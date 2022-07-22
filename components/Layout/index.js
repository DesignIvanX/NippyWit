import { Navegation } from "../Navegation";
import { Footer } from "../Footer";
import { Line } from "../Line";

import styles from "./styles.module.css";
export const Layout = ({ children }) => {
  return (
    <main className={styles.layout}>
      <Line />
      <Navegation />
      {children}
      <Footer />
    </main>
  );
};
