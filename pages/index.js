import { Header } from "../components/home/Header";
// import { Clients } from "../components/Clients";
import { Services } from "../components/Services";
import { About } from "../components/home/About";
import { Newsletter } from "../components/Newsletter";
// import { Information } from "../components/home/Information";
import { Started } from "../components/Started";

export default function Home() {
  return (
    <>
      <Header />
      <Services />
      <About />
      {/* <Information /> */}
      {/* <Clients /> */}
      <Started />
      <Newsletter />
    </>
  );
}
