"use client";
import Fundraisers from "@/components/Hero/Fundraisers";
import Hero from "@/components/Hero/Hero";
import Howto from "@/components/Hero/Howto";
import Parallax from "@/components/Hero/Parallax";
import Header from "@/components/Navigation/Header";
import Heading from "@/utils/Heading";
import { FC, useEffect, useState } from "react";
import Lenis from "@studio-freight/lenis";
import Affirmations from "@/components/Hero/Affirmations";
import OurPartners from "@/components/Hero/OurPartners";
import Blog from "@/components/Hero/Blog";
import Faq from "@/components/Hero/Faq";
import Footer from "@/components/Navigation/Footer";

interface pageProps {}

const Page: FC<pageProps> = ({}) => {
  const [open, setOpen] = useState<boolean>(false);
  const [activeItem, setActiveItem] = useState(0);
  const [route, setRoute] = useState("Auth");

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="">
      <Heading
        title="Dona8 | The future of Donation"
        description="Dona8 is a platform for Donating money"
        keywords="Donation, Charity, Fundraising"
      />
      <Header
        open={open}
        setOpen={setOpen}
        activeItem={activeItem}
        setRoute={setRoute}
        route={route}
      />
      <Hero />
      <Howto />
      <Fundraisers />
      <Parallax />
      <Affirmations />
      <OurPartners />
      <Blog />
      <Faq />
      <Footer />
    </div>
  );
};

export default Page;
