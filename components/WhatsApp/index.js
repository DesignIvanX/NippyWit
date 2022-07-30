import { WhatsAppWidget } from "react-whatsapp-widget";
import "react-whatsapp-widget/dist/index.css";
// import { ReactComponent as CompanyIcon } from "./static/logo.png";
import Logo from "./Logo";
import styles from "./styles.module.css";

export const WhatsApp = () => {
  return (
    <div className={styles.whatsapp}>
      <WhatsAppWidget CompanyIcon={Logo} phoneNumber="+595961154054" />;
    </div>
  );
};
