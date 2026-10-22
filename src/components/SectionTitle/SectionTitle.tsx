import styles from './SectionTitle.module.css';
import SectionIcon from '../SectionIcon/SectionIcon';

interface Props {
  title: string;
  description: string;
}

const SectionTitle = ({ title, description }: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <SectionIcon />
        <h3 className={styles.title}>{title}</h3>
      </div>
      <p className={styles.subtitle}>
        {description}
      </p>
    </div>
  );
};

export default SectionTitle;
