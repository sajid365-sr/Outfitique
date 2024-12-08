import {
  Body,
  Button,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";
import logoBlack from "@/public/logo-black.png";

interface OutfitiqueWelcomeEmailProps {
  email: string;
}

export const OutfitiqueWelcomeEmail = ({
  email,
}: OutfitiqueWelcomeEmailProps) => (
  <Html>
    <Head />
    <Preview>
      Welcome to Outfitique, your exclusive waitlist experience!
    </Preview>
    <Body style={main}>
      <Container style={container}>
        <Img
          src="https://res.cloudinary.com/dolcdkbkp/image/upload/v1733607052/Outfitique/logo-black_a53aod.png"
          width="180"
          alt="Outfitique"
          style={logo}
        />
        <Text style={paragraph}>Hi {email},</Text>
        <Text style={paragraph}>
          Welcome to Outfitique! We're thrilled to have you on our waitlist. Get
          ready to discover a world of fashion tailored just for you.
        </Text>
        <Section style={btnContainer}>
          <Button style={button} href="https://outfitique.com">
            Explore Now
          </Button>
        </Section>
        <Text style={paragraph}>
          Best,
          <br />
          The Outfitique Team
        </Text>
        <Hr style={hr} />
        <Text style={footer}>Gazipur, Dhaka, Bangladesh</Text>
      </Container>
    </Body>
  </Html>
);

OutfitiqueWelcomeEmail.PreviewProps = {
  email: "Alan",
} as OutfitiqueWelcomeEmailProps;

export default OutfitiqueWelcomeEmail;

const main = {
  backgroundColor: "#ffffff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
};

const logo = {
  margin: "0 auto",
};

const paragraph = {
  fontSize: "16px",
  lineHeight: "26px",
};

const btnContainer = {
  textAlign: "center" as const,
};

const button = {
  backgroundColor: "#059669",
  borderRadius: "3px",
  color: "#fff",
  fontSize: "16px",
  textDecoration: "none",
  textAlign: "center" as const,
  display: "block",
  padding: "12px",
};

const hr = {
  borderColor: "#cccccc",
  margin: "20px 0",
};

const footer = {
  color: "#8898aa",
  fontSize: "12px",
};
