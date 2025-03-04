"use client";
import projectImage8 from "@/assets/img/project/project__8.png";
import projectImage9 from "@/assets/img/project/project__9.png";
import projectImage10 from "@/assets/img/project/project__10.png";

import { Swiper, SwiperSlide } from "swiper/react";
import ProjectCard3 from "@/components/shared/cards/ProjectCard3";
import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import { Navigation } from "swiper/modules";

import projectImage15 from "@/assets/img/project/project__15.png";
import projectImage16 from "@/assets/img/project/project__16.png";
import projectImage17 from "@/assets/img/project/project__17.png";
import projectImage18 from "@/assets/img/project/project__18.png";
import projectImage19 from "@/assets/img/project/project__19.png";
import projectImage20 from "@/assets/img/project/project__20.png";
import projectImage21 from "@/assets/img/project/project__21.png";
import projectImage22 from "@/assets/img/project/project__22.png";
import projectImage23 from "@/assets/img/project/project__23.png";
import projectImage24 from "@/assets/img/project/project__24.png";
import projectImage25 from "@/assets/img/project/project__25.png";
import projectImage26 from "@/assets/img/project/project__26.png";
import projectImage27 from "@/assets/img/project/project__27.png";
import projectImage28 from "@/assets/img/project/project__28.png";
import projectImage29 from "@/assets/img/project/project__29.png";

const Projects3 = () => {
  const projects = [
    {
      id: 1,
      title: "Exigo Group",
      img: projectImage15,
    },
    {
      id: 2,
      title: "KPMG",
      img: projectImage16,
    },
    {
      id: 3,
      title: "Deloitte",
      img: projectImage17,
    },
    {
      id: 4,
      title: "Quantas",
      img: projectImage18,
    },
    {
      id: 5,
      title: "REA Group",
      img: projectImage19,
    },
    {
      id: 6,
      title: "Nestle",
      img: projectImage20,
    },
    {
      id: 7,
      title: "URC",
      img: projectImage21,
    },
    {
      id: 8,
      title: "Novartis",
      img: projectImage22,
    },
    {
      id: 9,
      title: "Krungthai AXA Life Insurance PCL",
      img: projectImage23,
    },
    {
      id: 10,
      title: "Sanofi",
      img: projectImage24,
    },
    {
      id: 11,
      title: "CLP Holdings",
      img: projectImage25,
    },
    {
      id: 12,
      title: "Lenovo Group",
      img: projectImage26,
    },
    {
      id: 13,
      title: "Roma Group",
      img: projectImage27,
    },
    {
      id: 14,
      title: "Manulife",
      img: projectImage28,
    },
    {
      id: 15,
      title: "Finhay",
      img: projectImage29,
    },
  ];
  return (
    <div className="project__3 sp_bottom_140" id="project__area">
      <div className="container">
        <div
          className="row position-relative"
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          <Swiper
            className="project__slider__active position-static"
            grabCursor={true}
            navigation={true}
            modules={[Navigation]}
            slidesPerView={1}
            breakpoints={{
              575: {
                slidesPerView: 1,
              },

              768: {
                slidesPerView: 2,
              },

              992: {
                slidesPerView: 3,
              },
              1200: {
                slidesPerView: 4,
              },
              1500: {
                slidesPerView: 5,
              },
            }}
          >
            {projects?.map((project, idx) => (
              <SwiperSlide
                className="col-xl-4 col-lg-4 col-md-6 col-sm-12 "
                key={idx}
              >
                <ProjectCard3 project={project} />
              </SwiperSlide>
            ))}
            {/* <div className="slider__control__top__wrap ">
              <div className="slider__controls__wrap slider__controls__pagination slider__controls__arrows slider__controls__arrows--3">
                <div className="swiper-button-next arrow-btn">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.4297 5.92999L20.4997 12L14.4297 18.07"
                      stroke="#fff"
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M3.5 12H20.33"
                      stroke="#fff"
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="swiper-button-prev arrow-btn">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.57031 5.92999L3.50031 12L9.57031 18.07"
                      stroke="#fff"
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M20.5 12H3.67"
                      stroke="#fff"
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div> */}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Projects3;
