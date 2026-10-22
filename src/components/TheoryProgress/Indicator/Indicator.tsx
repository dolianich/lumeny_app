import Lottie from 'lottie-react';
import circleBlue from '../../../assets/animations/circleBlue.json';
import styles from './Indicator.module.css';

interface Props {
  state: string;
}

const Indicator = ({ state }: Props) => {
  return (
    <div>
      {state === 'inProgress' ? (
        <div className={styles.inProgress}>
          <Lottie
            animationData={circleBlue}
            className={styles.animation}
          ></Lottie>
        </div>
      ) : state === 'done' ? (
        <div className={styles.container}>
          <div className={styles.done}></div>
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
