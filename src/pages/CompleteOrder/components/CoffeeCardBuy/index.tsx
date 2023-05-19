import { Trash } from "phosphor-react";
import { AccountantInput } from "../../../../components/AccountantInput";
import { RegularText } from "../../../../components/Typography";
import {
  AddCoffeeAmountContainer,
  CoffeeCardBuyContainer,
  RemoveButton,
} from "./styles";
import { CartItem } from "../../../../contexts/CartContext";
import { moneyFormat } from "../../../../utils/formatedMoney";
import { useCart } from "../../../../hooks/useCart";

interface CoffeeCartCardProps {
  coffee: CartItem;
}

export function CoffeeCardBuy({ coffee }: CoffeeCartCardProps) {
  const {changeCartItemQuantity, removeCartItem} = useCart()

  function handleIncrease() {
    changeCartItemQuantity(coffee.id, 'increase')
  }

  function handleDecrease() {
    changeCartItemQuantity(coffee.id, 'decrease')
  }

  function handleRemove() {
    removeCartItem(coffee.id)
  }

  const coffeeTotal = coffee.price * coffee.quantity;
  const formattedPrice = moneyFormat(coffeeTotal);

  return (
    <CoffeeCardBuyContainer>
      <div>
        <img src={`/coffees/${coffee.photo}`} />

        <div>
          <RegularText color="subtitle">{coffee.name}</RegularText>
          <AddCoffeeAmountContainer>
            <AccountantInput
              quantity={coffee.quantity}
              onIncrease={handleIncrease}
              onDecrease={handleDecrease}
            />
            <RemoveButton onClick={handleRemove}>
              <Trash size={16} />
              REMOVER
            </RemoveButton>
          </AddCoffeeAmountContainer>
        </div>
      </div>
      <p>R${formattedPrice}</p>
    </CoffeeCardBuyContainer>
  );
}
