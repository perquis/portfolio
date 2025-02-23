declare global {
  namespace NodeJS {
    type Env =
      | "SMTP_GMAIL_EMAIL"
      | "SMTP_GMAIL_PASSWORD"
      | "VERCEL_URL"
      | "NEXT_PUBLIC_CALCOM_LINK"
      | "NEXT_PUBLIC_CALCOM_NAMESPACE"
      | "GOOGLE_FORM_URL"
      | "NEXT_PUBLIC_REACT_SCAN_FEATUER"
      | "NEXT_PUBLIC_GITHUB_PROFILE_URL"
      | "NEXT_PUBLIC_LINKEDIN_PROFILE_URL"
      | "NEXT_PUBLIC_TWITTER_PROFILE_URL"
      | "NEXT_PUBLIC_CONTACT_FORM";

    type MappedEnv = {
      [K in Env]?: string;
    };

    interface ProcessEnv extends MappedEnv {
      NODE_ENV?: "development" | "production" | "test";
    }
  }
}

export {};
