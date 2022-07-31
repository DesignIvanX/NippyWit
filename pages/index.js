import { Header } from "../components/home/Header";
import { Clients } from "../components/Clients";
import { Services } from "../components/home/Services";
import { About } from "../components/home/About";
import { Newsletter } from "../components/Newsletter";
import { Information } from "../components/home/Information";
import { Video } from "../components/Video";

export default function Home() {
  return (
    <>
      <Header />
      <Services />
      <Video />
      <About />
      <Information />
      <Clients />
      <Newsletter />
    </>
  );
}
