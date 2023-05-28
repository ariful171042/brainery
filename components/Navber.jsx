import Link from "next/link";
import Button from "./Button";
import { useSession } from "next-auth/react";
import { motion } from "framer-motion";
import { getTransition, shutterDown } from "@/utils/motion";

const Navber = () => {
  const { data: sesstion } = useSession();
  return (
    <div className=" h-20 bg-black text-gray-400 flex items-center overflow-hidden ">
      <div className="wrapper flex justify-between items-center">
        <motion.div
          variants={shutterDown()}
          initial="from"
          animate="to"
          transition={getTransition()}
        >
          <Link href="/" className="text-white font-semibold">
            Brainery
          </Link>
        </motion.div>

        <div className="flex gap-5">
          <Link href="/" className="hover:text-white transition-colors">
            Home
          </Link>
          <Link href="/courses" className="hover:text-white transition-colors">
            Courses
          </Link>

          {sesstion && (
            <Link href="/orders" className="hover:text-white transition-colors">
              Orders
            </Link>
          )}
          <Link href="/" className="hover:text-white transition-colors">
            Contact
          </Link>
          <Link href="/" className="hover:text-white transition-colors">
            About
          </Link>
        </div>

        <div className="">
          {!sesstion ? (
            <Button
              href="/users/login"
              placeholder="Sign in"
              color="secoundary"
              size="default"
            />
          ) : (
            <Button
              href="/users/profile"
              placeholder="Profile"
              color="secondary"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Navber;
