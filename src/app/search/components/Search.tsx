'use client';
import { useState } from 'react';
import styles from '@/app/search/search.module.css';
import { getMeal } from '@/app/actions';
import type { Meal } from '@root/types';

export default function Search() {
  const [data, setData] = useState([]);

  const handleSubmit = (e: SubmitEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;

    const formData = new FormData(form);
    const query = formData.get('search') as string;

    if (!form || !query) return;

    getMeal(query).then((data: Array<Meal>) => {
      setData(data);
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

      {data
        ? data.map((d: meal) => {
            return <p key={d.idMeal}>{d.strMeal}</p>;
          })
        : null}
    </>
  );
}
