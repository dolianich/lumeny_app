import styles from './CardsSection.module.css';
import LessonCard from '../LessonCard/LessonCard';
import type { LessonsList } from '../../types/types';

interface Props {
  lessons?: LessonsList;
}

const CardsSection = ({ lessons }: Props) => {
  return (
    <section className={styles.container}>
      {lessons!.map((lesson) => (
        <LessonCard
          key={lesson.id}
          title={lesson.title}
          description={lesson.description}
          link={`/foundations/${lesson.id}`}
          coverImg={lesson.coverImage}
          badgeImg={lesson.badge}
        />
      ))}
    </section>
  );
};

export default CardsSection;
