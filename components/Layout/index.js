import { Navegation } from "../Navegation";
import { Footer } from "../Footer";
import styles from "./styles.module.css";
export const Layout = ({ children }) => {
  return (
    <main className={styles.layout}>
      <Navegation />
      {children}
      <Footer />
    </main>
  );
};
