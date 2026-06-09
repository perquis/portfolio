"use client";

import dynamic from "next/dynamic";
import { AnimatePresence } from "framer-motion";

import { emojis } from "@/data";
import {
  IconButton,
  Motion,
  Paragraph,
  Section,
  Title,
} from "@/shared/ui";

const Emoji = dynamic(() => import("@/shared/ui/emoji/emoji"), { ssr: false });

interface IFeedback {
  title: string;
  isOpen: boolean;
  description: string;
  close: () => void;
}

export default function Feedback({
  isOpen,
  close,
  title,
  description,
}: IFeedback) {
  return (
    <div className="pointer-events-none fixed left-0 top-0 flex h-screen w-full items-end justify-center overflow-hidden pb-16">
      <AnimatePresence>
        {isOpen && (
          <Motion
            initial={{
              scale: 0,
              opacity: 0,
              translateY: 200,
            }}
            animate={{
              scale: 1,
              opacity: 1,
              translateY: 0,
            }}
            exit={{
              scale: 0,
              opacity: 0,
              translateY: 200,
            }}
          >
            <Section className="pointer-events-auto w-fit origin-center !flex-row items-center justify-between gap-10 rounded-full border-t-2 border-zinc-800/50 bg-zinc-900/90 py-3 pl-10 pr-6 backdrop-blur-xl">
              <Section>
                <Title level="b" className="font-medium !text-white">
                  {title}
                </Title>
                <Paragraph className="!text-white/50">{description}</Paragraph>
              </Section>

              <Section className="!flex-row gap-3">
                {emojis.map((emoji) => (
                  <Emoji key={emoji.name} emoji={emoji.name} size="medium" />
                ))}
                <IconButton
                  rounded="full"
                  className="!text-zinc-500 hover:!bg-white/5 hover:!text-zinc-200 focus-visible:!bg-white/5 focus-visible:!text-zinc-200"
                  size="medium"
                  icon="Close"
                  onClick={close}
                />
              </Section>
            </Section>
          </Motion>
        )}
      </AnimatePresence>
    </div>
  );
}
