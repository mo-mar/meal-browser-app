import styles from './homepage.module.css';
import Search from '@/app/search/components/Search';

export default function HomePage() {
  return (
    <main className={styles['home-page']}>
      <h1>Meal Browser</h1>
      <p>Welcome to the home page.</p>
      <Search />
    </main>
  );
}
