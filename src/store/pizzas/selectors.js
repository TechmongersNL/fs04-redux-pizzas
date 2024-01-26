export const selectNumberOfPizzas = (reduxState) => {
  return reduxState.pizzas.allPizzas.length;
};

export const selectMostBoughtPizza = (reduxState) => {
  if (reduxState.pizzas.allPizzas.length === 0) {
    return null;
  }

  return reduxState.pizzas.allPizzas.reduce((mostBought, nextPizza) => {
    return mostBought.bought >= nextPizza.bought ? mostBought : nextPizza;
  });
};

// this needs to be a PURE function (or we would change the store's state unintentially).
export const selectPizzas = (state) =>
  [...state.pizzas.allPizzas].sort((a, b) => b.bought - a.bought);

export const selectIsFavorite = (pizza) => (state) =>
  state.user.favorites.includes(pizza.id);

export const nextId = (state) =>
  state.pizzas.allPizzas
    .map((p) => p.id)
    .sort()
    .reverse()[0] + 1;
