import Banner from "@/components/Banner";
import Essets from "@/components/Essets";
import Navbar from "@/components/Navbar";
import Sponsors from "@/components/Sponsors";

export default function Home() {
  return (
    <main className="">
      <Navbar />
      <Banner />
      <Sponsors />
      <Essets />
    </main>
  );
}
