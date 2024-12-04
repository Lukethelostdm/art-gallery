"use client";
import { FormEvent, useState } from "react";

export const ContactForm = () => {
  const [isSubmitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify({
          name,
          email,
          message,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
    } catch (err) {
      console.error("Error", err);
    }
  };

  return isSubmitted ? (
    <div>
      <h1
        className="text-center font-semibold text-3xl"
      >
        Thank you for your message!
      </h1>
    </div>
  ) : (
    <form
      onSubmit={onSubmit}
      className="flex flex-col mx-auto max-w-md my-20 gap-2 text-center align-baseline"
    >
      <h1 className="text-3xl">Contact Me</h1>

      <label className="label font-semibold text-start">
        <span className="label-text">Full Name</span>
      </label>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        type="text"
        placeholder="Your Name"
        className="text-center rounded-lg"
      />

      <label className="label font-semibold align-baseline text-start">
        <span className="label-text">Email</span>
      </label>
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        placeholder="yourname@example.com"
        className="text-center rounded-lg"
      />

      <label className="label font-semibold text-start">
        <span className="label-text">Message</span>
      </label>
      <textarea
        placeholder="Type your message here..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="min-h-32 text-center rounded-lg "
      ></textarea>

      <button
        type="submit"
        className="bg-nav hover:bg-text text-text hover:text-nav font-bold py-2"
      >
        Submit
      </button>
    </form>
  );
};
