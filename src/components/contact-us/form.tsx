"use client";
import React, { useState } from "react";
import Swal from "sweetalert2";

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) throw new Error(result.error || "Something went wrong");

      Swal.fire({
        title: "Success!",
        text: "Message sent successfully 🎉",
        icon: "success",
        confirmButtonColor: "#3085d6",
        confirmButtonText: "OK",
      });

      setFormData({ email: "", message: "" });
    } catch (err) {
      Swal.fire({
        title: "Error!",
        text: "Failed to send message. Please try again. ❌",
        icon: "error",
        confirmButtonColor: "#d33",
        confirmButtonText: "Retry",
      });
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="md:py-20 py-10 md:px-24 px-3 ">
      <h2 className="uppercase lg:text-4xl pb-10 lg:pb-16 font-semibold text-xl text-center">
        Reach out to Us
      </h2>
      <div className="flex md:flex-row gap-5  justify-between flex-col-reverse">
        <form
          onSubmit={handleSubmit}
          className="lg:text-2xl flex flex-col w-full text-xl"
        >
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email Address"
            className="rounded-xl border-[0.5px] w-full border-opacity-[60%] p-3 border-text-dark text-text-dark "
          />

          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Enter Your Message"
            className="rounded-xl border-[0.5px] w-full mt-4 p-3 border-opacity-[60%] border-text-dark text-text-dark "
          />
          <div className="mt-8">
            <button
              className="bg-primary-gradient text-text rounded-full w-full h-[51px]  lg:h-[80px] p-[12px] space-x-[10px] lg:text-2xl text-[20px] transition duration-300 transform hover:scale-105"
              type="submit"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </div>
        </form>

        <h2 className="uppercase md:hidden block  py-4  font-semibold text-xl text-center">
          Or Send Us a message
        </h2>
        <div className="rounded-2xl w-full lg:text-2xl text-xl border-[0.5px] border-text-dark">
          <h5 className="uppercase text-center p-4">Contact Details</h5>
          <p className="border-t-[0.5px] border-text-dark p-4 ">
            Phone: +447787458301
          </p>
          <p className="border-y-[0.5px] border-text-dark p-4 ">
            Email: bookablestr@gmail.com
          </p>
          <h6 className="uppercase text-center p-4">
            Looking forward to your message
          </h6>
        </div>
      </div>
    </div>
  );
};
