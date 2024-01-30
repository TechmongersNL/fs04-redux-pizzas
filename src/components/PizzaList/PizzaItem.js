import { FavoriteButton } from "./FavoriteButton";

export const PizzaItem = (pizza) => {
  const { name, description, bought, image } = pizza;

  return (
    <li
      className="flex flex-col gap-2 relative h-64 w-64 bg-center rounded-md shadow-lg"
      style={{ backgroundImage: `url(${pizza.image})` }}
    >
      <div className="absolute inset-x-0 bottom-0 bg-white/60 p-4">
        <h3 className="font-bold text-xl">
          {name} <FavoriteButton pizzaId={pizza.id} />
        </h3>
        <p className="text-sm">{description}</p>
        <footer className="text-xs text-yellow-900 dark:text-yellow-500">
          {bought}x bought
        </footer>
      </div>
    </li>
  );
};
