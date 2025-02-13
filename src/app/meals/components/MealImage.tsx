import type { Meal } from '@root/types';
import Image from 'next/image';
import styles from './meal-image.module.css';
interface MealImageProps {
  meal: Meal;
}

const MealImage: React.FC<MealImageProps> = ({ meal }) => {
  return (
    <div className={styles['meal-image']}>
      <Image
        src={meal.strMealThumb}
        alt={meal.strMeal}
        width={500}
        height={500}
      />
    </div>
  );
};

export default MealImage;
