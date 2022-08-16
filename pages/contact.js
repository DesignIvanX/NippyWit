import { Form } from "../components/contact/Form";
import { Header } from "../components/contact/Header";
import Seo from "../components/seo";

export default function contact() {
  return (
    <section>
      <Seo
        title={"Contacto"}
        description={"Contacto de Nippy Wit - Agencia de Marketing Digital."}
        twitter_card={""}
        twitter_site={""}
        twitter_creator={"nippywit"}
        twitter_title={"Contacto"}
        twitter_description={
          "Contacto de Nippy Wit - Agencia de Marketing Digital"
        }
        twitter_image={""}
        og_title={"Contacto - NippyWit"}
        og_description={"Contacto - Agencia de Marketing Digital Nippy Wit"}
        og_image={"../../public/static/logo.svg"}
        og_url={"/contact/"}
        og_site_name={"Contacto - Agencia de Marketing Digital Nippy Wit"}
        og_locale={""}
        og_type={""}
        fb_app_id={""}
        keywords={
          "nippywit, nippy wit, nippiwit, nippi wit, nipy wit, nipywit, nipi wit, nipi wit, contacto, agencia de marketing digital, agencia, desarrollo web, instagram, landing page, agencia de marketing, agencia digital, whatsapp, gestor de redes sociales, fotografia de alimentos, fotografia, fotografia de productos, landing, administrador de contenido, diseño de publicaciones, web, digital, crecer empresa, activacion correcta de instagram, gestion de respuestas directas, instagram analytics, gestion de contenido creativo, crecer mi emprendimiento, e-commerce, diseño grafico, branding"
        }
        author={"Nippy Wit"}
        copyright={"Nippy Wit"}
        url={"/contact/"}
        name={"Nippy Wit"}
        facebook={"https://www.facebook.com/nippywit"}
        instagram={"https://www.instagram.com/nippywit/"}
        twitter={"https://.www.twitter.com/nippywit"}
        inLenguage={"es"}
        captain={""}
        siteName={"Nippy Wit - Agencia de Marketing Digital"}
      />
      <Header />
      <Form />
    </section>
  );
}
