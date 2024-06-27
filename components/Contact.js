"use client";
import { sendEmail } from "@/public/server-actions";
import { CheckCircleIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";

const Contact = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();

  const [status, setStatus] = useState("");

  async function submitForm(e) {
    e.preventDefault();

    if (!email || !name || !message) return;

    setStatus("loading");
    // mandar email aca
    await sendEmail({ email, message, name });

    setEmail("");
    setName("");
    setMessage("");
    setStatus("sent");
    setTimeout(() => setStatus(""), 4000);
  }

  return (
    <div className=" py-12" id="contact">
      <p className="text-center text-3xl md:text-4xl text-[--color2] font-bold">
        CONTACT US
      </p>

      <form
        className="w-[80%] md:w-1/2 grid grid-cols-2 mx-auto gap-x-10 mt-10 sm:px-6"
        onSubmit={submitForm}
      >
        {/* name */}
        <div className="col-span-2 md:col-span-1">
          <label className="block text-sm font-medium leading-6 text-gray-900">
            Name
          </label>
          <div className="mt-2">
            <input
              type="text"
              className="block w-full bg-gray-50 rounded-lg border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[--color2] sm:text-sm sm:leading-6"
              placeholder=""
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </div>
        </div>

        {/* email */}
        <div className="col-span-2 md:col-span-1 ">
          <label className="block text-sm font-medium leading-6 text-gray-900">
            Email
          </label>
          <div className="mt-2">
            <input
              type="email"
              className="block w-full bg-gray-50 rounded-lg border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[--color2] sm:text-sm sm:leading-6"
              placeholder=""
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>
        </div>

        {/* email */}
        <div className="col-span-2 mt-6">
          <label className="block text-sm font-medium leading-6 text-gray-900">
            Message
          </label>
          <div className="mt-2 ">
            <textarea
              rows={6}
              className="block w-full bg-gray-50 rounded-lg border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[--color2] sm:text-sm sm:leading-6"
              placeholder=""
              onChange={(e) => setMessage(e.target.value)}
              value={message}
            />
          </div>
        </div>

        <button
          type="submit"
          onClick={submitForm}
          className="bg-black text-white col-span-2 md:w-52 py-2 mt-6 rounded-lg grid place-items-center"
        >
          {status === "loading" ? (
            <span className="spinner"></span>
          ) : status === "sent" ? (
            <CheckCircleIcon className="h-[25px] w-[25px]" />
          ) : (
            "Send Message"
          )}
        </button>
      </form>
    </div>
  );
};

export default Contact;
