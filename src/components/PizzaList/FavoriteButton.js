import { useDispatch, useSelector } from "react-redux";

import classNames from "classnames";
import { selectIsFavorite } from "../../store/pizzas/selectors";
import { toggleFavorites } from "../../store/user/slice";

export const FavoriteButton = ({ pizzaId }) => {
  const dispatch = useDispatch();
  const isFavorite = useSelector(selectIsFavorite({ id: pizzaId }));

  const handleToggle = () => {
    dispatch(toggleFavorites(pizzaId));
  };

  return (
    <button
      className={classNames(isFavorite && "text-red-500")}
      onClick={handleToggle}
    >
      {isFavorite ? "♥" : "♡"}
    </button>
  );
};
