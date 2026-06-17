import { ElementType, ComponentPropsWithoutRef } from "react";
import clsx from "clsx";

type Size = "md" | "lg" | "xl" | "2xl" | "narrow";

type Props<E extends ElementType> = {
  as?: E;
  size?: Size;
  fluid?: boolean;
  className?: string;
  children: React.ReactNode;
} & Omit<ComponentPropsWithoutRef<E>, "as">;

const MAX_WIDTHS: Record<Size, string> = {
  md: "max-w-screen-md",
  lg: "max-w-screen-lg",
  xl: "max-w-screen-xl",
  "2xl": "max-w-[1920px]",
  narrow: "max-w-prose",
};

export default function Container<E extends ElementType = "div">({
  as,
  size = "2xl",
  fluid = false,
  className,
  children,
  ...rest
}: Props<E>) {
  const Tag = as || "div";

  return (
    <Tag
      className={clsx(
        "mx-auto w-full px-4 sm:px-6 lg:px-[160px]",
        !fluid && MAX_WIDTHS[size],
        className
      )}
      {...rest}
    >
      {children}
    </Tag>
  );
}