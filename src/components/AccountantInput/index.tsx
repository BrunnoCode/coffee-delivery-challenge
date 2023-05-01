import { Minus, Plus } from "phosphor-react";
import { AccountInputContainer, IconWrapper } from "./styles";

export function AccountantInput() {
  return(
    <AccountInputContainer>
      <IconWrapper>
        <Minus size={14} weight="fill"/>
      </IconWrapper>
      <input type="number" readOnly value={1} />
      <IconWrapper>
        <Plus size={14} weight="fill"/>
      </IconWrapper>
    </AccountInputContainer>
  )
}