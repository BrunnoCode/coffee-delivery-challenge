import styled from "styled-components";

export const HeaderContainer = styled.div`
  width: 100%;
  height: 6.5rem;
  background: ${(props) => props.theme.colors["base-background"]};
  display: flex;
  justify-content: center;
  align-items: center;

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`
export const HeaderButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`
export const HeaderButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 2.3rem;
  height: 2.3rem;
  gap: 4px;
  border-radius: 6px;
  border: none;
  padding:  0 0.5rem;
  position: relative;
  font-size: ${({ theme })=> theme.textSizes["text-regular-s"]};
`