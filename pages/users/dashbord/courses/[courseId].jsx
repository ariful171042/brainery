import { getCourse } from "@/prisma/courses";

const CourseVideos = ({ course }) => {
  return (
    <div className="min-h-screen ">
      <h1 className="text-3xl text-center mt-10 font-medium">{course.title}</h1>
      <p className="text-center text-xl mt-10 font-semibold">
        Video comeing soon
      </p>
    </div>
  );
};

export default CourseVideos;

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
