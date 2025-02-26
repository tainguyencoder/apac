'use client';
import ProjectSidebar from '@/components/shared/sidebars/ProjectSidebar';
import getAllProjects from '@/libs/getAllProjects';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useState } from 'react';

const ProjectDetalisPrimary = () => {
  const projects = getAllProjects();
  const totalProjects = projects?.length;
  const { id: currnetIdString } = useParams();
  const currentId = currnetIdString ? parseInt(currnetIdString) : null;
  const currentProjects = projects?.filter(({ id }) =>
    currentId > 3 && currentId < 7
      ? id > 3 && id < 7
      : currentId === 1
      ? id < 4
      : currentId === 3
      ? (id > 1 && id < 4) || id === 7
      : currentId === 7
      ? id === 3 || (id > 6 && id < 9)
      : currentId === totalProjects
      ? id > currentId - 3
      : id > currentId - 2 && id < currentId + 2,
  );
  const [currentProject, setCurrentProject] = useState(
    currentProjects?.find(({ id }) => id === currentId),
  );

  const nextProjectId = currentId === totalProjects ? 1 : currentId + 1;
  const prevProjectId = currentId === 1 ? totalProjects : currentId - 1;
  const { title, jd, res, quali } = currentProject;
  console.log(currentProject);
  return (
    <div className="project__details sp_top_140 sp_bottom_140">
      <div className="container">
        <div className="project__details__bottom__border">
          <div className="row">
            <ProjectSidebar currentProject={currentProject} />
            <div className="col-xl-8 col-xl-8 col-lg-8 col-md-12 col-12">
              <div className="project__details__wraper">
                <div
                  className="service__details__heading"
                  data-aos="fade-up"
                  data-aos-duration="1500"
                >
                  <h4>{title}</h4>
                </div>
                <div
                  className="service__details__text"
                  data-aos="fade-up"
                  data-aos-duration="1500"
                >
                  <p>{jd}</p>
                </div>
                <div
                  className="project__details__challenges"
                  data-aos="fade-up"
                  data-aos-duration="1500"
                >
                  <div className="project__details__challenges__heading">
                    <h6>Key Responsibilities:</h6>
                  </div>
                  <ul
                    className="project__details__challenges__heading"
                    style={{ paddingLeft: '10px' }}
                  >
                    {res?.map((item, index) => (
                      <li key={index}>• {item}</li>
                    ))}
                  </ul>
                </div>
                <div
                  className="project__details__challenges"
                  data-aos="fade-up"
                  data-aos-duration="1500"
                >
                  <div className="project__details__challenges__heading">
                    <h6>Qualifications:</h6>
                  </div>
                  <ul
                    className="project__details__challenges__heading"
                    style={{ paddingLeft: '10px' }}
                  >
                    {quali?.map((item, index) => (
                      <li key={index}>• {item}</li>
                    ))}
                  </ul>
                </div>
                <div
                  className="project__details__button"
                  data-aos="fade-up"
                  data-aos-duration="1500"
                >
                  <Link
                    className="default__button"
                    href={`/job-openings/${prevProjectId}`}
                  >
                    PREV.JOB
                  </Link>
                  <Link
                    className="default__button"
                    href={`/job-openings/${nextProjectId}`}
                  >
                    NEXT.JOB
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetalisPrimary;
