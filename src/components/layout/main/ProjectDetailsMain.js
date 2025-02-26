import HeroInner from "@/components/sections/hero-banners/HeroInner";
import ProjectDetalisPrimary from "@/components/sections/project-details/ProjectDetalisPrimary";
import Projects4 from "@/components/sections/projects/Projects4";

const ProjectDetailsMain = () => {
  return (
    <main>
      <HeroInner title={"Job Details"} currentItem={"Job Details"} />
      <ProjectDetalisPrimary />
      <Projects4 />
    </main>
  );
};

export default ProjectDetailsMain;
