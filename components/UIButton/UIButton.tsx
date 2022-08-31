import styled, { css } from "styled-components";
import { UIColor } from "../../ts/UIColor.type";

type Props = {
  secondary?: boolean;
  outline?: boolean;
};

export const UIButton = styled.button<Props>`
  ${({ theme, secondary, outline }) => {
    let uiColor: UIColor = "light";
    let uiColorHover: UIColor = "light";
    let uiBg: UIColor = "primary";
    let uiBgHover: UIColor = "primaryHover";
    let uiBoder: UIColor = "primary";
    let uiBoderHover: UIColor = "primaryHover";

    if (secondary) {
      uiBg = uiBoder = "secondary";
      uiBoderHover = uiBgHover = "secondaryHover";
    }

    if (outline) {
      uiColor = uiBoder;
    }

    return css`
      background: ${outline ? "transparent" : theme.colors[uiBg]};
      color: ${theme.colors[uiColor]};
      border: 3px solid ${theme.colors[uiBoder]};

      &:hover {
        background: ${theme.colors[uiBgHover]};
        color: ${theme.colors[uiColorHover]};
        border: 3px solid ${theme.colors[uiBoderHover]};
      }

      &:disabled {
        background: ${outline ? "transparent" : theme.colors[uiBg]};
        color: ${theme.colors[uiColor]};
        border: 3px solid ${theme.colors[uiBoder]};
      }
    `;
  }}

  font-family : inherit;
  font-size: 1rem;
  margin: 1rem;
  padding: 0.75em 1.75rem;
  border-radius: 0.25rem;
  cursor: pointer;

  &:disabled {
    opacity: 0.65;
    cursor: default;
  }
`;
