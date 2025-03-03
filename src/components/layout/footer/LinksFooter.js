import Link from "next/link";

const LinksFooter = ({ style }) => {
  const items = [
    {
      name: "About Us",
      path: "/about",
    },
    {
      name: "Our Services",
      path: "/services",
    },
    {
      name: "Our Clients",
      path: "/clients",
    },
    {
      name: "Job Openings",
      path: "/job-openings",
    },
    {
      name: "Blogs",
      path: "/blogs",
    },
  ];
  return (
    <div
      className={`col-xl-2 ${
        !style ? "col-lg-6" : "col-lg-2"
      } col-md-6 col-sm-6`}
      data-aos="fade-up"
      data-aos-duration="2500"
    >
      <div className="footer__widget footer__quick">
        <div className="footer__menu__title">
          <h6>QUICK LINKS :</h6>
        </div>
        <div className="footer__menu">
          <ul>
            {items?.map(({ name, path }, idx) => (
              <li key={idx}>
                <Link href={path}>{name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LinksFooter;
