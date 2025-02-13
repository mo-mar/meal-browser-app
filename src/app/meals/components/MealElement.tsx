import type { Meal } from '@root/types';
import MealImage from './MealImage';
import styles from './meal.module.css';
import Link from 'next/link';

interface MealElementProps {
  meal: Meal;
}

const MealElement: React.FC<MealElementProps> = ({ meal }) => {
  return (
    <Link href={`/meals/${meal.idMeal}`} className={styles['meal']}>
      <div className={styles['meal-info']}>
        <h2 className={styles['title']}>{meal.strMeal}</h2>

        {meal.strCategory ? <p>Category: {meal.strCategory}</p> : null}
        {meal.strArea ? <p>Cuisine: {meal.strArea}</p> : null}
      </div>

      <div className={styles['meal-image']}>
        <MealImage meal={meal} />
      </div>
    </Link>
  );
};

export default MealElement;
