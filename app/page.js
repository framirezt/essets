import Banner from "@/components/Banner";
import Core_Team from "@/components/Core_Team";
import Essets from "@/components/Essets";
import InfoEssets from "@/components/InfoEssets";
import Navbar from "@/components/Navbar";
import Real_Estate from "@/components/Real_Estate";
import Sponsors from "@/components/Sponsors";
import Why_Essets from "@/components/Why_Essets";

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
      <Core_Team />
    </main>
  );
}
