import type { Meal } from '@root/types';
import Image from 'next/image';

interface MealImageProps {
  meal: Meal;
}

const MealImage: React.FC<MealImageProps> = ({ meal }) => {
  return (
    <Image
      src={meal.strMealThumb}
      alt={meal.strMeal}
      width={500}
      height={500}
    />
  );
};

export default MealImage;
