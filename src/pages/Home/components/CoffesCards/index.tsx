import { CoffeeCardsContainer, Name, Tags } from "./styles";
import coffe0 from "../../../../assets/Coffee.png";
export function CoffeeCard() {
  return (
    <CoffeeCardsContainer>
      <img src={coffe0} />

      <Tags>
        <span>Tradicional</span>
        <span>Com leite</span>
      </Tags>

      <Name>Expresso Tradicional</Name>
    </CoffeeCardsContainer>
  );
}
