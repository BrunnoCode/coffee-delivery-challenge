import { HeaderButton, HeaderButtonsContainer, HeaderContainer } from "./styled";
import  logoCoffee  from "../../assets/logo.svg";
import { MapPin, ShoppingCart } from "phosphor-react";

export function Header() {
  return (
    <HeaderContainer>
      <div className="container">
        <img src={logoCoffee} />

        <HeaderButtonsContainer>
        <HeaderButton variant="purple">
        <MapPin size={20} weight="fill" />
        Belo Horizonte, MG
        </HeaderButton>
        <HeaderButton variant="yellow">
        <ShoppingCart size={20} weight="fill"/>
        </HeaderButton>
        </HeaderButtonsContainer>

      </div>
    </HeaderContainer>
  );
}
