import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { CompleteOrderPage } from "./pages/CompleteOrder";
import { DefaultLayout } from "./layouts/DefaultLayouts";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
      <Route path='/' element={<Home />} />
      <Route path='/completeOrder' element={<CompleteOrderPage />} />
      </Route>
    </Routes>
  )
}