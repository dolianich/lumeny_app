import styles from './LessonCard.module.css';
import LessonImage from './LessonImage/LessonImage';
import Button from '../Button/Button';
import LessonBadge from '../LessonBadge/LessonBadge';
import { Link } from 'react-router-dom';
import * as motion from 'motion/react-client';

interface Props {
  title: string;
  description: string;
  link?: string;
  coverImg?: object;
  badgeImg?: string;
}

const LessonCard = ({
  title,
  description,
  link,
  coverImg,
  badgeImg,
}: Props) => {
  return (
    <motion.div
      initial={{ opacity: 1, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.1,
        scale: { type: 'spring', visualDuration: 0.4, bounce: 0.4 },
      }}
      className={styles.wrapper}
    >
      <section>
        <section className={styles.topSection}>
          <LessonImage coverImg={coverImg} />
          <LessonBadge badgeImg={badgeImg} isComplete={true} />
        </section>
        <section className={styles.middleSection}>
          <h5 className={styles.cardTitle}>{title}</h5>
          <p className={styles.cardDescription}>{description}</p>
        </section>
      </section>
      <Link to={link!} className={styles.buttonLink}>
        <Button variant="Primary">Start</Button>
      </Link>
    </motion.div>
  );
};

export default LessonCard;
