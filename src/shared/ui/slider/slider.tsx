"use client";

import clsx from "clsx";
import { type ComponentProps } from "react";

import { useKey } from "@/shared/hooks";
import {
  Container,
  IconButton,
  Motion,
  Ratio,
  Regular,
  Section,
} from "@/shared/ui";

import { Page } from "./page";
import { Popup } from "./popup";
import { useAnimate } from "./use-animate";
import { usePopup } from "./use-popup";

type RatioProps = ComponentProps<typeof Ratio>;
type Slide = Pick<RatioProps, "src" | "alt">;

interface ISlider {
  slides: Slide[];
}

export default function Slider({ slides }: ISlider) {
  const {
      animate: { page, diff },
      duration: { current: transition },
      actions,
      slideRef,
    } = useAnimate(),
    popup = usePopup(page);

  useKey("Escape", popup.close);

  const showSlide = (index: number) => ({
    opacity: page === index ? 1 : 0.15,
  });

  return (
    <Section className="relative gap-5">
      <Popup {...popup} />

      <Container className="relative !px-0">
        <Motion
          animate={{ translateX: diff * -page }}
          transition={transition}
          className="w-full"
        >
          <Section
            className="w-full !flex-row items-center gap-5"
            ref={slideRef}
          >
            {slides.map((rest, index) => (
              <Motion
                asChild="button"
                key={index}
                layoutId={String(index)}
                className={clsx(
                  page !== index && "pointer-events-none",
                  "flex-shrink-0 rounded-xl",
                  page === index ? "w-full" : "!w-10/12",
                )}
                onClick={() =>
                  page === index && popup.setSelectedId(String(index))
                }
                disabled={page !== index}
              >
                <div className="rounded-xl bg-white dark:bg-zinc-950">
                  <Motion style={showSlide(index)} animate={showSlide(index)}>
                    <Ratio
                      key={index}
                      className={clsx(
                        "lock w-full flex-shrink-0 cursor-zoom-in overflow-hidden rounded-xl transition-opacity duration-300",
                      )}
                      resolution="5:4"
                      {...rest}
                    />
                  </Motion>
                </div>
              </Motion>
            ))}
          </Section>
        </Motion>
        <Section className="absolute bottom-5 left-1/2 -translate-x-1/2 !flex-row gap-3">
          {slides.map((_, index) => (
            <Page key={index} isActive={index === page} />
          ))}
        </Section>
      </Container>
      <Section className="h-5 gap-1 overflow-hidden">
        {slides.map(({ alt }, index) => (
          <Motion
            key={index}
            animate={{ translateY: page * -24 }}
            transition={transition}
            className="h-5 text-center"
          >
            <Regular className="text-center !text-sm">{alt}</Regular>
          </Motion>
        ))}
      </Section>
      <Section className="absolute -bottom-2 right-0 !flex-row gap-2">
        {actions.map(({ name, disabled, onClick }, index) => (
          <IconButton
            key={index}
            icon={name}
            size="medium"
            rounded="full"
            onClick={onClick}
            disabled={disabled}
            className="bg-zinc-100 active:scale-90 dark:bg-zinc-900"
          />
        ))}
      </Section>
    </Section>
  );
}
