import Image from "next/image";

const CourseItem = ({ course }) => {
  return (
    <div>
      <div className="">
        <Image
          priority
          src={course.cover}
          alt={course.title}
          width={640}
          height={360}
          className="w-auto h-auto object-cover"
        />
      </div>
      <div className="">
        <h3>{course.title}</h3>
      </div>
    </div>
  );
};

export default CourseItem;
