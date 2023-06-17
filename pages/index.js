import React from "react";
import CoursesPage from "./courses";
import { getAllCourses } from "@/prisma/courses";
import HeroSection from "@/components/Hero";

const HomePages = ({ courses }) => {
  return (
    <div>
      <HeroSection />
      <CoursesPage courses={courses} />
    </div>
  );
};

export default HomePages;

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
