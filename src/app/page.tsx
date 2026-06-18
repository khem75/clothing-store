import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import FeaturedCollection from "@/components/home/FeaturedCollection";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import InstagramFeed from "@/components/home/InstagramFeed";
import Footer from "@/components/home/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <FeaturedCollection />
      <WhyChooseUs />
      <InstagramFeed />
      <Footer />
      <WhatsAppButton />
    </>
  );
}