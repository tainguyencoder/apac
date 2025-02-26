import Image from 'next/image';
import aboutImage1 from '@/assets/img/about/about__1.png';
import aboutSmallImage1 from '@/assets/img/about/about__small__img__1.png';
import aboutSmallImage2 from '@/assets/img/about/about__small__img__2.png';
import ButtonPrimary from '@/components/shared/buttons/ButtonPrimary';

const About = () => {
  return (
    <div
      className="about position-relative sp_bottom_140"
      id="about__mission__area"
      style={{ marginTop: '20px' }}
    >
      <div className="container">
        <div className="row">
          <div
            className="col-xl-7 col-lg-7 col-md-12 col-sm-12"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <div className="about__img__wrapper position-relative" data-tilt>
              <Image className="about__img__1" src={aboutImage1} alt="" />
              <div className="about__number">
                <div className="about__number__inner about__number__position">
                  <span>10</span>
                  <p>Years Experience</p>
                  <div className="about__number__icon">
                    <a href="#">
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
                    </a>
                  </div>
                </div>
              </div>
              <div className="section__strock__line__animation">
                <Image
                  className="ssla__animation ssl__img__1"
                  src={aboutSmallImage1}
                  alt=""
                />
                <Image
                  className="ssla__animation ssl__img__2"
                  src={aboutSmallImage2}
                  alt=""
                />
              </div>
            </div>
          </div>
          <div
            className="col-xl-5 col-lg-5 col-md-12 col-sm-12"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <div className="about__inner">
              <div className="section__title section__title--2 sp_bottom_30">
                <div className="section__title__heading">
                  <h3>Who We Are</h3>
                </div>
                <div className="section__title__text">
                  <p>
                  Tech Connect APAC is a premier recruitment and talent acquisition firm that
                    partners with companies across various industries to secure
                    top-level executives, managers, and specialists. Our
                    dedicated team of consultants is driven by the belief that
                    the right talent is a game-changer. We understand the unique
                    challenges businesses face in today’s fast-paced
                    environment, and we bring the right people to help drive
                    change and innovation.
                  </p>
                </div>
              </div>
              <div className="about__button">
                <ButtonPrimary text={'LEARN MORE ABOUT'} path={'/about'} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
