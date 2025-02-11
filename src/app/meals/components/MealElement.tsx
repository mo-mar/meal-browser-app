import React from 'react';
import type { Meal } from '@root/types';
import styles from './meal.module.css';

interface MealElementProps {
  meal: Meal;
}

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

const MealElement: React.FC<MealElementProps> = ({ meal }) => {
  return (
    <div className={styles['meal']}>
      <h2 className={styles['title']}>{meal.strMeal}</h2>
      {getIngredients(meal).length ? (
        <div className={styles['ingredients']}>
          {getIngredients(meal).map((ingredient, index) => (
            <div key={index} className={styles['ingredient']}>
              {ingredient}
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default MealElement;
