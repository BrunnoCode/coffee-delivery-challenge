import styled from "styled-components";
import { sectionBaseStyle } from "../../styles";

export const CoffeesSelectedContainer = styled.div`
  width: 40rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;
export const DetailsContainer = styled(sectionBaseStyle)`
  display: flex;
  flex-direction: column;
  border-radius: 4px 44px 4px 44px;
`;

export const ConfirmationSectionContainer = styled.section`
  margin-block-start: 0.8rem;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;


  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`
