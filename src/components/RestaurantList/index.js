import { selectPizzas } from "../../store/pizzas/selectors";
import { selectRestaurantsThatSellPizza } from "../../store/restaurants/selectors";
// src/components/PizzaList.js
import { useSelector } from "react-redux";
import { useState } from "react";

export function RestaurantList() {
  const pizzas = useSelector(selectPizzas);

  const [selectedPizza, setSelectedPizza] = useState(pizzas[0].id);

  const restaurants = useSelector(
    selectRestaurantsThatSellPizza(selectedPizza)
  );

  return (
    <div>
      <h1>Restaurants</h1>
      <ul>
        {restaurants.map((restaurant) => (
          <li key={restaurant.id}>
            {restaurant.name}
            <ul>
              {restaurant.pizzas.map((pizza) => (
                <li key={pizza.id}>{pizza.name}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
      <h2>
        Who sells{" "}
        <select
          value={selectedPizza}
          onChange={(e) => {
            setSelectedPizza(parseInt(e.target.value));
          }}
        >
          {pizzas.map((pizza) => (
            <option key={pizza.id} value={pizza.id}>
              {pizza.name}
            </option>
          ))}
        </select>{" "}
        ?
      </h2>
    </div>
  );
}
