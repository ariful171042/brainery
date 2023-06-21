import { MdLocationPin } from "react-icons/md";
import { AiFillPhone } from "react-icons/ai";
import { BiEnvelope } from "react-icons/bi";

const Contact = () => {
  return (
    <>
      <div className="mt-20 mx-auto w-[80%] min-h-screen">
        <div>
          <h1 className="text-center py-10 text-5xl text-sky-500 ">
            Contact us
          </h1>
        </div>
        <div className="form flex justify-around">
          <div className="flex-1 justify-center items-center">
            <form className="flex flex-col py-16 px-20 bg-sky-100 gap-3 ">
              <label htmlFor="name">
                Your Name
                <span className="text-sky-600 font-semibold text-lg">*</span>
                <span className="text-sky-600 font-semibold text-lg">*</span>
              </label>
              <input
                required
                type="text"
                id="name"
                className="border border-sky-500 rounded-sm py-2 px-2 focus:outline-1 focus:outline-sky-600"
              />
              <label htmlFor="email">
                Your Email
                <span className="text-sky-600 font-semibold text-lg">*</span>
              </label>
              <input
                required
                type="email"
                id="email"
                className="border border-sky-500 rounded-sm py-2 px-2 focus:outline-1 focus:outline-sky-600"
              />

              <label htmlFor="message">Write Your Message</label>
              <textarea
                type="text"
                id="message"
                className="border border-sky-500 rounded-sm py-2 px-2 focus:outline-1 focus:outline-sky-600"
              />

              <button
                type="submit"
                className="bg-sky-500 text-green-50 uppercase py-2 mt-4 rounded-md "
              >
                send
              </button>
            </form>
          </div>

          <div className="flex-1 flex justify-center bg-sky-500">
            <div className=" text-green-50  flex flex-col justify-center gap-6 ">
              <div>
                <h1 className="text-3xl">Found us </h1>
                <p>Discover your beauty destination with Brainery </p>
              </div>
              <div className="icons-section flex flex-col justify-between items-start gap-6">
                <div className="single-icon-div flex items-center gap-3">
                  <MdLocationPin className="border-2 border-white rounded-full text-4xl p-1" />
                  <p>
                    Tangail, Dhaka <br /> Bangladesh
                  </p>
                </div>
                <div className="single-icon-div flex items-center gap-3">
                  <AiFillPhone className="border-2 border-white rounded-full text-4xl p-1" />
                  <p>
                    <a href="tel:+8801724097877">+8801724097877</a> <br />
                    <a href="tel:+8801724097877">+8801724097877</a>
                  </p>
                </div>
                <div className="single-icon-div flex items-center gap-3">
                  <BiEnvelope className="border-2 border-white rounded-full text-4xl p-1" />
                  <p>
                    <a href="mailto:divinebeauti@gmail.com">
                      info@brainery.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
