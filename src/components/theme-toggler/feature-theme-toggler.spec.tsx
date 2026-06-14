import { beforeEach, describe, expect, it } from "@jest/globals";
import { fireEvent, render } from "@testing-library/react";
import type { ComponentProps, PropsWithChildren } from "react";

const mockSetTheme = jest.fn();
let mockTheme: string | undefined = "light";

jest.mock("next-themes", () => ({
  useTheme: () => ({ theme: mockTheme, setTheme: mockSetTheme }),
}));

jest.mock("../../shared/ui", () => ({
  Section: ({ children, ...props }: PropsWithChildren<ComponentProps<"div">>) => (
    <div {...props}>{children}</div>
  ),
}));

jest.mock("../../shared/icons/generals", () => ({
  Sun: (props: ComponentProps<"svg">) => <svg data-testid="sun" {...props} />,
  Moon: (props: ComponentProps<"svg">) => <svg data-testid="moon" {...props} />,
}));

// Imported after the mocks so the real `@/shared/ui` barrel (and its
// untransformed ESM deps) never loads.
import { ThemeToggler, type TransitionVariant } from "./feature-theme-toggler";

const getToggle = (container: HTMLElement) =>
  container.querySelector("button") as HTMLButtonElement;

describe("ThemeToggler", () => {
  beforeEach(() => {
    mockSetTheme.mockClear();
    mockTheme = "light";
    document.documentElement.className = "";
    // Default to the fallback path; individual tests opt into View Transitions.
    delete (document as { startViewTransition?: unknown }).startViewTransition;
  });

  it("renders both icons once mounted", () => {
    const { getByTestId } = render(<ThemeToggler />);

    expect(getByTestId("sun")).toBeInTheDocument();
    expect(getByTestId("moon")).toBeInTheDocument();
  });

  it("reflects the controlled light theme as unchecked", () => {
    const { container } = render(<ThemeToggler />);

    expect(getToggle(container)).not.toBeChecked();
  });

  it("reflects the controlled dark theme as checked", () => {
    mockTheme = "dark";
    const { container } = render(<ThemeToggler />);

    expect(getToggle(container)).toBeChecked();
  });

  it("toggles from light to dark via setTheme when controlled", () => {
    const { container } = render(<ThemeToggler />);

    fireEvent.click(getToggle(container));

    expect(mockSetTheme).toHaveBeenCalledWith("dark");
    expect(document.documentElement.classList.contains("dark")).toBe(true);
  });

  it("toggles from dark to light via setTheme when controlled", () => {
    mockTheme = "dark";
    const { container } = render(<ThemeToggler />);

    fireEvent.click(getToggle(container));

    expect(mockSetTheme).toHaveBeenCalledWith("light");
  });

  it("uses the View Transitions API when available", () => {
    const startViewTransition = jest.fn((cb: () => void) => {
      cb();
      return { ready: Promise.resolve(), finished: Promise.resolve() };
    });
    (document as { startViewTransition?: unknown }).startViewTransition =
      startViewTransition;

    const { container } = render(<ThemeToggler variant="circle" />);
    fireEvent.click(getToggle(container));

    expect(startViewTransition).toHaveBeenCalledTimes(1);
    expect(mockSetTheme).toHaveBeenCalledWith("dark");
  });

  it.each<TransitionVariant>([
    "circle",
    "square",
    "triangle",
    "diamond",
    "hexagon",
    "rectangle",
    "star",
  ])("renders and toggles with the %s variant", (variant) => {
    const { container } = render(<ThemeToggler variant={variant} />);

    fireEvent.click(getToggle(container));

    expect(mockSetTheme).toHaveBeenCalledWith("dark");
  });

  it("forwards a custom className to the section", () => {
    const { container } = render(<ThemeToggler className="custom-class" />);

    expect(container.querySelector(".custom-class")).toBeInTheDocument();
  });
});
