import Image from 'next/image';
import aboutImage4 from '@/assets/img/about/about__5.webp';
import ButtonPrimary from '@/components/shared/buttons/ButtonPrimary';
import Link from 'next/link';

const About3 = ({ type }) => {
  return (
    <div
      className={`about ${
        type === 2 ? '' : 'about__grident__bg '
      } about__white__bg position-relative sp_bottom_120 sp_top_160`}
      id="about__mission__area"
    >
      <div className="container">
        <div className="row">
          <div
            className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <div className="about__inner about__inner--2">
              <div
                className={`section__title  section__title--2 ${
                  type === 2 ? '' : 'section__title--3 '
                }`}
              >
                <div className="section__title__button">
                  <span className={type === 2 ? `text__gradient` : ''}>
                    About
                  </span>
                </div>
                <div className="section__title__heading">
                  <h3>
                    Tech Connect APAC is a top IT staffing agency in Southeast
                    Asia, connecting businesses with elite talent through 5+
                    years of expertise.
                  </h3>
                </div>
              </div>

              <div
                className={`about__vision__wrapper ${
                  type === 2 ? 'sp_top_60' : 'about__vision__wrapper--3'
                }`}
              >
                <div className="about__number">
                  <div
                    className={`about__number__inner ${
                      type === 2 ? 'bg__primary' : ' '
                    }`}
                  >
                    <span>10+</span>
                    <p>Years Experience</p>
                    <div className="about__number__icon">
                      <Link href="/about">
                        {' '}
                        <svg
                          width="34"
                          height="34"
                          viewBox="0 0 34 34"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M14.4258 10.9897L23.0101 10.9897L23.0101 19.574"
                            stroke="#0A0624"
                            strokeWidth="1.5"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                          <path
                            d="M10.9902 23.0107L22.8908 11.1101"
                            stroke="#0A0624"
                            strokeWidth="1.5"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="about__text__wrapper">
                  <div className="project__details__challenges__heading">
                    <h6> Mission & Vision</h6>
                  </div>
                  <div className="project__details__challenges__heading">
                    <p>
                      To be the global leader in headhunting solutions,
                      recognized for our ability to connect exceptional talent
                      with forward-thinking organizations, driving growth,
                      innovation, and success for both businesses and
                      individuals.
                    </p>
                    <p>
                      Our mission is to provide strategic recruitment solutions,
                      helping companies attract top talent that aligns with
                      their skills, culture, and long-term goals. Through our
                      expertise, network, and commitment to confidentiality, we
                      build lasting partnerships that drive success.
                    </p>
                  </div>
                  <div className="about__button">
                    <ButtonPrimary
                      text="LEARN MORE ABOUT"
                      path="/about"
                      button={type === 2 ? '' : 'white'}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12"
            data-aos="fade-up"
            data-aos-duration="1800"
          >
            <div className="about__img__3" data-tilt>
              <Image src={aboutImage4} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About3;
