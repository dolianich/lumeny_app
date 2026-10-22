import styles from './ProgressBar.module.css';

interface Props {
  title?: string;
  progress?: number;
}

const ProgressBar = ({ title, progress }: Props) => {
  return (
    <div className={styles.progressBar}>
      <div className={styles.top}>
        <span>{title}</span>
        <span>{progress}%</span>
      </div>
      <div className={styles.bar}>
        <div className={styles.progress} style={{width: `${progress}%`}}></div>
      </div>
    </div>
  );
};

export default ProgressBar;
