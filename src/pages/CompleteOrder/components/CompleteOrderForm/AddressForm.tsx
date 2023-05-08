import { Input } from "../../../../components/Inputs";
import { AddressFormContainer } from "./styles";

export function AddressForm() {
  return (
    <AddressFormContainer>
      <Input placeholder="CEP" type="number" className="cep"/>
      <Input placeholder="Rua" className="rua"/>
      <Input placeholder="Número" type="number" />
      <Input placeholder="Complemento" className="complement" />
      <Input placeholder="Bairro"/>
      <Input placeholder="Cidade"/>
      <Input placeholder="UF"/>
    </AddressFormContainer>
  )
}