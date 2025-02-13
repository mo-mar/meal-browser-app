import styles from './loading.module.css';

const LoadingSpinner: React.FC = () => {
  return (
    <div className={styles['loading-spinner-container']}>
      <div className={styles.spinner}></div>
    </div>
  );
};

export default LoadingSpinner;
