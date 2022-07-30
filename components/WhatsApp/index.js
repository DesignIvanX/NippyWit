import { WhatsAppWidget } from "react-whatsapp-widget";
import "react-whatsapp-widget/dist/index.css";
import Logo from "./Logo";
import styles from "./styles.module.css";

export const WhatsApp = () => {
  return (
    <div className={styles.whatsapp}>
      <WhatsAppWidget
        CompanyIcon={Logo}
        phoneNumber="+595961154054"
        companyName="Nippy Wit"
        message="Hola! 👋🏼
				Queremos hacer tu negocio."
        replyTimeText="Agencia de Marketing Digital"
      />
      ;
    </div>
  );
};

// companyName	string	'Support'	Your company name
// replyTimeText	string	'Typically replies within a day'
// message	string	'Hello! 👋🏼 \n\nWhat can we do for you?'	With \n you can create a break-line.
// sendButton	string	'Send'	Text inside the send button
// open	boolean	false	If true the chatbox will be open as default
