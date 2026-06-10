import styled from "styled-components";
import type { DividerProps } from "./devider.types";

const StyledDivider = styled.hr<DividerProps>`
  border: none;
  background-color: var(
    --color-border,
    ${({ color = '#c9c9c989' }) => color}
  );
  margin: ${({ spacing = 4 }) => `var(--spacing-${spacing}, 1rem) 0`};
  ${({ orientation }) =>
    orientation === "vertical"
      ? "width: 1px; height: auto; align-self: stretch; margin: 0 var(--spacing-2, 0.5rem);"
      : "height: 1px; width: 100%;"}
`;

export function Divider({ spacing, orientation = "horizontal" }: DividerProps) {
  return <StyledDivider spacing={spacing} orientation={orientation} />;
}
