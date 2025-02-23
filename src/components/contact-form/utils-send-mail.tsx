"use server";

import { render } from "@react-email/components";

import ContactFormMessageMail from "@/emails/messages/contact-form";
import { transporter } from "@/libs/nodemailer";
import { capitalized } from "@/shared/utils";

import type { Schema } from "./ui-client-contact-form";

export const sendMail = async (email: Schema) => {
  const to = process.env.SMTP_GMAIL_EMAIL! as string;

  const html = await render(<ContactFormMessageMail email={email} />),
    subject = `${capitalized(email.name)} sent mail for you 📧!`;

  try {
    transporter.sendMail({ to, subject, html });
  } catch (error: unknown) {
    console.error(error);
    throw new Error(
      `Something went wrong with sending mail on the server side...`,
    );
  }
};
