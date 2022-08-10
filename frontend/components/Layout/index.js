import { Navegation } from "../Navegation";
import { Footer } from "../Footer";
import { Line } from "../Line";
import { WhatsApp } from "../WhatsApp";
import { Loader } from "../Loader";
// import { Alert } from "../Alert";
import styles from "./styles.module.css";
export const Layout = ({ children }) => {
  return (
    <main className={styles.layout} id="layout">
      <Line />
      <Navegation />
      {children}
      <WhatsApp number="+595961154054" />
      <Loader />
      {/* <Alert /> */}
      <Footer />
    </main>
  );
};
