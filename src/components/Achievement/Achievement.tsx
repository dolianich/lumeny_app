import styles from './Achievement.module.css';
import LessonBadge from '../LessonBadge/LessonBadge';

interface Props {
  badgeImg?: string;
  isComplete?: boolean;
}

const Achievement = ({ badgeImg, isComplete }: Props) => {
  return (
    <div className={styles.wrapper}>
      <LessonBadge
        variant="Badge"
        badgeImg={badgeImg}
        isComplete={isComplete}
      />
    </div>
  );
};

export default Achievement;
