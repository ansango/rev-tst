import nodemailer from "nodemailer";

const { NODEMAILER_CONFIG } = process.env;

const nodemailerConfig = NODEMAILER_CONFIG ? JSON.parse(NODEMAILER_CONFIG) : {};

const transporter = nodemailer.createTransport(nodemailerConfig);

export async function sendMail({
  from,
  to,
  subject,
  html,
}: {
  from: Email;
  to: Email;
  subject: string;
  html: string;
}) {
  try {
    await transporter.sendMail({
      from,
      to,
      subject,
      html,
    });
  } catch (e: any) {
    console.error(e);
    throw new Error(`Could not send email: ${e.message}`);
  }
}

export const CONFIG = {
  // TODO: Replace with the email you want to use to send email
  from: nodemailerConfig?.auth?.user,
};
