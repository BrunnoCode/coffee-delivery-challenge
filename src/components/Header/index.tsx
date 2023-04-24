import { HeaderContainer } from "./styled";
import  logoCoffee  from "../../assets/logo.svg";

export function Header() {
  return (
    <HeaderContainer>
      <div>
        <img src={logoCoffee} />
      </div>
    </HeaderContainer>
  );
}
