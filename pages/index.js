import { Header } from "../components/home/Header";
// import { Clients } from "../components/Clients";
import { ServicesContainer } from "../components/home/Services";
import { About } from "../components/home/About";
import { Newsletter } from "../components/Newsletter";
// import { Information } from "../components/home/Information";
import { Started } from "../components/Started";

export default function Home() {
  return (
    <>
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
