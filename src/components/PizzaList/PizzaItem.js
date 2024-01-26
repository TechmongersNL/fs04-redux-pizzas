import { FavoriteButton } from "./FavoriteButton";

export const PizzaItem = (pizza) => {
  const { name, description, bought } = pizza;

  return (
    <li>
      <h3>
        {name} <FavoriteButton pizzaId={pizza.id} />
      </h3>
      <p>{description}</p>
      <footer>{bought}x bought</footer>
    </li>
  );
};
