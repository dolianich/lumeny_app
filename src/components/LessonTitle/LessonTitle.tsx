import styles from './LessonTitle.module.css';

interface Props {
  text?: string;
}

const LessonTitle = ({ text }: Props) => {
  return <h1 className={styles.title}>{text}</h1>;
};

export default LessonTitle;
