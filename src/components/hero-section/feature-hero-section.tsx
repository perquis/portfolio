import type { ComponentProps, FC } from "react";

import { AboutMe } from "@/components/about-me/feature-about-me";
import { CodeBlock, Section } from "@/shared/ui";
import { calculateYearsSince } from "@/shared/utils";

import { SocialsList } from "./ui-socials-list";

interface IHeroSection {
  withoutCodeBlock?: boolean;
}

export const HeroSection: FC<IHeroSection & ComponentProps<"div">> = ({
  withoutCodeBlock,
}) => {
  return (
    <Section className="items-start gap-5">
      <AboutMe />
      <SocialsList />

      {!withoutCodeBlock && (
        <CodeBlock
          controls={[
            {
              icon: "Json",
              name: "about-me.json",
            },
          ]}
          snippets={[
            {
              code: `\`\`\`json {showLineNumbers}
{
  "level": "Mid/Regular 🔥",
  "experience": "${calculateYearsSince("01.07.2019 00:00")} years",
  "technologies": ["HTML", "CSS", "TypeScript", "Python", "C#"],
  "hobbies": ["Football", "Travels", "Animals"],
  "location": "Warsaw, Poland",
}`,
            },
          ]}
        />
      )}
    </Section>
  );
};
