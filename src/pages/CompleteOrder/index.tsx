import { CoffeeSelected } from "./components/CoffeeSelected";
import { CompleteOrderForm } from "./components/CompleteOrderForm";
import { CompleteOrderContainer } from "./styles";

export function CompleteOrderPage() {
  return (
    <CompleteOrderContainer className="container">
      <CompleteOrderForm />
      <CoffeeSelected />
    </CompleteOrderContainer>
  )
}