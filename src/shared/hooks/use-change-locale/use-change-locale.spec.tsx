import { describe, expect, it } from "@jest/globals";
import { render, renderHook } from "@testing-library/react";

import * as hooks from "@/libs/next-intl";

import NextIntlProvider from "../../../providers/next-intl";
import useChangeLocale from "./use-change-locale";

jest.mock("next-intl/server", () => ({
  __esModule: true,
  getRequestConfig: jest.fn(() => ({
    locale: "pl",
    messages: { key: "wartość" },
  })),
  getMessages: jest.fn(() => ({
    en: { key: "value" },
    pl: { key: "wartość" },
  })),
}));

jest.mock("next-intl/navigation", () => ({
  __esModule: true,
  createNavigation: jest.fn(() => ({
    Link: () => <div></div>,
    redirect: jest.fn(),
    usePathname: jest.fn(() => "/"),
    useRouter: jest.fn(() => ({ push: jest.fn() })),
  })),
  useIntl: jest.fn(() => ({
    locale: "pl",
    messages: { key: "wartość" },
  })),
}));

describe("use-change-locale", () => {
  it("should change language to 'en'", () => {
    render(
      <NextIntlProvider messages={{}} locale="en">
        <div></div>
      </NextIntlProvider>,
    );

    jest.spyOn(hooks, "useRouter");

    const { result } = renderHook(() => useChangeLocale());
    result.current.changeLanguage("en");

    expect(result.current.changeLanguage).toBeDefined();
    expect(hooks.useRouter).toHaveBeenCalled();
    expect(hooks.useRouter).toHaveBeenCalledTimes(1);
  });
});
