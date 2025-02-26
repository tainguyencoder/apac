import HeroInner from "@/components/sections/hero-banners/HeroInner";
import ProjectsPrimary from "@/components/sections/projects/ProjectsPrimary";

const ProjectsMain = () => {
  return (
    <main>
      <HeroInner title={"All Jobs"} currentItem={"All Jobs"} />
      <ProjectsPrimary />
    </main>
  );
};

export default ProjectsMain;
