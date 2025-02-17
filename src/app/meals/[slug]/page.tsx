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

const formatInstructions = (string: string): string => {
  return string;
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
    <div className={styles['meal-page-container']}>
      <div className={styles['meal-header']}>
        <div>
          <h1>{meal?.strMeal}</h1>

          <div className="flex flex-column gap-8">
            {meal.strCategory ? <p>Category: {meal.strCategory}</p> : null}
            {meal.strArea ? <p>Cuisine: {meal.strArea}</p> : null}
          </div>
        </div>

        <div className={styles['meal-image-container']}>
          <MealImage meal={meal} />
        </div>
      </div>

      <div className={styles['meal-info']}>
        <div className="flex flex-column gap-8">
          <span className={`${styles.label} margin-b-8`}>Ingredients:</span>
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
        <div className="flex flex-column gap-8">
          <p className={`${styles['label']} margin-b-8`}>Instructions</p>
          <p className={styles['instructions-text']}>
            {formatInstructions(meal.strInstructions)}
          </p>
        </div>
      </div>
    </div>
  );
}
