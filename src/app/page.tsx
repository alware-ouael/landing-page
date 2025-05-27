import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Clients from "./components/Clients";
import About from "./components/About";
import Solutions from "./components/Solutions";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="">
      <main className="">
        <Navbar />
        <Hero />
        <Clients />
        <About/>
        <Solutions/>
<ContactUs/>

      </main>
      <Footer/>
    </div>
  );
}
