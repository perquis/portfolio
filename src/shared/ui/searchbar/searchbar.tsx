"use client";

import clsx from "clsx";
import debounce from "lodash/debounce";
import { useQueryState } from "nuqs";
import { type ChangeEvent, type ComponentProps } from "react";

import { usePlatform } from "@/shared/hooks";
import { Search } from "@/shared/icons/generals";
import KeyBind from "@/shared/ui/key-bind/key-bind";

import { useFocus } from "./use-focus";

type TSearchBar = ComponentProps<"input">;

export default function SearchBar({ className, ...props }: TSearchBar) {
  const { blur, focus, inputRef, isFocus } = useFocus();
  const [query, setQuery] = useQueryState("q");

  const onChange = debounce((e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === "") return setQuery(null);
    return setQuery(e.target.value);
  }, 500);

  const { platform } = usePlatform();
  const specialKey =
    platform === "Mac OS" ? "⌘" : platform === "Windows" ? "Ctrl" : null;

  return (
    <div
      className={clsx(
        "flex w-full items-center gap-2 rounded-[10px] bg-zinc-100 px-3 pr-2 text-sm text-zinc-900 !outline-0 hover:bg-zinc-200 focus:!outline-none focus-visible:bg-zinc-200 focus-visible:!outline-none dark:bg-zinc-900 dark:text-zinc-100 dark:hover:bg-zinc-800 dark:focus-visible:bg-zinc-800",
        isFocus && "outline outline-offset-[3px] outline-indigo-600/75",
        className,
      )}
      onChange={onChange}
    >
      <Search width={20} height={20} className="flex-shrink-0 text-zinc-500" />
      <input
        className="w-full rounded-[10px] bg-transparent py-2.5 !outline-none placeholder:text-zinc-500 focus-visible:!outline-none focus-visible:placeholder:text-zinc-600 dark:hover:placeholder:text-zinc-400 dark:focus-visible:placeholder:text-zinc-400"
        type="search"
        onFocus={focus}
        onBlur={blur}
        defaultValue={query ?? ""}
        ref={inputRef}
        {...props}
      />
      <KeyBind className={clsx(!specialKey && "hidden")}>
        <span>{specialKey}</span> K
      </KeyBind>
    </div>
  );
}
