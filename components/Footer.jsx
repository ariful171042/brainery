import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-sky-200">
      <footer className="footer container mx-auto p-10  text-base-content">
        <div>
          <svg
            width="50"
            height="50"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fillRule="evenodd"
            clip-rule="evenodd"
            className="fill-current text-sky-500"
          >
            <path d="M20 12.875v5.068c0 2.754-5.789 4.057-9 4.057-3.052 0-9-1.392-9-4.057v-6.294l9 4.863 9-3.637zm-8.083-10.875l-12.917 5.75 12 6.5 11-4.417v7.167h2v-8.25l-12.083-6.75zm13.083 20h-4c.578-1 1-2.5 1-4h2c0 1.516.391 2.859 1 4z" />
          </svg>
          <p>
            Brainery Ltd.
            <br />
            Providing reliable tech since 2022
          </p>
        </div>
        <div>
          <span className="footer-title">Services</span>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <Link href={"/about"} className="link link-hover">
            About us
          </Link>
          <Link href={"/contact"} className="link link-hover">
            Contact
          </Link>
          <Link href={"/courses"} className="link link-hover">
            Courses
          </Link>
          <Link href={"/orders"} className="link link-hover">
            Orders
          </Link>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
