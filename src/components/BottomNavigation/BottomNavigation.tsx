import styles from './BottomNavigation.module.css';
import BottomNavBtn from './BottomNavBtn/BottomNavBtn';
import Divider from '../Divider/Divider';
import TheoryProgress from '../TheoryProgress/TheoryProgress';

interface Props {
  onNext?: () => void;
  onPrevious?: () => void;
  count: number;
  currentIndex: number;
}

const BottomNavigation = ({
  onNext,
  onPrevious,
  count,
  currentIndex,
}: Props) => {
  return (
    <div className={styles.wrapper}>
      <Divider />
      <div className={styles.bottom}>
        <BottomNavBtn variant="Previous" onClick={onPrevious} />
        <TheoryProgress count={count} currentIndex={currentIndex} />
        <BottomNavBtn variant="Next" onClick={onNext} />
      </div>
    </div>
  );
};

export default BottomNavigation;
