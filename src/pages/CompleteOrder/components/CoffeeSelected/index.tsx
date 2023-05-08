import { TitleText } from "../../../../components/Typography";
import { CoffeeCardBuy } from "../CoffeeCardBuy";
import { CoffeesSelectedContainer, DetailsContainer } from "./styles";

export function CoffeeSelected() {
  return (
    <CoffeesSelectedContainer>
      <TitleText size="xs" color="subtitle">
        Cafés selecionados
      </TitleText>

      <DetailsContainer>
        <CoffeeCardBuy />
        <CoffeeCardBuy />
        <CoffeeCardBuy />
      </DetailsContainer>
    </CoffeesSelectedContainer>
  );
}
