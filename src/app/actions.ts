import type { Meal } from '@root/types';

export async function getMeal(query: string): Promise<Meal[]> {
  try {
    const res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
    );
    const { meals } = await res.json();

    if (meals.length) {
      return meals;
    }
  } catch (error) {
    console.warn(error);
  }

  return [];
}

export async function getMealById(id: number): Promise<Meal | null> {
  debugger;

  try {
    const res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    );

    const { meals } = await res.json();
    debugger;
    if (meals.length) {
      return meals[0];
    }
  } catch (error) {
    console.warn(error);
  }

  return null;
}
