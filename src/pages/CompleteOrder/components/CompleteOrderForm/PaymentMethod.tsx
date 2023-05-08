import { PaymentCardOptions } from "../PaymentCards";
import { PaymentMethodContainer } from "./styles";

export function PaymentMethod() {
  return (
    <PaymentMethodContainer>
      <PaymentCardOptions />
      <PaymentCardOptions />
      <PaymentCardOptions />
    </PaymentMethodContainer>
  )
}