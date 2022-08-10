import { Logo } from "./Logo";
import { WhatsAppWidget } from "react-whatsapp-widget";
import "react-whatsapp-widget/dist/index.css";

export const WhatsApp = ({ number }) => {
  return (
    <WhatsAppWidget
      CompanyIcon={Logo}
      phoneNumber={number}
      companyName="Nippy Wit"
      message="Hola! 👋🏼 Queremos crecer tu negocio!"
      replyTimeText="Agencia de Marketing Digital"
      inputPlaceHolder="Escribenos un mensage"
      sendButtonText="Enviar"
    />
  );
};
