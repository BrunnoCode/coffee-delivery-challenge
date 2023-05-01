import { AddCartWrapper, CardFooter, CoffeeCardsContainer, Description, Name, Tags } from "./styles";
import coffe0 from "../../../../assets/Coffee.png";
import { RegularText, TitleText } from "../../../../components/Typography";
import { AccountantInput } from "../../../../components/AccountantInput";
import { ShoppingCart } from "phosphor-react";
export function CoffeeCard() {
  return (
    <CoffeeCardsContainer>
      <img src={coffe0} />

      <Tags>
        <span>Tradicional</span>
        <span>Com leite</span>
      </Tags>

      <Name>Expresso Tradicional</Name>
      <Description>O tradicional café feito com água quente e grãos moídos</Description>

      <CardFooter>
        <div>
          <RegularText size="s">R$</RegularText>
          <TitleText size="m" color="text" as="strong">9.90</TitleText>
        </div>

        <AddCartWrapper>
          <AccountantInput />
          <button>
            <ShoppingCart size={22} weight="fill"/>
          </button>
        </AddCartWrapper>
      </CardFooter>
    </CoffeeCardsContainer>
  );
}
