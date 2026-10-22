import styles from './Indicators.module.css';
import Indicator from './Indicator/Indicator';

type IndicatorState = 'static' | 'inProgress' | 'doneCorrect' | 'doneWrong';
interface Props {
  count: number;
  currentIndex: number;
  answerResults: boolean[];
}

const Indicators = ({ count, currentIndex, answerResults }: Props) => {
  const getIndicatorState = (index: number): IndicatorState => {
    if (index === currentIndex) return 'inProgress';
    if (index < currentIndex) {
      if (answerResults[index] !== undefined) {
        return answerResults[index] ? 'doneCorrect' : 'doneWrong';
      }
      return 'static';
    }
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

export default Indicators;
