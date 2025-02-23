import clsx from "clsx";
import { type ComponentProps, forwardRef } from "react";

import { Motion, Section } from "@/shared/ui";

type ErrorValidation = { error?: string };
type TTextarea = ComponentProps<"textarea"> &
  ErrorValidation & { labelText?: string };

const Textarea = forwardRef<HTMLTextAreaElement, TTextarea>(function Textarea(
  { className, error, id, labelText, ...props },
  ref,
) {
  return (
    <Motion
      animate={
        error
          ? { rotate: [-1, 1.3, 0], translateX: [-1, 1.3, 0] }
          : { rotate: 0, translateX: 0 }
      }
      transition={{ duration: 0.2 }}
      className="w-full"
    >
      <Section className="items-start gap-1">
        <label htmlFor={id}>
          {labelText && (
            <span className="ml-3 text-sm font-medium text-zinc-500">
              {labelText}
            </span>
          )}
        </label>

        <textarea
          className={clsx(
            "min-h-64 w-full rounded-[10px] bg-zinc-100 px-3 py-2.5 text-sm text-zinc-900 transition-colors duration-200 placeholder:text-zinc-400 hover:bg-zinc-200 hover:text-zinc-500 focus-visible:bg-zinc-200 focus-visible:text-zinc-500 dark:bg-zinc-900 dark:text-zinc-100 dark:placeholder:text-zinc-600 dark:hover:bg-zinc-800 dark:hover:placeholder:text-zinc-500 dark:focus-visible:bg-zinc-800 dark:focus-visible:placeholder:text-zinc-500",
            error && "ring-2 ring-rose-500 focus-visible:!outline-none",
            className,
          )}
          ref={ref}
          id={id}
          {...props}
        />
        {error && <span className="text-sm text-rose-500">{error}</span>}
      </Section>
    </Motion>
  );
});

export default Textarea;
