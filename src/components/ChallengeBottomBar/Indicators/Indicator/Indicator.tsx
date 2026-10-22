import styles from './Indicator.module.css';
import Lottie from 'lottie-react';
import circleGreen from '../../../../assets/animations/circleGreen.json';

interface Props {
  state: string;
}

const Indicator = ({ state }: Props) => {
  return (
    <div>
      {state === 'inProgress' ? (
        <div className={styles.inProgress}>
          <Lottie
            animationData={circleGreen}
            className={styles.animation}
          ></Lottie>
        </div>
      ) : state === 'doneCorrect' ? (
        <div className={styles.container}>
          <div className={styles.doneCorrect}></div>
        </div>
      ) : state === 'doneWrong' ? (
        <div className={styles.container}>
          <div className={styles.doneWrong}></div>
        </div>
      ) : (
        <div className={styles.container}>
          <div className={styles.static}></div>
        </div>
      )}
    </div>
  );
};

export default Indicator;
