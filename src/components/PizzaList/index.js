import {
  selectNumberOfPizzas,
  selectPizzas,
} from "../../store/pizzas/selectors";

import { PizzaItem } from "./PizzaItem";
import { selectUser } from "../../store/user/selectors";
import { useSelector } from "react-redux";

// src/components/PizzaList/index.js
export default function PizzaList() {
  const user = useSelector(selectUser);
  const pizzaCount = useSelector(selectNumberOfPizzas);
  const pizzas = useSelector(selectPizzas);

  return (
    <div className="p-8">
      <h1 className="font-bold text-4xl mb-4">Pizza Explorer</h1>
      <p className="mb-2">
        Welcome back, <strong>{user.name}</strong>!
      </p>
      <p className="mb-4 italic">
        Here are <strong>{pizzaCount}</strong> pizzas
      </p>
      <ul className="flex gap-4">
        {pizzas.map((pizza) => (
          <PizzaItem key={pizza.id} {...pizza} />
        ))}
      </ul>
    </div>
  );
}
