import { match } from "ts-pattern";

import type { Color } from "@/interfaces/tailwindcss";

export const getColorClass = (color: Color) =>
  match(color)
    .with(
      "rose",
      () =>
        "bg-rose-100 dark:bg-rose-950 border-rose-300 dark:border-rose-700 text-rose-600 dark:text-rose-400",
    )
    .with(
      "blue",
      () =>
        "bg-blue-100 dark:bg-blue-950 border-blue-300 dark:border-blue-700 text-blue-600 dark:text-blue-400",
    )
    .with(
      "green",
      () =>
        "bg-green-100 dark:bg-green-950 border-green-300 dark:border-green-700 text-green-600 dark:text-green-400",
    )
    .with(
      "yellow",
      () =>
        "bg-yellow-100 dark:bg-yellow-950 border-yellow-300 dark:border-yellow-700 text-yellow-600 dark:text-yellow-400",
    )
    .with(
      "red",
      () =>
        "bg-red-100 dark:bg-red-950 border-red-300 dark:border-red-700 text-red-600 dark:text-red-400",
    )
    .with(
      "amber",
      () =>
        "bg-amber-100 dark:bg-amber-950 border-amber-300 dark:border-amber-700 text-amber-600 dark:text-amber-400",
    )
    .with(
      "orange",
      () =>
        "bg-orange-100 dark:bg-orange-950 border-orange-300 dark:border-orange-700 text-orange-600 dark:text-orange-400",
    )
    .with(
      "indigo",
      () =>
        "bg-indigo-100 dark:bg-indigo-950 border-indigo-300 dark:border-indigo-700 text-indigo-600 dark:text-indigo-400",
    )
    .with(
      "purple",
      () =>
        "bg-purple-100 dark:bg-purple-950 border-purple-300 dark:border-purple-700 text-purple-600 dark:text-purple-400",
    )
    .with(
      "pink",
      () =>
        "bg-pink-100 dark:bg-pink-950 border-pink-300 dark:border-pink-700 text-pink-600 dark:text-pink-400",
    )
    .with(
      "cyan",
      () =>
        "bg-cyan-100 dark:bg-cyan-950 border-cyan-300 dark:border-cyan-700 text-cyan-600 dark:text-cyan-400",
    )
    .with(
      "teal",
      () =>
        "bg-teal-100 dark:bg-teal-950 border-teal-300 dark:border-teal-700 text-teal-600 dark:text-teal-400",
    )
    .with(
      "emerald",
      () =>
        "bg-emerald-100 dark:bg-emerald-950 border-emerald-300 dark:border-emerald-700 text-emerald-600 dark:text-emerald-400",
    )
    .with(
      "lime",
      () =>
        "bg-lime-100 dark:bg-lime-950 border-lime-300 dark:border-lime-700 text-lime-600 dark:text-lime-400",
    )
    .with(
      "fuchsia",
      () =>
        "bg-fuchsia-100 dark:bg-fuchsia-950 border-fuchsia-300 dark:border-fuchsia-700 text-fuchsia-600 dark:text-fuchsia-400",
    )
    .with(
      "violet",
      () =>
        "bg-violet-100 dark:bg-violet-950 border-violet-300 dark:border-violet-700 text-violet-600 dark:text-violet-400",
    )
    .with(
      "zinc",
      () =>
        "bg-zinc-100 dark:bg-zinc-900 border-zinc-300 dark:border-zinc-700 text-zinc-600 dark:text-zinc-400",
    )
    .with(
      "stone",
      () =>
        "bg-stone-100 dark:bg-stone-950 border-stone-300 dark:border-stone-700 text-stone-600 dark:text-stone-400",
    )
    .with(
      "neutral",
      () =>
        "bg-neutral-100 dark:bg-neutral-950 border-neutral-300 dark:border-neutral-700 text-neutral-600 dark:text-neutral-400",
    )
    .with(
      "slate",
      () =>
        "bg-slate-100 dark:bg-slate-950 border-slate-300 dark:border-slate-700 text-slate-600 dark:text-slate-400",
    )
    .run();
