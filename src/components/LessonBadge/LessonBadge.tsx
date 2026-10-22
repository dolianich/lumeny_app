import styles from './LessonBadge.module.css';
import badge from '../../assets/badges/default.svg';

interface Props {
  badgeImg?: string;
  isComplete?: boolean;
  variant?: 'Lesson' | 'Badge';
}

const LessonBadge = ({ badgeImg, isComplete, variant }: Props) => {
  return (
    <div className={variant === 'Badge' ? styles.badge : styles.wrapper}>
      <img src={isComplete ? badgeImg : badge} alt="badge" />
    </div>
  );
};

export default LessonBadge;
