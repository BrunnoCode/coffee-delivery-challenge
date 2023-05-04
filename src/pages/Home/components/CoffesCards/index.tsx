import {
  AddCartWrapper,
  CardFooter,
  CoffeeCardsContainer,
  Description,
  Name,
  Tags,
} from "./styles";
import { RegularText, TitleText } from "../../../../components/Typography";
import { AccountantInput } from "../../../../components/AccountantInput";
import { ShoppingCart } from "phosphor-react";
import { moneyFormat } from "../../../../utils/formatedMoney";

export interface Coffee {
  id: number;
  tags: string[];
  name: string;
  photo: string;
  price: number;
  description: string;
}

interface CoffeeProps {
  coffee: Coffee;
}

export function CoffeeCard({ coffee }: CoffeeProps) {
const priceFormated = moneyFormat(coffee.price)

  return (
    <CoffeeCardsContainer>
      <img src={`/coffees/${coffee.photo}`}/>

      <Tags>
        {coffee.tags.map((tag) => (
          <span key={`${coffee.id}${tag}`}>{tag}</span>
        ))}
      </Tags>

      <Name>{coffee.name}</Name>
      <Description>
        {coffee.description}
      </Description>

      <CardFooter>
        <div>
          <RegularText size="s">R$</RegularText>
          <TitleText size="m" color="text" as="strong">
            {priceFormated}
          </TitleText>
        </div>

        <AddCartWrapper>
          <AccountantInput />
          <button>
            <ShoppingCart size={22} weight="fill" />
          </button>
        </AddCartWrapper>
      </CardFooter>
    </CoffeeCardsContainer>
  );
}
