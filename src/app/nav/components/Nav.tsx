import Link from 'next/link';
import styles from '@/app/nav/nav.module.css';

export default function Nav() {
  return (
    <nav>
      <ul className={styles['nav-list']}>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}
