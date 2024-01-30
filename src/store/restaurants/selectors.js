export const selectRestaurants = (reduxState) => {
  const clonedArray = [...reduxState.restaurants.all];
  return clonedArray.sort((a, b) => a.name.localeCompare(b.name));
};

export const selectRestaurantsWithPizzas = ({ restaurants, pizzas }) =>
  restaurants.all.map((restaurant) => ({
    ...restaurant,
    pizzas: pizzas.allPizzas.filter((pizza) =>
      restaurant.pizzas.includes(pizza.id)
    ),
  }));

export const selectRestaurantsThatSellPizza = (pizzaId) => (state) => {
  const allRestaurantsWithPizzas = selectRestaurantsWithPizzas(state);
  return allRestaurantsWithPizzas.filter((restaurant) =>
    restaurant.pizzas.map(({ id }) => id).includes(pizzaId)
  );
};
