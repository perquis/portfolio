import { ThemeProvider } from "next-themes";
import { NuqsAdapter } from "nuqs/adapters/next";

import { AlertProvider } from "@/providers";
import { composeProviders, createProvider } from "@/shared/utils";

const providers = [
  createProvider(ThemeProvider, {
    attribute: "class",
    enableSystem: true,
    disableTransitionOnChange: true,
  }),
  createProvider(AlertProvider),
  createProvider(NuqsAdapter),
];

export const AppProvider = composeProviders(providers);
