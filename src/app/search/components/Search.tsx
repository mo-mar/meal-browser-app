'use client';
import { FormEvent, useState } from 'react';
import styles from '@/app/search/search.module.css';
import { getMeal } from '@/app/actions';
import type { Meal } from '@root/types';
import LoadingSpinner from './LoadingSpinner';
import MealElement from '@/app/meals/components/MealElement';

export default function Search() {
  const [data, setData] = useState<Meal[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasNoResults, setHasNoResults] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;

    const formData = new FormData(form);
    const query = formData.get('search') as string;

    if (!form || !query) return;

    setIsLoading(true);
    getMeal(query).then((data: Array<Meal>) => {
      setHasNoResults(false);

      if (!data.length) {
        setHasNoResults(true);
      }
      setData(data);
      setIsLoading(false);
    });
  };

  return (
    <>
      <form className={styles['search-form']} onSubmit={(e) => handleSubmit(e)}>
        <input
          name="search"
          className={styles['search-bar']}
          type="text"
          placeholder="Search for meals..."
        />
        <button className={styles['search-button']} type="submit">
          Search
        </button>
      </form>

      {isLoading ? (
        <LoadingSpinner />
      ) : (
        data?.map((item: Meal, index) => {
          return <MealElement key={index} meal={item} />;
        })
      )}

      {hasNoResults ? <div>No results found</div> : null}
    </>
  );
}
