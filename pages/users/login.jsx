import { FcGoogle } from "react-icons/fc";
import SectionHeader from "@/components/SectionHeader";
import { signIn, getSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";

const LoginPage = ({ session }) => {
  const router = useRouter();

  const loginWithGoogle = async () => {
    try {
      await signIn("google");
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    if (session) {
      const destination = router.query.destination || "/users/profile";

      router.replace(destination);
    }
  }, [router, session]);

  if (session) {
    return null;
  }

  if (!session) {
    return (
      <div className="wrapper py-10 min-h-screen mt-5">
        <SectionHeader
          span={"Login"}
          h2={"Get started with Google"}
          p={"Please login to continue with our features"}
        />
        <div className="login">
          <form className="login-form flex flex-col gap-5 py-5 mx-auto max-w-sm">
            <div className="form-comtrol flex flex-col gap-2 mt-10">
              <label
                htmlFor="email"
                className="cursor-pointer hover:text-sky-400 duration-300"
              >
                Email address
              </label>
              <input
                type="email"
                id="email"
                placeholder="hello@gmail.com"
                className="bg-transparent border border-slate-500 py-3 px-5 rounded-xl outline-none focus:border-sky-400 duration-300"
              />
            </div>
            <div className="form-comtrol flex flex-col gap-2 ">
              <label
                htmlFor="password"
                className="cursor-pointer hover:text-sky-400 duration-300"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                className="bg-transparent border border-slate-500 py-3 px-5 rounded-xl outline-none focus:border-sky-400 duration-300"
              />
            </div>
            <button
              type="submit"
              className="mt-3 bg-sky-400 text-white p-3 rounded-xl hover:bg-sky-600 duration-300"
            >
              Log in
            </button>
          </form>
        </div>
        <div className="flex justify-center">
          <button
            onClick={loginWithGoogle}
            className="flex gap-2 items-center bg-sky-500  text-white py-3 px-6 rounded-lg mt-0 hover:bg-sky-600 duration-300"
          >
            <span>
              <FcGoogle />
            </span>{" "}
            Sign in with Google
          </button>
        </div>
      </div>
    );
  }
};

export default LoginPage;

export const getServerSideProps = async (context) => {
  const session = await getSession(context);

  if (session) {
    const destination = context.query.destination || "/users/profile";
    return {
      redirect: {
        destination,
        permanent: false,
      },
    };
  }

  return {
    props: {
      session,
    },
  };
};
