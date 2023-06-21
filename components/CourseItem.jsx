import { currencyConverter } from "@/utils/currencyConverter";
import Image from "next/image";
import { AiOutlineStar } from "react-icons/ai";
import Button from "./Button";
import { motion } from "framer-motion";
import { getTransition, shutterUp } from "@/utils/motion";

const CourseItem = ({ course }) => {
  return (
    <motion.div
      variants={shutterUp()}
      initial="from"
      whileInView="to"
      transition={getTransition(0, 1)}
      className="w-full lg:w-[30rem] shadow-md rounded-md  overflow-hidden"
    >
      <div className="w-full h-[25rem] lg:h-[20rem] overflow-hidden">
        <Image
          priority
          src={course.cover}
          alt={course.title}
          width={640}
          height={360}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-5 space-y-2">
        <h3 className="text-3xl text-sky-400 font-medium  h-20">
          {course.title}
        </h3>
        <p className="flex justify-between text-gray-500">
          <span>
            by{" "}
            <span className="text-black font-semibold">
              {course.instructor}
            </span>
          </span>
          <span>
            Durations:{" "}
            <span className="text-black font-semibold">{course.duration}</span>
          </span>
        </p>
        <p className="flex justify-between text-gray-500">
          <span>Enrolled students:{course.students}</span>
          <span className="flex items-center gap-1">
            {" "}
            <AiOutlineStar className="text-black" />{" "}
            <span className="text-black font-semibold">{course.rating}</span>
          </span>
        </p>
        <p className="text-gray-500 h-22">
          {course.description.substring(0, 100)}...
        </p>
        <div className="flex justify-between items-center">
          <p className="text-2xl text-sky-400 font-semibold">
            {currencyConverter(course.price)}
          </p>
          <Button href={`courses/${course.id}`} placeholder="View Detals" />
        </div>
      </div>
    </motion.div>
  );
};

export default CourseItem;
