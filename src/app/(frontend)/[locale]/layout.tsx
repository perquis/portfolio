import clsx from "clsx";
import { GeistMono } from "geist/font/mono";
import { getMessages } from "next-intl/server";
import { ViewTransitions } from "next-view-transitions";
import { Inter } from "next/font/google";
import { type PropsWithChildren, Suspense } from "react";

import { AppProvider } from "@/app/(frontend)/[locale]/_providers";
import { REACT_SCAN_FEATURE } from "@/common/constants/env";
import { CommandMenu, CommandMenuProvider } from "@/components";
import type { APIRequestParams } from "@/interfaces/i18n";
import { locales } from "@/libs/next-intl";
import { NextIntlProvider } from "@/providers";
import { BackgroundScene, GlobalLayout, Navigation } from "@/shared/ui";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function AppLayout({
  children,
  params,
}: PropsWithChildren & APIRequestParams) {
  const { locale } = await params;
  const [messages] = await Promise.all([getMessages()]);

  return (
    <ViewTransitions>
      <html lang={locale} suppressHydrationWarning>
        <head>
          <meta name="google" content="notranslate" />
          {REACT_SCAN_FEATURE && (
            <script
              crossOrigin="anonymous"
              src="//unpkg.com/react-scan/dist/auto.global.js"
              defer
            />
          )}
        </head>
        <body
          className={clsx(
            inter.className,
            GeistMono.variable,
            "bg-white dark:bg-zinc-950",
          )}
        >
          <Suspense>
            <NextIntlProvider messages={messages}>
              <AppProvider>
                <Navigation />
                <GlobalLayout>
                  <BackgroundScene />
                  {children}
                  <CommandMenuProvider>
                    <CommandMenu data={[[], []]} />
                  </CommandMenuProvider>
                </GlobalLayout>
              </AppProvider>
            </NextIntlProvider>
          </Suspense>

          <div
            className="pointer-events-none fixed left-0 top-0 z-50 flex h-screen w-full items-center justify-center"
            id="cal-com-widget"
          />
          <div className="fixed right-5 top-0 z-50" id="alerts" />
          <div className="pointer-events-none fixed bottom-0 left-0 z-50 hidden h-16 w-full bg-gradient-to-t from-white to-white/0 dark:block dark:from-zinc-950 dark:to-zinc-950/0" />
        </body>
      </html>
    </ViewTransitions>
  );
}
