import type { JSX, ReactNode } from "react";
import type { HasChildren } from "../../shared/capabilities";
import type { HasStack } from "../../shared/capabilities/has-stack";
import type { HasMargin } from "../../shared/capabilities/has-margin";
import type { HasPadding } from "../../shared/capabilities/has-padding";

export interface StackProps
  extends HasStack, React.HTMLAttributes<HTMLDivElement>, HasChildren,HasPadding,HasMargin {
    as?: keyof JSX.IntrinsicElements;
    children: ReactNode
  }
