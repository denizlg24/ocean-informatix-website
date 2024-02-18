"use server";
import * as nodemailer from "nodemailer";
import { MailOptions } from "nodemailer/lib/sendmail-transport";

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("email");
  const name = formData.get("name");
  const message = formData.get("message");
  if (!senderEmail || !name || !message) {
    return {
      error: "Invalid input",
    };
  }
  const transporter = nodemailer.createTransport({
    host: "smtp.hostinger.com",
    port: 465,
    secure: true, // upgrade later with STARTTLS
    auth: {
      user: process.env.WEBMAIL_USER,
      pass: process.env.WEBMAIL_PASS,
    },
  });
  var mailOptions: MailOptions = {
    from: "geral@oceaninformatix.com",
    to: "geral@oceaninformatix.com",
    subject: "Ocean Informatix Contact Form",
    text: `New contact form submission.\nName: ${name}\nEmail: ${senderEmail.toString()}\nMessage: ${message.toString()}`,
  };

  transporter.sendMail(mailOptions, function (err) {
    if (err) {
      console.log(err);
      return { error: "Ocorreu um erro a enviar a sua mensagem." };
    }
  });
  return { error: "" };
};
