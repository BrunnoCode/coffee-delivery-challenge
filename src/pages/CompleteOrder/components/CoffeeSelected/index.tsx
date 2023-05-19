import { TitleText } from "../../../../components/Typography";
import { CoffeeCardBuy } from "../CoffeeCardBuy";
import { ConfirmationSection } from "./ConfirmationSection";
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

        <ConfirmationSection />
      </DetailsContainer>
    </CoffeesSelectedContainer>
  );
}
