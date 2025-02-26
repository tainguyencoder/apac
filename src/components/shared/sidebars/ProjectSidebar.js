import React from "react";

const ProjectSidebar = ({currentProject}) => {
  console.log(currentProject);
  return (
    <div className="col-xl-4 col-lg-4 cl-md-12 col-12">
      <div className="project__details__sidebar sidebar">
        <div
          className="project__details__sidebar__info"
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          <div className="project__details__sidebar__heading">
            <h6>Job info:</h6>
          </div>
          <div className="project__details__sidebar__list">
            <ul>
              <li>
                <span>Location:</span>
                <p>{currentProject.location}</p>
              </li>
              <li>
                <span>Industry:</span>
                <p>{currentProject.industry}</p>
              </li>
              <li>
                <span>Salary:</span>
                <p>{currentProject.salary}</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectSidebar;
