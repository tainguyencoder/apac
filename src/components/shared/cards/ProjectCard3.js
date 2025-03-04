import Image from "next/image";
import Link from "next/link";

const ProjectCard3 = ({ project }) => {
  const { title, id, img } = project;
  return (
    <div className="project__3__img single__transform">
      <Image src={img} alt="" />
      <div className="project__3__name">
        <h6>
          <div>{title}</div>
        </h6>
      </div>
    </div>
  );
};

export default ProjectCard3;
