import About3 from "@/components/sections/about/About3";
import Team3 from "@/components/sections/team/Team3";
import Blogs3 from "@/components/sections/blogs/Blogs3";
import HeroInner from "@/components/sections/hero-banners/HeroInner";
import AboutWrapper from "@/components/shared/wrappers/AboutWrapper";
import CounterUp from "@/components/sections/counter-up/CounterUp";
import Services4 from "@/components/sections/services/Services4";
import Team2 from "@/components/sections/team/Team2";

const AboutMain = () => {
  return (
    <main>
      <HeroInner title={"About Page"} currentItem={"About Us"} />
      <AboutWrapper>
        <About3 />
        {/* <Team3 type={2} label="Our Team" /> */}
        <Team2 />

      </AboutWrapper>

      <CounterUp />
      <Blogs3 />
    </main>
  );
};

export default AboutMain;
