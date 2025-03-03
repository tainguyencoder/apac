import React from 'react';

const ServiceSidebar = ({ currentProject }) => {
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
            <h6>What We Do:</h6>
          </div>
          <div className="project__details__sidebar__list">
            <ul>
              {currentProject.wwd.map((item, index) => (
                <li style={{ color: 'white' }} key={index}>
                  <span>• </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceSidebar;
