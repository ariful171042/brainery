import Link from "next/link";
import Button from "./Button";

const Navber = () => {
  return (
    <div className=" h-20 bg-black text-gray-400 flex items-center ">
      <div className="wrapper flex justify-between">
        <Link href="/" className="text-white font-semibold">
          Brainery
        </Link>

        <div className="flex gap-5">
          <Link href="/" className="hover:text-white transition-colors">
            Home
          </Link>
          <Link href="/courses" className="hover:text-white transition-colors">
            Courses
          </Link>
          <Link href="/" className="hover:text-white transition-colors">
            Contact
          </Link>
          <Link href="/" className="hover:text-white transition-colors">
            About
          </Link>
        </div>

        <div className="">
          <Button
            href="/users/login"
            placeholder="Sign in"
            color="secoundary"
            size="default"
          />
        </div>
      </div>
    </div>
  );
};

export default Navber;
