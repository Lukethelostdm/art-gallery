import type { NextApiRequest, NextApiResponse } from "next";
import FormData from "form-data";
import Mailgun from "mailgun.js";

const API_KEY = process.env.MAILGUN_API_KEY || "";
const DOMAIN = process.env.MAILGUN_DOMAIN || "";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log("Data", req.body);
  const { name, email, message } = req.body;

  const mailgun = new Mailgun(FormData);
  const client = mailgun.client({ username: "api", key: API_KEY ,  url: "https://api.eu.mailgun.net"});

  const messageData = {
    from: `${name} <${email}>`,
    to: `${process.env.MAILGUN_FROM_EMAIL}`,
    subject: "New Contact Form Submission",
    text: `Hello,
    you have a new form entry from: ${name} ${email}
    
    ${message}

    `,
    "h:Reply-To": email, 
  };

  try {
    const emailRes = await client.messages.create(DOMAIN, messageData);
    console.log(emailRes)
  } catch (err) {
    console.error("Error sending email:", err);
  }

  res.status(200).json({ submitted: true });
}
