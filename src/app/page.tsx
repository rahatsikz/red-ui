import CallToAction from "@/Components/Homepage/CallToAction";
import Feature from "@/Components/Homepage/Feature";
import HeroSection from "@/Components/Homepage/HeroSection";
import List from "@/Components/Homepage/List";
import Testimonial from "@/Components/Homepage/Testimonial";
import Footer from "@/Components/ui/Footer";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <Feature />
      <List />
      <CallToAction />
      <Testimonial />
      <Footer />
    </main>
  );
}
