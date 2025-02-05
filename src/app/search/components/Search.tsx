import styles from '@/app/search/search.module.css';

export default function Search() {
  return (
    <form className={styles['search-form']}>
      <input
        className={styles['search-bar']}
        type="text"
        placeholder="Search for meals..."
      />
      <button className={styles['search-button']} type="submit">
        Search
      </button>
    </form>
  );
}
