import HeroInner from "@/components/sections/hero-banners/HeroInner";
import TeamPrimary from "@/components/sections/team/TeamPrimary";
import React from "react";
import Projects3 from "@/components/sections/projects/Projects3";

const TeamMain = () => {
  return (
    <main>
      <HeroInner title={"Our Clients"} currentItem={"Clients"} />
      <TeamPrimary />
      <Projects3 />

    </main>
  );
};

export default TeamMain;
