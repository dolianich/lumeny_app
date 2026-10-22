import styles from './TaskCard.module.css';
import CardIcon from './CardIcon/CardIcon';
import BulletPoint from './BulletPoint/BulletPoint';
import Button from '../Button/Button';

type TaskCardType = 'Challenge' | 'Theory';

interface Props {
  variant: TaskCardType;
  description: string;
  bullets: string[];
  onClick?: () => void;
}

const TaskCard = ({ variant, description, bullets, onClick }: Props) => {
  return (
    <div className={styles.card}>
      <div className={styles.topSection}>
        <CardIcon variant={variant} />
        <span>{variant}</span>
      </div>
      <p className={styles.description}>{description}</p>
      <div className={styles.bullets}>
        {bullets.map((bullet) => (
          <BulletPoint pointText={bullet} variant={variant} />
        ))}
      </div>
      <Button variant={variant === 'Theory' ? 'Primary' : 'Secondary'} onClick={onClick}>
        Start{` ${variant}`}
      </Button>
    </div>
  );
};

export default TaskCard;
