import styles from './TheoryText.module.css';

interface Props {
  text: string;
}

const TheoryText = ({ text }: Props) => {
  return <p className={styles.text}>{text}</p>;
};

export default TheoryText;
