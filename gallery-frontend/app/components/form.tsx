"use client";
import { FormEvent, useState } from "react";

export const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [confirmationMessage, setConfirmationMessage] = useState("");

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/contact", {
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
      if (response.ok) {
        setConfirmationMessage("Your message has been sent!");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setConfirmationMessage("Error sending message");
      }
    } catch (err) {
      console.error("Error", err);
    }
  };

  return (
    <form
      onSubmit={onSubmit}
      className="flex flex-col mx-auto max-w-md my-20 gap-2 text-center align-baseline"
    >
      <h1 className="text-3xl font-Jura ">Contact Me</h1>


      <label className="label font-semibold text-start font-Anaheim">
        <span className="label-text">Full Name</span>
      </label>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        type="text"
        required
        placeholder="Your Name"
        className="text-center rounded-lg font-Anaheim"
      />


      <label className="label font-semibold align-baseline text-start font-Anaheim">
        <span className="label-text">Email</span>
      </label>
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        required
        placeholder="yourname@example.com"
        className="text-center rounded-lg font-Anaheim"
      />


      <label className="label font-semibold text-start font-Anaheim">
        <span className="label-text">Message</span>
      </label>
      <textarea
        placeholder="Type your message here..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="min-h-32 text-center rounded-lg font-Anaheim "
        required
      ></textarea>


      <button
       type="submit"
       className="bg-nav hover:bg-text text-text hover:text-nav font-bold py-2"
       >
        Submit
        </button>

        {confirmationMessage && (
          <p className="text-text text-center mt-4 font-Anaheim">{confirmationMessage}</p>
        )}
    </form>
  );
};
