import styles from './LessonDescription.module.css';

interface Props {
  text?: string;
}

const LessonDescription = ({ text }: Props) => {
  return <p className={styles.description}>{text}</p>;
};

export default LessonDescription;
