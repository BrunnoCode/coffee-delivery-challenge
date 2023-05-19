import styled from "styled-components";

export const ButtonContainer = styled.button`
  background: ${({ theme }) => theme.colors["brand-yellow"]};
  color: ${({ theme }) => theme.colors["base-white"]};
  font-size: ${({ theme }) => theme.textSizes["components-button-g"]};
  border: none;
  text-transform: uppercase;
  line-height: 1.3rem;
  padding: 0.75rem 2.8rem;
  border-radius: 6px;
  transition: 0.5s;
  font-weight: 700;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.7;
  }

  &:not(:disabled):hover {
    background: ${({ theme }) => theme.colors["brand-yellow-dark"]};
  }
`;
