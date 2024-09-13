import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import Essets from "@/components/Essets";
import InfoEssets from "@/components/InfoEssets";
import Navbar from "@/components/Navbar";
import Real_Estate from "@/components/Real_Estate";
import Sponsors from "@/components/Sponsors";
import Why_Essets from "@/components/Why_Essets";
import Team from "@/components/Team";

export default function Home() {
  return (
    <main className="">
      <Navbar />
      <Banner />
      <Sponsors />
      <Essets />
      <InfoEssets />
      <Real_Estate />
      <Why_Essets />
      {/* <Team /> */}
      <Contact />
      <Footer />
    </main>
  );
}
