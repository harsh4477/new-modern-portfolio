import { motion } from "framer-motion";
import { BsArrowRight } from "react-icons/bs";

import { fadeIn } from "../../variants";
import { Formik, Field, Form } from "formik";
import { validation } from "./validation.jsx";

const Contact = () => {
  const initialValues = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };

  return (
    <div className="h-full bg-primary/100">
      <div className="container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full">
        <div className="flex flex-col w-full max-w-[700px]">
          <motion.h2
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 text-center mb-12"
          >
            Let's <span className="text-accent">connect.</span>
          </motion.h2>
          <motion.div
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            <Formik initialValues={initialValues} validationSchema={validation}>
              {({ errors }) => (
                <Form className="flex-1 flex flex-col gap-6 w-full mx-auto">
                  <div className="grid grid-cols-2 gap-4 w-full">
                    <div className="flex flex-col gap-1">
                      <Field
                        className={`input ${
                          errors.name ? "border-red-600" : ""
                        }`}
                        type="text"
                        name="name"
                        placeholder="Enter Full Name"
                      />
                      {errors.name && (
                        <span className="text-red-600 capitalize">
                          {errors.name}
                        </span>
                      )}
                    </div>
                    <div className="flex flex-col gap-1">
                      <Field
                        className={`input ${
                          errors.email ? "border-red-600" : ""
                        }`}
                        type="email"
                        name="email"
                        placeholder="Enter E-mail"
                      />
                      {errors.email && (
                        <span className="text-red-600 capitalize">
                          {errors.email}
                        </span>
                      )}
                    </div>
                    <div className="flex flex-col gap-1 col-span-2">
                      <Field
                        className={`input ${
                          errors.subject ? "border-red-600" : ""
                        }`}
                        type="text"
                        name="subject"
                        placeholder="Enter a Subject"
                      />
                      {errors.subject && (
                        <span className="text-red-600 capitalize">
                          {errors.subject}
                        </span>
                      )}
                    </div>
                    <div className="flex flex-col gap-1 col-span-2">
                      <Field
                        component="textarea"
                        className={`textarea ${
                          errors.message ? "border-red-600" : ""
                        }`}
                        type="textarea"
                        name="message"
                        placeholder="Enter a message"
                      />
                      {errors.message && (
                        <span className="text-red-600 capitalize">
                          {errors.message}
                        </span>
                      )}
                    </div>
                    <div className="col-span-2">
                      <button
                        type="submit"
                        className="btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group"
                      >
                        <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                          Let's talk
                        </span>

                        <BsArrowRight
                          className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]"
                          aria-hidden
                        />
                      </button>
                    </div>
                  </div>
                </Form>
              )}
            </Formik>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
