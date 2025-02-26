'use client';

import BlogSidebar from '@/components/shared/sidebars/BlogSidebar';
import useSearch from '@/hooks/useSearch';
import getAllServices from '@/libs/getAllServices';
import CommonContext from '@/providers/CommonContext';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import serviceDetailsImage1 from '@/assets/img/service/service__details__1.png';
import serviceDetailsImage2 from '@/assets/img/service/service__details__2.png';
const ServiceDetailsPrimary = () => {
  const { id: currentId } = useParams();
  const services = getAllServices();
  const currentService = services?.find(({ id }) => id === parseInt(currentId));

  console.log(currentService);
  const { title, desc, detailsImg } = currentService;
  const {
    searchString,
    searchedItems,
    previousSearchedItems,
    isShowSearch,
    handleSearch,
    handleSearchString,
    startSearch,
    closeSearch,
    isShowQuickSearchResult,
    setIsShowQuickSearchResult,
  } = useSearch(services, '/services');
  return (
    <div className="service__details sp_top_140 sp_bottom_160">
      <div className="container">
        <div className="row">
          <div className="col-xl-4 col-lg-4 col-md-12 col-12">
            <CommonContext
              value={{
                searchedItems,
                handleSearch,
                handleSearchString,
                startSearch,
                closeSearch,
                isShowSearch,
                sidebar: 'service',
                isShowQuickSearchResult,
                setIsShowQuickSearchResult,
              }}
            >
              <BlogSidebar sidebar={'service'} />
            </CommonContext>
          </div>
          <div className="col-xl-8 col-lg-8 col-md-12 col-12">
            <div className="service__details__wraper">
              <div
                className="service__details__img"
                data-aos="fade-up"
                data-aos-duration="1500"
              >
                <Image src={detailsImg} alt="" placeholder="blur" />
              </div>
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
                <p>{currentService.intro}</p>
                <div>
                  <ul style={{ paddingLeft: '20px', listStyleType: 'disc' }}>
                    {currentService.position &&
                      currentService.position.length > 0 && (
                        <div>
                          <ul
                            style={{
                              paddingLeft: '20px',
                              listStyleType: 'disc',
                            }}
                          >
                            {currentService.position.map((item, index) => (
                              <li
                                key={index}
                                style={{
                                  display: 'block',
                                  marginBottom: '5px',
                                }}
                              >
                                <span
                                  style={{ color: 'black', fontSize: '16px' }}
                                >
                                  •{' '}
                                </span>
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                  </ul>
                </div>
              </div>
              <div
                className="service__details__planning"
                data-aos="fade-up"
                data-aos-duration="1500"
              >
                <div className="row">
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                    <div className="service__details__planning__img">
                      <Image
                        src={serviceDetailsImage2}
                        alt=""
                        placeholder="blur"
                      />
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                    <div className="service__details__planning__inner">
                      <div className="service__details__planning__heading">
                        <h6>What We Do:</h6>
                      </div>
                      <div className="service__details__planning__text">
                      {currentService.wwd && currentService.wwd.length > 0 && (

                        <div>
                          <ul
                            style={{
                              paddingLeft: '20px',
                              listStyleType: 'disc',
                            }}
                          >
                            {currentService.wwd.map((item, index) => (
                              <li
                                key={index}
                                style={{
                                  display: 'block',
                                  marginBottom: '5px',
                                }}
                              >
                                <span
                                  style={{ color: 'black', fontSize: '16px' }}
                                >
                                  •{' '}
                                </span>
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailsPrimary;
