import styles from './TheoryBlock.module.css';
import Badge from '../Badge/Badge';
import ActionTitle from '../ActionTitle/ActionTitle';
import TheoryText from '../TheoryText/TheoryText';
import TheoryImage from '../TheoryImage/TheoryImage';

interface Props {
  title: string;
  text: string;
  img: string;
}

const TheoryBlock = ({ title, text, img }: Props) => {
  return (
    <div className={styles.theoryContent}>
      <div className={styles.topSection}>
        <Badge variant="Theory" />
        <ActionTitle title={title} />
        <TheoryText text={text} />
      </div>
      <TheoryImage img={img} />
    </div>
  );
};

export default TheoryBlock;
