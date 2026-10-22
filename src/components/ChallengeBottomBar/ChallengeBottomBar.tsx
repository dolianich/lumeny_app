import styles from './ChallengeBottomBar.module.css';
import Divider from '../Divider/Divider';
import Indicators from './Indicators/Indicators';

interface Props {
  disabled?: boolean;
  onClick: () => void;
  btnText: string;
  buttonType?: 'Static' | 'Correct' | 'Wrong';
  count: number;
  currentIndex: number;
  answerResults: boolean[];
}

const ChallengeBottomBar = ({
  disabled,
  onClick,
  btnText,
  buttonType,
  count,
  currentIndex,
  answerResults,
}: Props) => {
  return (
    <div className={styles.wrapper}>
      <Divider />
      <div className={styles.actions}>
        <Indicators
          count={count}
          currentIndex={currentIndex}
          answerResults={answerResults}
        />
        <button
          onClick={onClick}
          disabled={disabled}
          className={
            buttonType === 'Correct'
              ? styles.btnCorrect
              : buttonType === 'Wrong'
              ? styles.btnWrong
              : styles.btn
          }
        >
          {btnText}
        </button>
      </div>
    </div>
  );
};

export default ChallengeBottomBar;
