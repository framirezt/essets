import Banner from "@/components/Banner";
import Essets from "@/components/Essets";
import InfoEssets from "@/components/InfoEssets";
import Navbar from "@/components/Navbar";
import Sponsors from "@/components/Sponsors";

export default function Home() {
  return (
    <main className="">
      <Navbar />
      <Banner />
      <Sponsors />
      <Essets />
      <InfoEssets />
    </main>
  );
}
