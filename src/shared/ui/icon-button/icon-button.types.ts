/* eslint-disable @typescript-eslint/consistent-type-imports */
import type { ComponentProps } from "react";

import type { Rounded, Size } from "@/interfaces/variants";
import * as icons from "@/shared/icons/generals";

export type ButtonProps = ComponentProps<"button">;
type ExcludedSize = Exclude<Size, "tiny">;
type IconName = keyof typeof icons;

export interface IIconButton {
  size: ExcludedSize;
  icon: IconName;
  rounded?: Rounded;
  children: ButtonProps["children"];
}

type IconButtonWithIcon = Omit<IIconButton, "children"> & {
  icon: IconName;
  children?: never;
};
type IconButtonWithChildren = Omit<IIconButton, "icon"> & {
  children: ButtonProps["children"];
  icon?: never;
};

export type TIconButton = IconButtonWithIcon | IconButtonWithChildren;

export type ButtonPropsWithSize = Pick<IIconButton, "size" | "rounded"> &
  ButtonProps;
export type IconButtonProps = TIconButton & ButtonProps;
