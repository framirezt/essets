import Banner from "@/components/Banner";
import Essets from "@/components/Essets";
import InfoEssets from "@/components/InfoEssets";
import Navbar from "@/components/Navbar";
import Real_Estate from "@/components/Real_Estate";
import Sponsors from "@/components/Sponsors";

export default function Home() {
  return (
    <main className="">
      <Navbar />
      <Banner />
      <Sponsors />
      <Essets />
      <InfoEssets />
      <Real_Estate />
    </main>
  );
}
