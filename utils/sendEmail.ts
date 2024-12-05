import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.SENDGRID_API_KEY!); // Use non-null assertion

export const sendThankYouEmail = async (email: string) => {
  const msg = {
    to: email,
    from: "sajidsorker86@gmail.com", // Use your verified sender email
    subject: "Thank You for Joining Our Waitlist!",
    text: "Thank you for registering for our waitlist! We will keep you updated on our launch and exciting developments.",
    html: "<strong>Thank you for registering for our waitlist!</strong><br>We will keep you updated on our launch and exciting developments.",
  };

  try {
    await sgMail.send(msg);
    console.log("Email sent successfully");
  } catch (error) {
    console.error("Error sending email:", error);
    throw new Error("Email sending failed");
  }
};
