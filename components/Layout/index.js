import { Navegation } from "../Navegation";
import { Footer } from "../Footer";
import { Line } from "../Line";
import { WhatsApp } from "../WhatsApp";
import styles from "./styles.module.css";
export const Layout = ({ children }) => {
  return (
    <main className={styles.layout} id="layout">
      <Line />
      <Navegation />
      {children}
      <WhatsApp />
      <Footer />
    </main>
  );
};
