import { HeaderButton, HeaderButtonsContainer, HeaderContainer } from "./styled";
import  logoCoffee  from "../../assets/logo.svg";
import { MapPin, ShoppingCart } from "phosphor-react";

export function Header() {
  return (
    <HeaderContainer>
      <div className="container">
        <img src={logoCoffee} />

        <HeaderButtonsContainer>
        <HeaderButton>
        <MapPin size={20} weight="fill" />
        Belo Horizonte, MG
        </HeaderButton>
        </HeaderButtonsContainer>

      </div>
    </HeaderContainer>
  );
}
