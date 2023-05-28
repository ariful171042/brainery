import Button from "@/components/Button";
import { currencyConverter } from "@/utils/currencyConverter";
import { getSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";

const OrderPage = ({ session, customer }) => {
  const router = useRouter();

  useEffect(
    () => {
      if (!session) {
        router.replace("/users/login");
      }
    },
    router,
    session
  );
  if (!session) {
    return null;
  }
  return (
    <div className="wrapper py-10 min-h-screen">
      <h2 className="text-3xl text-center mb-5">
        Your enrolled: {customer.orders.length} course
        {customer.orders.length > 1 ? "s" : ""}
      </h2>

      <div className="courses flex flex-wrap gap-10 ">
        {customer.orders.map((course) => (
          <div
            className="course p-5 shadow-md rounded-lg space-y-3"
            key={course.id}
          >
            <h2 className="text-2xl">{course.courseTitle}</h2>
            <p className="text-lg">
              Amount: {currencyConverter(course.amountTotal)}
            </p>
            <Button
              href={`/user/dashbord/courses/${course.courseId}`}
              placeholder={"Study Now"}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderPage;
export const getServerSideProps = async (context) => {
  const session = await getSession(context);

  const customer = await prisma.user.findUnique({
    where: {
      email: session?.user?.email,
    },
    include: {
      orders: true,
    },
  });

  if (!session || !customer) {
    return {
      redirect: {
        destination: "/users/login",
        permanest: true,
      },
    };
  }

  const updateCustomer = {
    ...customer,

    updatedAt: customer?.updatedAt.toString(),
    createdAt: customer?.createdAt.toString(),

    orders: customer?.orders?.map((order) => ({
      ...order,
      updatedAt: order?.updatedAt?.toString(),
      createdAt: order?.createdAt?.toString(),
    })),
  };

  return {
    props: {
      session,
      customer: updateCustomer,
    },
  };
};
