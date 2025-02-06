import type { Meal } from '@root/types';

export default function Meal(meal: Meal) {
  return (
    <div>
      <h2>{meal.strMeal}</h2>
    </div>
  );
}
