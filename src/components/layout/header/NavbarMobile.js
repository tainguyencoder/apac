import Link from "next/link";
import ItemMobile from "./ItemMobile";
import { useHeaderContex } from "@/providers/HeaderContex";

const NavbarMobile = () => {
  const { isOnepage, style, headerType, isCollection, home } =
    useHeaderContex();
  const mobileItems = [
    {
      name: "About Us",
      toggler: false,
      path: "/about",
      dropdown: null,
    },
    {
      name: "Our Services",
      toggler: false,
      path: "/services",
      dropdown: null,
    },
    {
      name: "Our Clients",
      toggler: false,
      path: "/clients",
      dropdown: null,
    },
    {
      name: "Job Openings",
      toggler: false,
      path: "/job-openings",
      dropdown: null,
    },
    {
      name: "Blogs",
      toggler: false,
      path: "/blogs",
      dropdown: null,
    },
    {
      name: "Contact Us",
      toggler: false,
      path: "/contact",
      dropdown: null,
    },
  ];
  return (
    <nav className="offcanvas__menu">
      <ul className="offcanvas__menu_ul">
        {mobileItems?.map((item, idx) =>
          !item?.name ? "" : <ItemMobile key={idx} item={item} />
        )}
      </ul>
    </nav>
  );
};

export default NavbarMobile;
