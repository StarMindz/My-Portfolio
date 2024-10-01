import React, { useRef, useState, ChangeEvent, FormEvent } from "react";
// import { motion } from "framer-motion";
import StarsCanvas from "../components/canvas/Star";
import EarthCanvas from "../components/canvas/Earth";

interface FormFields {
  name: string;
  email: string;
  message: string;
}

const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [form, setForm] = useState<FormFields>({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState<boolean>(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const scrollToContact = (page: string) => {
    const section = document.getElementById(page);
    if (section) {
      const offset = -400;
      const sectionPosition = section.getBoundingClientRect().top + window.scrollY;
  
      window.scrollTo({
        top: sectionPosition - offset,
        behavior: 'smooth',
      });
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("https://formspree.io/f/xovagdlr", {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        alert("Thank you! Your message has been sent.");
        setForm({ name: "", email: "", message: "" }); // Reset form fields
      } else {
        alert("Oops! There was a problem submitting your message.");
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div id="contact" className="w-full relative flex flex-col items-start py-[100px] px-[25px] md:px-[50px] lg:px-[100px] bg-transparent">
      <>
      <h1 className="text-large font-playfair font-bold cursor-pointer" onClick={() => scrollToContact("contact")}>Get in Touch</h1>
      <span className="block my-[30px] w-[100px] h-[2px] bg-teal"></span>
      <div className="xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden m-auto w-[100%] md:w-[90%]">
        <div
          className="flex-1 bg-gray-800 p-8 rounded-2xl"
        >
          <p className="text-gray-400 uppercase tracking-wide">Have a cool project in mind or just want to say hi? Feel free to send me a message!</p>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col gap-8"
          >
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Name"
                className="bg-gray-900 py-4 px-6 placeholder:text-gray-500 text-white rounded-lg outline-none border-none font-medium"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email Address"
                className="bg-gray-900 py-4 px-6 placeholder:text-gray-500 text-white rounded-lg outline-none border-none font-medium"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Message</span>
              <textarea
                rows={7}
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="What you want to say?"
                className="bg-gray-900 py-4 px-6 placeholder:text-gray-500 text-white rounded-lg outline-none border-none font-medium"
              />
            </label>

            <button
              type="submit"
              className="bg-gray-900 py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </form>
        </div>

        <div
          className="w-[350px] h-[350px] md:w-[600px] md:h-[600px]"
        >
          <EarthCanvas />
        </div>
      </div>
      </>
      <StarsCanvas />
      <div className="absolute bottom-5 w-[90%] text-center m-auto">© 2024 Stanley Nnamani (StarMindz). All Rights Reserved.</div>

    </div>
  );
};

export default Contact;
