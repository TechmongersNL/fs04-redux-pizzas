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
    <div>
      <h1>Pizza Explorer</h1>
      <p>
        Welcome back, <strong>{user.name}</strong>!
      </p>
      <p>
        Here are <strong>{pizzaCount}</strong> pizzas
      </p>
      <ul>
        {pizzas.map((pizza) => (
          <PizzaItem key={pizza.id} {...pizza} />
        ))}
      </ul>
    </div>
  );
}
