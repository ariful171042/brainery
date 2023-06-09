import { getCourse } from "@/prisma/courses";
import { currencyConverter } from "@/utils/currencyConverter";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

const CourseDetals = ({ course }) => {
  const { data: session } = useSession();
  const router = useRouter();
  const handleEnroll = () => {
    if (session) {
      router.push(`/checkout/${course.id}`);
    } else {
      router.push(`/users/login?destination=/checkout/${course.id}`);
    }
  };
  return (
    <div className="wrapper py-10 min-h-screen">
      <div
        style={{ backgroundImage: `url(${course.cover})` }}
        className="w-full h-[32rem] bg-cover bg-center "
        data-aos="fade-up"
      ></div>

      <div className="mt-10 grid lg:grid-cols-2 lg:gap-10 space-y-2 lg:space-y-0 ">
        <div className="left space-y-2">
          <h2 data-aos="fade-up" className="text-4xl text-sky-400">
            {course.title}
          </h2>
          <p data-aos="fade-up">
            <span className="font-semibold">Instructor: </span>
            {course.instructor}
          </p>
          <p data-aos="fade-up">
            <span className="font-semibold">Description: </span>
            {course.description}
          </p>
          <p data-aos="fade-up">
            <span className="font-semibold">Entrolled Students: </span>
            {course.students}
          </p>
        </div>
        <div data-aos="fade-up" className="right space-y-2">
          <p>
            <span className="font-semibold">Course Duration: </span>
            {course.duration}
          </p>
          <p data-aos="fade-up">
            <span className="font-semibold">Rating:</span> {course.rating}
          </p>
          <p data-aos="fade-up" className="text-3xl text-sky-400 font-semibold">
            Price: {currencyConverter(course.price)}
          </p>
          <button
            data-aos="fade-up"
            onClick={handleEnroll}
            className="bg-sky-400 text-white py-3 rounded-lg w-full hover:bg-sky-500 duration-300"
          >
            Enroll Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseDetals;

export const getServerSideProps = async ({ query }) => {
  const course = await getCourse(query.courseId);

  const updatedCourse = {
    ...course,
    updatedAt: course.updatedAt.toString(),
    createdAt: course.createdAt.toString(),
  };
  return {
    props: {
      course: updatedCourse,
    },
  };
};
