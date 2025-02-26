'use client';
import Image from 'next/image';
import contactImage from '@/assets/img/contact/contact.png';
import { useState } from 'react';

const ContactPrimary = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'Subject:',
    message: 'write a message....',
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      const response = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setStatus('Thanks! Your message has been sent.');
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: 'Subject:',
          message: 'write a message....',
        });
      } else {
        setStatus('Failed to send email.');
      }
    } catch (error) {
      setStatus('Failed to send email.');
    }
  };

  return (
    <div className="contact sp_top_140 sp_bottom_80">
      <div className="container">
        <div className="row">
          <div
            className="col-xl-12"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <div className="section__title text-center sp_bottom_80">
              <div className="section__title__button">
                <span className="text__gradient ">Contact</span>
              </div>
              <div className="section__title__heading contact__heading">
                <h3>Consulting support is just a Call or email away.</h3>
              </div>
            </div>
          </div>
          <div
            className="col-xl-7 col-lg-7 col-md-12 col-sm-12"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <div className="contact__input__wrapper contact__grident__bg">
              <form
                id="contact-form"
                className="contact-form"
                onSubmit={handleSubmit}
              >
                <div className="row">
                  <div className="col-xl-12">
                    <div className="contact__input">
                      <input
                        className="contact__common__input"
                        type="text"
                        name="name"
                        id="con_name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-xl-6">
                    <div className="contact__input">
                      <input
                        className="contact__common__input"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        id="con_email"
                        placeholder="Email"
                      />
                    </div>
                  </div>
                  <div className="col-xl-6">
                    <div className="contact__input">
                      <input
                        className="contact__common__input"
                        type="text"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Phone"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-xl-12">
                    <select
                      className="contact__common__input"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      id="subject"
                    >
                      <option value="volvo">Subject:</option>
                      <option value="saab">Saab</option>
                      <option value="mercedes">Mercedes</option>
                      <option value="audi">Audi</option>
                    </select>
                  </div>
                  <div className="col-xl-12">
                    <textarea
                      className="contact__common__input"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      id="con_message"
                      cols="30"
                      rows="10"
                    />
                  </div>
                  <div className="col-xl-12">
                    <div className="contact__button">
                      <button
                        type="submit"
                        value="submit"
                        className="default__button"
                        name="submit"
                      >
                        SEND MESSAGE
                      </button>
                      {status ? <p className="form-messege">{status}</p> : ''}
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>

          <div
            className="col-xl-5 col-lg-5 col-md-12 col-sm-12 contact__info__right"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <div className="contact__info">
              <div
                className="contact__single__item"
                data-aos="fade-up"
                data-aos-duration="1500"
              >
                <div className="contact__icon">
                  <span>
                    <svg
                      width="25"
                      height="25"
                      viewBox="0 0 25 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M19.9763 3.09698C17.9792 1.09986 15.3239 0 12.4995 0C9.67521 0 7.01983 1.09986 5.02276 3.09698C3.02564 5.09415 1.92578 7.74943 1.92578 10.5737C1.92578 16.2872 7.32804 21.0394 10.2303 23.5924C10.6337 23.9472 10.982 24.2536 11.2594 24.5128C11.6071 24.8375 12.0533 25 12.4995 25C12.9457 25 13.3919 24.8375 13.7396 24.5128C14.0171 24.2536 14.3654 23.9472 14.7687 23.5924C17.671 21.0393 23.0732 16.2872 23.0732 10.5737C23.0732 7.74943 21.9734 5.09415 19.9763 3.09698ZM13.8014 22.4929C13.3892 22.8555 13.0333 23.1686 12.7399 23.4427C12.6051 23.5685 12.3939 23.5686 12.2591 23.4427C11.9656 23.1685 11.6097 22.8554 11.1975 22.4929C8.46901 20.0927 3.39014 15.625 3.39014 10.5738C3.39014 5.55089 7.47652 1.4645 12.4994 1.4645C17.5223 1.4645 21.6087 5.55089 21.6087 10.5738C21.6087 15.625 16.5299 20.0927 13.8014 22.4929Z"
                        fill="url(#paint0_linear_1501_3759)"
                      />
                      <path
                        d="M12.4996 5.51465C9.93018 5.51465 7.83984 7.60494 7.83984 10.1743C7.83984 12.7437 9.93018 14.834 12.4996 14.834C15.069 14.834 17.1592 12.7437 17.1592 10.1743C17.1592 7.60494 15.069 5.51465 12.4996 5.51465ZM12.4996 13.3695C10.7377 13.3695 9.3043 11.9361 9.3043 10.1743C9.3043 8.41246 10.7377 6.97906 12.4996 6.97906C14.2614 6.97906 15.6948 8.41246 15.6948 10.1743C15.6948 11.9361 14.2614 13.3695 12.4996 13.3695Z"
                        fill="url(#paint1_linear_1501_3759)"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_1501_3759"
                          x1="1.92578"
                          y1="14.6551"
                          x2="23.0732"
                          y2="14.6551"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#00229E" />
                          <stop offset="0.479167" stopColor="#6E1299" />
                          <stop offset="1" stopColor="#FE0094" />
                        </linearGradient>
                        <linearGradient
                          id="paint1_linear_1501_3759"
                          x1="7.83984"
                          y1="10.9777"
                          x2="17.1592"
                          y2="10.9777"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#00229E" />
                          <stop offset="0.479167" stopColor="#6E1299" />
                          <stop offset="1" stopColor="#FE0094" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </span>
                </div>
                <div className="contact__text">
                  <h6>Location:</h6>
                  <p>Level 19, Darling Park Tower 2,</p>
                  <p>201 Sussex Street, Sydney, AU</p>
                </div>
              </div>
              {/* hongkong */}
              <div
                className="contact__single__item"
                data-aos="fade-up"
                data-aos-duration="1500"
              >
                <div className="contact__icon">
                  <span>
                    <svg
                      width="25"
                      height="25"
                      viewBox="0 0 25 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M19.9763 3.09698C17.9792 1.09986 15.3239 0 12.4995 0C9.67521 0 7.01983 1.09986 5.02276 3.09698C3.02564 5.09415 1.92578 7.74943 1.92578 10.5737C1.92578 16.2872 7.32804 21.0394 10.2303 23.5924C10.6337 23.9472 10.982 24.2536 11.2594 24.5128C11.6071 24.8375 12.0533 25 12.4995 25C12.9457 25 13.3919 24.8375 13.7396 24.5128C14.0171 24.2536 14.3654 23.9472 14.7687 23.5924C17.671 21.0393 23.0732 16.2872 23.0732 10.5737C23.0732 7.74943 21.9734 5.09415 19.9763 3.09698ZM13.8014 22.4929C13.3892 22.8555 13.0333 23.1686 12.7399 23.4427C12.6051 23.5685 12.3939 23.5686 12.2591 23.4427C11.9656 23.1685 11.6097 22.8554 11.1975 22.4929C8.46901 20.0927 3.39014 15.625 3.39014 10.5738C3.39014 5.55089 7.47652 1.4645 12.4994 1.4645C17.5223 1.4645 21.6087 5.55089 21.6087 10.5738C21.6087 15.625 16.5299 20.0927 13.8014 22.4929Z"
                        fill="url(#paint0_linear_1501_3759)"
                      />
                      <path
                        d="M12.4996 5.51465C9.93018 5.51465 7.83984 7.60494 7.83984 10.1743C7.83984 12.7437 9.93018 14.834 12.4996 14.834C15.069 14.834 17.1592 12.7437 17.1592 10.1743C17.1592 7.60494 15.069 5.51465 12.4996 5.51465ZM12.4996 13.3695C10.7377 13.3695 9.3043 11.9361 9.3043 10.1743C9.3043 8.41246 10.7377 6.97906 12.4996 6.97906C14.2614 6.97906 15.6948 8.41246 15.6948 10.1743C15.6948 11.9361 14.2614 13.3695 12.4996 13.3695Z"
                        fill="url(#paint1_linear_1501_3759)"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_1501_3759"
                          x1="1.92578"
                          y1="14.6551"
                          x2="23.0732"
                          y2="14.6551"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#00229E" />
                          <stop offset="0.479167" stopColor="#6E1299" />
                          <stop offset="1" stopColor="#FE0094" />
                        </linearGradient>
                        <linearGradient
                          id="paint1_linear_1501_3759"
                          x1="7.83984"
                          y1="10.9777"
                          x2="17.1592"
                          y2="10.9777"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#00229E" />
                          <stop offset="0.479167" stopColor="#6E1299" />
                          <stop offset="1" stopColor="#FE0094" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </span>
                </div>
                <div className="contact__text">
                  <h6>Location:</h6>
                  <p>Unit 6E, Derrick Industrial</p>
                  <p>49 Wong Chuk Hang Road, HK</p>
                </div>
              </div>
              {/* thailand */}
              <div
                className="contact__single__item"
                data-aos="fade-up"
                data-aos-duration="1500"
              >
                <div className="contact__icon">
                  <span>
                    <svg
                      width="25"
                      height="25"
                      viewBox="0 0 25 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M19.9763 3.09698C17.9792 1.09986 15.3239 0 12.4995 0C9.67521 0 7.01983 1.09986 5.02276 3.09698C3.02564 5.09415 1.92578 7.74943 1.92578 10.5737C1.92578 16.2872 7.32804 21.0394 10.2303 23.5924C10.6337 23.9472 10.982 24.2536 11.2594 24.5128C11.6071 24.8375 12.0533 25 12.4995 25C12.9457 25 13.3919 24.8375 13.7396 24.5128C14.0171 24.2536 14.3654 23.9472 14.7687 23.5924C17.671 21.0393 23.0732 16.2872 23.0732 10.5737C23.0732 7.74943 21.9734 5.09415 19.9763 3.09698ZM13.8014 22.4929C13.3892 22.8555 13.0333 23.1686 12.7399 23.4427C12.6051 23.5685 12.3939 23.5686 12.2591 23.4427C11.9656 23.1685 11.6097 22.8554 11.1975 22.4929C8.46901 20.0927 3.39014 15.625 3.39014 10.5738C3.39014 5.55089 7.47652 1.4645 12.4994 1.4645C17.5223 1.4645 21.6087 5.55089 21.6087 10.5738C21.6087 15.625 16.5299 20.0927 13.8014 22.4929Z"
                        fill="url(#paint0_linear_1501_3759)"
                      />
                      <path
                        d="M12.4996 5.51465C9.93018 5.51465 7.83984 7.60494 7.83984 10.1743C7.83984 12.7437 9.93018 14.834 12.4996 14.834C15.069 14.834 17.1592 12.7437 17.1592 10.1743C17.1592 7.60494 15.069 5.51465 12.4996 5.51465ZM12.4996 13.3695C10.7377 13.3695 9.3043 11.9361 9.3043 10.1743C9.3043 8.41246 10.7377 6.97906 12.4996 6.97906C14.2614 6.97906 15.6948 8.41246 15.6948 10.1743C15.6948 11.9361 14.2614 13.3695 12.4996 13.3695Z"
                        fill="url(#paint1_linear_1501_3759)"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_1501_3759"
                          x1="1.92578"
                          y1="14.6551"
                          x2="23.0732"
                          y2="14.6551"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#00229E" />
                          <stop offset="0.479167" stopColor="#6E1299" />
                          <stop offset="1" stopColor="#FE0094" />
                        </linearGradient>
                        <linearGradient
                          id="paint1_linear_1501_3759"
                          x1="7.83984"
                          y1="10.9777"
                          x2="17.1592"
                          y2="10.9777"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#00229E" />
                          <stop offset="0.479167" stopColor="#6E1299" />
                          <stop offset="1" stopColor="#FE0094" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </span>
                </div>
                <div className="contact__text">
                  <h6>Location:</h6>
                  <p>Athenee Tower, 23rd Floor,</p>
                  <p>63 Wireless Road, Lumpini</p>
                  <p>Pathumwan, Bangkok, Thailand</p>
                </div>
              </div>
              {/* singapore */}
              <div
                className="contact__single__item"
                data-aos="fade-up"
                data-aos-duration="1500"
              >
                <div className="contact__icon">
                  <span>
                    <svg
                      width="25"
                      height="25"
                      viewBox="0 0 25 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M19.9763 3.09698C17.9792 1.09986 15.3239 0 12.4995 0C9.67521 0 7.01983 1.09986 5.02276 3.09698C3.02564 5.09415 1.92578 7.74943 1.92578 10.5737C1.92578 16.2872 7.32804 21.0394 10.2303 23.5924C10.6337 23.9472 10.982 24.2536 11.2594 24.5128C11.6071 24.8375 12.0533 25 12.4995 25C12.9457 25 13.3919 24.8375 13.7396 24.5128C14.0171 24.2536 14.3654 23.9472 14.7687 23.5924C17.671 21.0393 23.0732 16.2872 23.0732 10.5737C23.0732 7.74943 21.9734 5.09415 19.9763 3.09698ZM13.8014 22.4929C13.3892 22.8555 13.0333 23.1686 12.7399 23.4427C12.6051 23.5685 12.3939 23.5686 12.2591 23.4427C11.9656 23.1685 11.6097 22.8554 11.1975 22.4929C8.46901 20.0927 3.39014 15.625 3.39014 10.5738C3.39014 5.55089 7.47652 1.4645 12.4994 1.4645C17.5223 1.4645 21.6087 5.55089 21.6087 10.5738C21.6087 15.625 16.5299 20.0927 13.8014 22.4929Z"
                        fill="url(#paint0_linear_1501_3759)"
                      />
                      <path
                        d="M12.4996 5.51465C9.93018 5.51465 7.83984 7.60494 7.83984 10.1743C7.83984 12.7437 9.93018 14.834 12.4996 14.834C15.069 14.834 17.1592 12.7437 17.1592 10.1743C17.1592 7.60494 15.069 5.51465 12.4996 5.51465ZM12.4996 13.3695C10.7377 13.3695 9.3043 11.9361 9.3043 10.1743C9.3043 8.41246 10.7377 6.97906 12.4996 6.97906C14.2614 6.97906 15.6948 8.41246 15.6948 10.1743C15.6948 11.9361 14.2614 13.3695 12.4996 13.3695Z"
                        fill="url(#paint1_linear_1501_3759)"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_1501_3759"
                          x1="1.92578"
                          y1="14.6551"
                          x2="23.0732"
                          y2="14.6551"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#00229E" />
                          <stop offset="0.479167" stopColor="#6E1299" />
                          <stop offset="1" stopColor="#FE0094" />
                        </linearGradient>
                        <linearGradient
                          id="paint1_linear_1501_3759"
                          x1="7.83984"
                          y1="10.9777"
                          x2="17.1592"
                          y2="10.9777"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#00229E" />
                          <stop offset="0.479167" stopColor="#6E1299" />
                          <stop offset="1" stopColor="#FE0094" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </span>
                </div>
                <div className="contact__text">
                  <h6>Location:</h6>
                  <p>The Metropolis Tower 2,</p>
                  <p>11 North Buona Vista Drive, SG</p>
                </div>
              </div>

              {/* vn */}
              <div
                className="contact__single__item"
                data-aos="fade-up"
                data-aos-duration="1500"
              >
                <div className="contact__icon">
                  <span>
                    <svg
                      width="25"
                      height="25"
                      viewBox="0 0 25 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M19.9763 3.09698C17.9792 1.09986 15.3239 0 12.4995 0C9.67521 0 7.01983 1.09986 5.02276 3.09698C3.02564 5.09415 1.92578 7.74943 1.92578 10.5737C1.92578 16.2872 7.32804 21.0394 10.2303 23.5924C10.6337 23.9472 10.982 24.2536 11.2594 24.5128C11.6071 24.8375 12.0533 25 12.4995 25C12.9457 25 13.3919 24.8375 13.7396 24.5128C14.0171 24.2536 14.3654 23.9472 14.7687 23.5924C17.671 21.0393 23.0732 16.2872 23.0732 10.5737C23.0732 7.74943 21.9734 5.09415 19.9763 3.09698ZM13.8014 22.4929C13.3892 22.8555 13.0333 23.1686 12.7399 23.4427C12.6051 23.5685 12.3939 23.5686 12.2591 23.4427C11.9656 23.1685 11.6097 22.8554 11.1975 22.4929C8.46901 20.0927 3.39014 15.625 3.39014 10.5738C3.39014 5.55089 7.47652 1.4645 12.4994 1.4645C17.5223 1.4645 21.6087 5.55089 21.6087 10.5738C21.6087 15.625 16.5299 20.0927 13.8014 22.4929Z"
                        fill="url(#paint0_linear_1501_3759)"
                      />
                      <path
                        d="M12.4996 5.51465C9.93018 5.51465 7.83984 7.60494 7.83984 10.1743C7.83984 12.7437 9.93018 14.834 12.4996 14.834C15.069 14.834 17.1592 12.7437 17.1592 10.1743C17.1592 7.60494 15.069 5.51465 12.4996 5.51465ZM12.4996 13.3695C10.7377 13.3695 9.3043 11.9361 9.3043 10.1743C9.3043 8.41246 10.7377 6.97906 12.4996 6.97906C14.2614 6.97906 15.6948 8.41246 15.6948 10.1743C15.6948 11.9361 14.2614 13.3695 12.4996 13.3695Z"
                        fill="url(#paint1_linear_1501_3759)"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_1501_3759"
                          x1="1.92578"
                          y1="14.6551"
                          x2="23.0732"
                          y2="14.6551"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#00229E" />
                          <stop offset="0.479167" stopColor="#6E1299" />
                          <stop offset="1" stopColor="#FE0094" />
                        </linearGradient>
                        <linearGradient
                          id="paint1_linear_1501_3759"
                          x1="7.83984"
                          y1="10.9777"
                          x2="17.1592"
                          y2="10.9777"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#00229E" />
                          <stop offset="0.479167" stopColor="#6E1299" />
                          <stop offset="1" stopColor="#FE0094" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </span>
                </div>
                <div className="contact__text">
                  <h6>Location:</h6>
                  <p>Vietnam - 45 Ly Tu Trong St</p>
                  <p>Ben Nghe ward, Dist 1, HCMC</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPrimary;
