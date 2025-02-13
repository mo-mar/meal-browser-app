import { getMealById } from '@/app/actions';
import type { Meal } from '@root/types';
import styles from '@/app/meals/components/meal.module.css';
import MealImage from '@/app/meals/components/MealImage';

const getIngredients = (meal: Meal): string[] => {
  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    const ingredient = meal[`strIngredient${i}`];
    const measure = meal[`strMeasure${i}`];

    if (ingredient && measure) {
      ingredients.push(`${ingredient} - ${measure}`);
    }
  }

  return ingredients;
};

export default async function MealPage({
  params,
}: {
  params: { slug: number };
}) {
  const { slug } = await params;
  debugger;

  const meal = await getMealById(slug);

  if (!meal) {
    return <div>Meal not found</div>;
  }

  return (
    <div>
      <h1>{meal?.strMeal}</h1>

      <MealImage meal={meal} />

      <div>
        <p>Instructions</p>
        <p>{meal.strInstructions}</p>
      </div>

      <div>
        Ingredients:
        {getIngredients(meal).length ? (
          <div className={styles['ingredients-list']}>
            {getIngredients(meal).map((ingredient, index) => (
              <div key={index} className={styles['ingredient']}>
                {ingredient}
              </div>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
}
