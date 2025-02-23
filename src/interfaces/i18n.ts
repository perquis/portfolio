import type en from "@/translations/en.json";

export type Messages = typeof en;

export type Locale = "pl" | "en";

export type SearchParams = Promise<{
  [key: string]: string | string[] | undefined;
}>;

export type ParamsWithLocale = Promise<{ readonly locale: Locale }>;
export type ParamsWithSlug = Promise<{ readonly slug?: string }>;

export type ParamsKey = Record<"params", ParamsWithLocale & ParamsWithSlug>;
export type SearchParamsKey = Record<"searchParams", SearchParams>;

export type APIRequestParams = ParamsKey & SearchParamsKey;
