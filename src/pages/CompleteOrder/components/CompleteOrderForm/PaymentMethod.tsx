import { Bank, CreditCard, Money } from "phosphor-react";
import { PaymentCardOptions } from "../PaymentCards";
import { PaymentMethodContainer } from "./styles";

export const paymentMethods = {
  credit: {
    label: "Cartão de Crédito",
    icon: <CreditCard size={16} />,
  },
  debit: {
    label: "Cartão de Débito",
    icon: <Bank size={16} />,
  },
  money: {
    label: "Dinheiro",
    icon: <Money size={16} />,
  },
};

export function PaymentMethod() {
  return (
    <PaymentMethodContainer>
      {Object.entries(paymentMethods).map(([key, { label, icon }]) => (
        <PaymentCardOptions
          key={label}
          id={key}
          icon={icon}
          label={label}
          value={key}
        />
      ))}
    </PaymentMethodContainer>
  );
}
