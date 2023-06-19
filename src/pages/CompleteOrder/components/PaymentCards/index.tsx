import { InputHTMLAttributes, ReactNode, forwardRef } from "react";
import { PaymentCardContainer, ContentContainer } from "./styles";

type PaymentMethodInputProps = InputHTMLAttributes<HTMLInputElement> & {
  icon: ReactNode;
  label: string;
};

export const PaymentCardOptions = forwardRef<
  HTMLInputElement,
  PaymentMethodInputProps
>(({ id, label, icon, ...props }, ref) => {
  return (
    <PaymentCardContainer>
      <input id={id} type="radio" {...props} name="paymentMethod" ref={ref}/>
      <label htmlFor={id}>
        <ContentContainer>
          {icon}
          {label}
        </ContentContainer>
      </label>
    </PaymentCardContainer>
  );
});
