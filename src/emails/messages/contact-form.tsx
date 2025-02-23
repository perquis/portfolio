import {
  Font,
  Heading,
  Html,
  Link,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";

interface IProps {
  name: string;
  email: string;
  message: string;
}

interface IContactFormMessageMailProps {
  email: IProps;
}

export default function ContactFormMessageMail({
  email: { name, email, message },
}: IContactFormMessageMailProps) {
  return (
    <Tailwind>
      <Html className="bg-zinc-100">
        <Font
          fontFamily="Roboto"
          fallbackFontFamily="Verdana"
          webFont={{
            url: "https://fonts.gstatic.com/s/roboto/v27/KFOmCnqEu92Fr1Mu4mxKKTU1Kg.woff2",
            format: "woff2",
          }}
          fontWeight={400}
          fontStyle="normal"
        />

        <Section className="mx-auto max-w-screen-sm rounded-xl bg-white p-5 shadow">
          <Heading className="leading-5 text-black">Hello Damian! 🖐️</Heading>

          <Text className="text-zinc-700">
            I sent you a mail from your website. Please check it out as soon as
            possible. You can find my message below:
          </Text>

          <b className="text-zinc-700">
            <i>{message}</i>
          </b>

          <Text className="text-zinc-700">
            <strong>Best regards,</strong>
            <br />
            {name}
          </Text>

          <Text>
            <Link
              className="italic text-indigo-600 underline"
              href={`mailto:${email}`}
            >
              {email}
            </Link>
          </Text>
        </Section>
      </Html>
    </Tailwind>
  );
}

ContactFormMessageMail.PreviewProps = {
  email: {
    name: "Daniel",
    email: "dmartinez@example.com",
    message: "Hello, I want to talk about a project.",
  },
};
