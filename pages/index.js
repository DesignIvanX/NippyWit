import { Header } from "../components/home/Header";
// import { Clients } from "../components/Clients";
import { ServicesContainer } from "../components/home/Services";
import { About } from "../components/home/About";
import { Newsletter } from "../components/Newsletter";
// import { Information } from "../components/home/Information";
import { Started } from "../components/Started";
import Seo from "../components/seo";

export default function Home() {
  return (
    <>
      <Seo
        title={"Inicio - Nippy Wit Agencia de Marketing Digital"}
        description={
          "NippyWit es una Agencia De Marketing Digital que ayuda a las PYMES con su presencia digital, escalabilidad de ventas a través de paginas web, redes sociales, e-commerce entre otros métodos."
        }
        twitter_card={""}
        twitter_site={""}
        twitter_creator={"nippywit"}
        twitter_title={"Inicio - Nippy Wit Agencia de Marketing Digital"}
        twitter_description={
          "NippyWit es una Agencia De Marketing Digital que ayuda a las PYMES con su presencia digital, escalabilidad de ventas a través de paginas web, redes sociales, e-commerce entre otros métodos."
        }
        twitter_image={""}
        og_title={"Inicio - Nippy Wit Agencia de Marketing Digital"}
        og_description={
          "NippyWit es una Agencia De Marketing Digital que ayuda a las PYMES con su presencia digital, escalabilidad de ventas a través de paginas web, redes sociales, e-commerce entre otros métodos."
        }
        og_image={"../../public/static/logo.svg"}
        og_url={"/contact/"}
        og_site_name={"Inicio - Nippy Wit Agencia de Marketing Digital"}
        og_locale={""}
        og_type={""}
        fb_app_id={""}
        keywords={
          "nippywit, nippy wit, nippiwit, nippi wit, nipy wit, nipywit, nipi wit, nipi wit, contacto, agencia de marketing digital, agencia, desarrollo web, instagram, landing page, agencia de marketing, agencia digital, whatsapp, gestor de redes sociales, fotografia de alimentos, fotografia, fotografia de productos, landing, administrador de contenido, diseño de publicaciones, web, digital, crecer empresa, activacion correcta de instagram, gestion de respuestas directas, instagram analytics, gestion de contenido creativo, crecer mi emprendimiento, e-commerce, diseño grafico, branding, que es nippy wit, nosotros"
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
      <About />
      <ServicesContainer />
      {/* <Information /> */}
      {/* <Clients /> */}
      <Started />
      <Newsletter />
    </>
  );
}
