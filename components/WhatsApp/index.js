import { WhatsAppWidget } from "react-whatsapp-widget";
import "react-whatsapp-widget/dist/index.css";
import { Logo } from "./Logo";
import styles from "./styles.module.css";

export const WhatsApp = ({ number }) => {
  return (
    <div className={styles.whatsapp}>
      <WhatsAppWidget
        CompanyIcon={Logo}
        phoneNumber={number}
        companyName="Nippy Wit"
        message="Hello! 👋🏼 Queremos crecer tu negocio!"
        replyTimeText="Agencia de Marketing Digital"
        inputPlaceHolder="Escribenos un mensage"
        sendButtonText="Enviar"
        open="true"
      />
    </div>
  );
};