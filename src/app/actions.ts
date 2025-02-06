'use server';
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
