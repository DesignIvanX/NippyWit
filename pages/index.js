import { Header } from "../components/Header";
import { Clients } from "../components/Clients";
import { Services } from "../components/Services";
import { About } from "../components/About";
import { Newsletter } from "../components/Newsletter";

export default function Home() {
  return (
    <>
      <Header />
      <Services />
      <About />
      <Clients />
      <Newsletter />
    </>
  );
}
