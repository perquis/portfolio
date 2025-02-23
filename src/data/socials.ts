import { GITHUB_URL, LINKEDIN_URL, TWITTER_URL } from "@/common/constants/env";

const socials = [
  {
    name: "GitHub",
    url: GITHUB_URL,
  },
  {
    name: "LinkedIn",
    url: LINKEDIN_URL,
  },
  {
    name: "X",
    url: TWITTER_URL,
  },
] as const;

export default socials;
