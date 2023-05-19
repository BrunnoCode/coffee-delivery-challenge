import { InputHTMLAttributes, ReactNode } from "react";
import { PaymentCardContainer, ContentContainer } from "./styles";


type PaymentMethodInputProps = InputHTMLAttributes<HTMLInputElement> & {
  icon: ReactNode;
  label: string
}

export function PaymentCardOptions({id, label, icon, ...props}: PaymentMethodInputProps) {
  return (
    <PaymentCardContainer>
      <input id={id} type="radio" {...props} name="paymentMethod" />
      <label htmlFor={id}>
        <ContentContainer>
          {icon}
            {label}
          </ContentContainer>
      </label>
      
    </PaymentCardContainer>
  );
}
