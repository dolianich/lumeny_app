import styles from './TheoryProgress.module.css';
import Indicator from './Indicator/Indicator';

type IndicatorState = 'static' | 'inProgress' | 'done';
interface Props {
  count: number;
  currentIndex: number;
}

const TheoryProgress = ({ count, currentIndex }: Props) => {
  const getIndicatorState = (index: number): IndicatorState => {
    if (index === currentIndex) return 'inProgress';
    if (index < currentIndex) return 'done';
    return 'static';
  };
  return (
    <div className={styles.wrapper}>
      {Array.from({ length: count }).map((_, index) => (
        <Indicator 
          key={`indicator-${index}`}
          state={getIndicatorState(index)}
        />
      ))}
    </div>
  );
};

export default TheoryProgress;
