import { Minus, Plus } from "phosphor-react";
import { AccountInputContainer, IconWrapper } from "./styles";

export interface AccountantInputProps {
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
}

export function AccountantInput({
  onIncrease,
  onDecrease,
  quantity,
}: AccountantInputProps) {
  return (
    <AccountInputContainer>
      <IconWrapper disabled={quantity <= 1} onClick={onDecrease}>
        <Minus size={14} weight="fill" />
      </IconWrapper>
      <input type="number" readOnly value={quantity} />
      <IconWrapper onClick={onIncrease}>
        <Plus size={14} weight="fill" />
      </IconWrapper>
    </AccountInputContainer>
  );
}
