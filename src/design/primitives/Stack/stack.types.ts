import type { JSX, ReactNode } from "react";
import type { HasChildren } from "../../shared/capabilities";
import type { HasStack } from "../../shared/capabilities/has-stack";

export interface StackProps
  extends HasStack, React.HTMLAttributes<HTMLDivElement>, HasChildren {
    as?: keyof JSX.IntrinsicElements;
    children: ReactNode
  }
