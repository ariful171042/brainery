import SectionHeader from "@/components/SectionHeader";
import { getCourse } from "@/prisma/courses";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";

/* Stripe promise */
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);

const checkoutPage = ({ course }) => {
  const { data: session } = useSession();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    address: "",
    courseTitle: course.title,
    price: course.price,
  });

  useEffect(() => {
    if (session) {
      setFormData((prev) => ({
        ...prev,
        name: session.user.name,
        email: session.user.email,
      }));
    }
  }, [session]);

  // checkout handler
  const handleCheckout = async (e) => {
    e.preventDefault();

    const stripe = await stripePromise;

    /* Send a post req to the server */
    const checkoutsession = await axios.post("/api/create-checkout-session", {
      items: [course],
      name: formData.name,
      email: formData.email,
      mobile: formData.mobile,
      address: formData.address,
      courseTitle: formData.courseTitle,
    });

    /* redirect to the stripe payment */

    const result = stripe.redirectToCheckout({
      sessionId: checkoutsession.data.id,
    });

    if (result.error) {
      console.log((await result).error.message);
    }
  };

  return (
    <div className="wrapper py-10 min-h-screen">
      <SectionHeader
        span={"Checkout"}
        h2={"Please provide detals"}
        p={"Fill out this form to continue checkout "}
      />

      <div className="flex justify-center">
        <form
          onSubmit={handleCheckout}
          className="flex flex-col gap-5 mt-10 w-full lg:w-[35rem]"
        >
          <div className="form-control flex flex-col gap-2">
            <label htmlFor="name" className="cursor-pointer">
              Name
            </label>
            <input
              className="outline-none border py-3 px-4 rounded-lg focus:border-black"
              type="text"
              id="name"
              placeholder={formData.name}
              readOnly
              value={formData.name}
            />
          </div>

          <div className="form-control flex flex-col gap-2">
            <label htmlFor="email" className="cursor-pointer">
              Email
            </label>
            <input
              className="outline-none border py-3 px-4 rounded-lg focus:border-black"
              id="email"
              type="email"
              placeholder={formData.email}
              readOnly
              value={formData.email}
            />
          </div>

          <div className="form-control flex flex-col gap-2">
            <label htmlFor="mobile" className="cursor-pointer">
              Phone number
            </label>
            <input
              className="outline-none border py-3 px-4 rounded-lg focus:border-black"
              type="tel"
              id="mobile"
              placeholder="+88017********"
              value={formData.mobile}
              required
              onChange={(e) =>
                setFormData({ ...formData, mobile: e.target.value })
              }
            />
          </div>

          <div className="form-control flex flex-col gap-2">
            <label htmlFor="text" className="cursor-pointer">
              Address
            </label>
            <input
              className="outline-none border py-3 px-4 rounded-lg focus:border-black"
              type="mobile"
              placeholder="XYZ street, LY"
              value={formData.address}
              required
              onChange={(e) =>
                setFormData({ ...formData, address: e.target.value })
              }
            />
          </div>

          <div className="form-control flex flex-col gap-2">
            <label htmlFor="text" className="cursor-pointer">
              Course Title
            </label>
            <input
              className="outline-none border py-3 px-4 rounded-lg focus:border-black"
              type="text"
              placeholder={formData.courseTitle}
              readOnly
              value={formData.courseTitle}
            />
          </div>
          <div className="form-control flex flex-col gap-2">
            <label htmlFor="number" className="cursor-pointer">
              Price (USD)
            </label>
            <input
              className="outline-none border py-3 px-4 rounded-lg focus:border-black"
              type="number"
              placeholder={formData.price}
              readOnly
              value={formData.price}
            />
          </div>
          <button
            type="submit"
            role="link"
            className="bg-black text-white py-4 rounded-lg hover:bg-gray-700 uppercase"
          >
            Proceed to checkout
          </button>
        </form>
      </div>
    </div>
  );
};

export default checkoutPage;

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
