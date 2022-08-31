import styled from "styled-components";

export const StyledA = styled.a`
  color: ${({ theme }) => theme.colors.primary};
  margin: 0 0 1rem 0;
  font-size: 1.5rem;

  &:hover {
    color: ${({ theme }) => theme.colors.primaryHover};
  }
`;
