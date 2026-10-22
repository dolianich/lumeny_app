import styles from '../styles/Page.module.css';
import { useParams } from 'react-router-dom';
import TextButton from '../components/TextButton/TextButton';
import { CaretLeftIcon } from '@phosphor-icons/react';
import LessonCoverImage from '../components/LessonCoverImage/LessonCoverImage';
import LessonTitle from '../components/LessonTitle/LessonTitle';
import LessonDescription from '../components/LessonDescription/LessonDescription';
import ProgressBar from '../components/ProgressBar/ProgressBar';
import Divider from '../components/Divider/Divider';
import { useNavigate } from 'react-router-dom';
import TaskCard from '../components/TaskCard/TaskCard';
import useScrollToTop from '../utils/useScrollToTop';
import courses from '../mockData/data';

const LessonPage = () => {
  useScrollToTop();
  const { lessonId } = useParams();
  const navigate = useNavigate();

  const description =
    'Jesus Christ is the central figure of Christianity, believed by Christians to be the Son of God and the Savior of humanity. In this lesson, you’ll explore His life, teachings, miracles, and divine nature as revealed in the Bible.';

  const lesson = courses
    ?.flatMap((c) => c.lessons)
    .find((l) => l.id === lessonId);

  const theory = {
    description:
      'Learn the biblical foundations of Jesus’ identity and mission',
    bullets: [
      'The Divine Son of God',
      'Teachings & Miracles',
      'Prophecy & Fulfillment',
    ],
  };

  const challenge = {
    description: 'Test your knowledge and reflect on Jesus’ role in your life',
    bullets: ['Quiz Yourself', 'Personal Reflection', 'Scripture Memorization'],
  };

  return (
    <div className={styles.page}>
      <div className={styles.lessonTop}>
        <TextButton onClick={() => navigate('/foundations')}>
          <CaretLeftIcon size={20} weight="regular" />
          Courses
        </TextButton>
        <div className={styles.lessonGeneral}>
          <LessonCoverImage img={lesson?.coverImage} />
          <div className={styles.lessonFullInfo}>
            <div className={styles.lessonInfo}>
              <LessonTitle text={lesson?.title} />
              <LessonDescription text={description} />
            </div>
            <ProgressBar title="Lesson progress" progress={90} />
          </div>
        </div>
      </div>
      <Divider />
      <div className={styles.tasks}>
        <TaskCard
          variant="Theory"
          description={theory.description}
          bullets={theory.bullets}
          onClick={() => navigate('/theory')}
        />
        <TaskCard
          variant="Challenge"
          description={challenge.description}
          bullets={challenge.bullets}
          onClick={() => navigate('/challenge')}
        />
      </div>
    </div>
  );
};

export default LessonPage;
