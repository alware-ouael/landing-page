import Image from "next/image";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Clients from "./components/Clients";

export default function Home() {
  return (
    <div className="">
      <main className="">
        <Navbar />
        <Hero />
        <Clients />

      </main>
    </div>
  );
}
