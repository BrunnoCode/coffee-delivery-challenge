import { TitleText } from "../../../../components/Typography";
import { useCart } from "../../../../hooks/useCart";
import { CoffeeCardBuy } from "../CoffeeCardBuy";
import { ConfirmationSection } from "./ConfirmationSection";
import { CoffeesSelectedContainer, DetailsContainer } from "./styles";

export function CoffeeSelected() {
  const { cartItems } = useCart();

  return (
    <CoffeesSelectedContainer>
      <TitleText size="xs" color="subtitle">
        Cafés selecionados
      </TitleText>

      <DetailsContainer>
        {cartItems.map((item) => (
          <CoffeeCardBuy key={item.id} coffee={item}/>
        ))}

        <ConfirmationSection />
      </DetailsContainer>
    </CoffeesSelectedContainer>
  );
}
