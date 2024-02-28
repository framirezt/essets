import Banner from "@/components/Banner";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-[--color1]">
      <Navbar />
      <Banner />
    </main>
  );
}
