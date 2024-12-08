import { Resend } from "resend";
import EmailTemplate from "./emailTemplate";

const resend = new Resend(process.env.RESEND_API_KEY!);

export const sendThankYouEmail = async (email: string) => {
  const emailContent = EmailTemplate({ email });

  try {
    const response = await resend.emails.send({
      from: "Outfitique <noreply@driplare.com>",
      to: email,
      subject: "Thank You for Joining Our Waitlist!",
      react: emailContent,
    });

    console.log("Email sent successfully:", response);
  } catch (error) {
    console.error("Error sending email:", error);
    throw new Error("Email sending failed");
  }
};
