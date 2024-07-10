import nodemailer from "nodemailer";
export const sendMail = async (to, subject, text) => {
  try {
    const transporter = nodemailer.createTransport({
      service: process.env.EMAIL_SERVICE,
      host: process.env.HOST,
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
      },
    });
    const res = await transporter.sendMail({
      from: process.env.EMAIL,
      to,
      subject,
      text,
      headers: {
        "Content-Type": "text/html",
      },
    });
    return { success: true, message: "mail sent" };
  } catch (error) {
    return { success: false, message: error.message };
  }
};
export const generateCode = async () => {
  let code = Math.floor(100000 + Math.random() * 900000).toString();
  return code;
};
