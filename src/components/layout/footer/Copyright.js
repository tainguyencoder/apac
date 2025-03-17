import Link from "next/link";

const Copyright = () => {
  return (
    <div className="copyright">
      <div className="row align-items-center">
        <div className="col-xl-6 col-lg-6 col-md-6 col-12">
          <div className="copyright__left">
            <p>
              © 2024 <Link href="/">Tech Connect APAC</Link>. Design & Develop with ❤️{' '}by <Link href="/">APAC </Link>
            </p>
          </div>
        </div>
        <div className="col-xl-6 col-lg-6 col-md-6 col-12">
          <div className="copyright__right">
            <ul>
              <li>
                <Link href="/contact">Privacy & Policy ||</Link>
              </li>{" "}
              <li>
                <Link href="/contact">Terms & Conditions</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Copyright;
