import { PaymentCardContainer } from "./styles";
import { CreditCard } from "phosphor-react";
export function PaymentCardOptions() {
  return (
    <PaymentCardContainer>
      <CreditCard size={16} />
      Cartão de Crédito
    </PaymentCardContainer>
  );
}
