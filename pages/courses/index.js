import CourseItem from "@/components/CourseItem";
import SectionHeader from "@/components/SectionHeader";
import { getAllCourses } from "@/prisma/courses";

const CoursesPage = ({ courses }) => {
  return (
    <div className="wrapper py-10">
      <SectionHeader
        span="Courses"
        h2="Browse all Courses"
        p=" Unleash your potential with Brainery, the premier learning website.Dive into a wide range of expert-led courses, embark on a personalized learning journey, and join a vibrant community of knowledge seekers. Expand your horizons and ignite your passion for learning at Brainery today."
      />

      <div className=" mt-10 flex flex-wrap gap-10">
        {courses.map((course) => (
          <CourseItem key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default CoursesPage;

export const getServerSideProps = async () => {
  const courses = await getAllCourses();

  const updatedCourses = courses.map((course) => ({
    ...course,
    updatedAt: course.updatedAt.toString(),
    createdAt: course.createdAt.toString(),
  }));

  return {
    props: {
      courses: updatedCourses,
    },
  };
};
