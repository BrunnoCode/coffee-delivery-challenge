import { Trash } from "phosphor-react";
import { AccountantInput } from "../../../../components/AccountantInput";
import { RegularText } from "../../../../components/Typography";
import { AddCoffeeAmountContainer, CoffeeCardBuyContainer, RemoveButton } from "./styles";

export function CoffeeCardBuy() {
  return (
    <CoffeeCardBuyContainer>
      <div>
        <img src="https://plus.unsplash.com/premium_photo-1675435644687-562e8042b9db?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGNvZmZlZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />

        <div>
          <RegularText color="subtitle">Expresso Tradicional</RegularText>
          <AddCoffeeAmountContainer>
            <AccountantInput />
            <RemoveButton>
              <Trash size={16}/>
              REMOVER
            </RemoveButton>
          </AddCoffeeAmountContainer>
        </div>
      </div>
      <p>R$ 9,90</p>
    </CoffeeCardBuyContainer>
  )
}