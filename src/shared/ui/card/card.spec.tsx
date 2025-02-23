import { expect, it } from "@jest/globals";
import { render } from "@testing-library/react";
import type { ComponentProps } from "react";

import Card from "./card";

jest.mock("../../ui", () => ({
  Badge: (props: ComponentProps<"span">) => (
    <span {...props}>{props.children}</span>
  ),
  DynamicImage: ({ lightUrl }: { lightUrl: string }) => (
    <img src={lightUrl} alt="DynamicImage" />
  ),
  Paragraph: (props: ComponentProps<"p">) => <p {...props}>{props.children}</p>,
  Regular: (props: ComponentProps<"span">) => (
    <span {...props}>{props.children}</span>
  ),
  Section: (props: ComponentProps<"section">) => (
    <section {...props}>{props.children}</section>
  ),
  Title: (props: ComponentProps<"h1">) => <h1 {...props}>{props.children}</h1>,
}));

jest.mock("next-intl", () => ({
  useLocale: () => "en",
}));

jest.mock("next-view-transitions", () => ({
  Link: ({ children }: { children: React.ReactNode }) => <a>{children}</a>,
}));

describe("Card", () => {
  it("renders correctly", () => {
    const now = new Date("2025-03-03T00:00:00.000Z");
    const baseUrl = "http://example.com/static";
    const getStaticImg = (name: string) => `${baseUrl}/${name}.png`;

    const { asFragment } = render(
      <Card
        title="test title"
        slug="test"
        dark_img={getStaticImg("dark")}
        light_img={getStaticImg("light")}
        description="Sample description"
        open_graph_img={getStaticImg("open_graph")}
        publishedAt={now}
        tags={["javascript", "nodejs"]}
        year={2024}
      />,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
