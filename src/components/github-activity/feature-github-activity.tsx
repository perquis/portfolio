import { socials } from "@/data";
import { Header, Section } from "@/shared/ui";

import { Calendar } from "./ui-calendar";

export const GithubActivity = () => {
  const link = socials.find((social) => social.name === "GitHub")!;

  return (
    <Section className="max-w-screen-sm gap-5">
      <Header
        heading="MY_GITHUB_ACTIVITY"
        description="GITHUB_ACTIVITY_DESCRIPTION"
        link={link}
        pathname="/blog"
      />
      <Calendar />
    </Section>
  );
};
