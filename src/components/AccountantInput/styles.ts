import styled from "styled-components";

export const AccountInputContainer = styled.div`
  flex: 1;
  background: ${({ theme }) => theme.colors["base-button"]};
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 4px;
  border-radius: 6px;
  padding: 0.5rem;

  input {
    text-align: center;
    width: 100%;
    background: none;
    border: none;
    color: ${({ theme }) => theme.colors["base-title"]};

    &:focus {
      outline: none;
    }
  }
`;

export const IconWrapper = styled.button.attrs({
  type: "button",
})`
  width: 1rem;
  height: 1rem;
  border: 0;
  background: transparent;
  transition: .2s;
  color: ${({theme})=> theme.colors["brand-purple"]};

  &:disabled {
    opacity: 0.4;
  }

  &:not(:disabled):hover {
    color: ${({theme})=> theme.colors["brand-purple-dark"]}
  }
`;
