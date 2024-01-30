import { AddPizzaForm } from "./components/AddPizzaForm";
import PizzaList from "./components/PizzaList";
import { RestaurantList } from "./components/RestaurantList";

function App() {
  return (
    <div className="flex flex-col h-screen w-screen bg-yellow-50 dark:bg-yellow-950 text-slate-900 dark:text-slate-200">
      <PizzaList />
      <AddPizzaForm />
      <RestaurantList />
    </div>
  );
}

export default App;
