import styles from './CompletedChallenge.module.css';
import FinishAnim from '../FinishAnim/FinishAnim';
import * as motion from 'motion/react-client';

interface Props {
  onRestart: () => void;
  status?: 'Success' | 'Failed';
}

const CompletedChallenge = ({ onRestart, status }: Props) => {
  return (
    <div className={styles.container}>
      <FinishAnim
        variant={status === 'Success' ? 'ChallengeComplete' : 'ChallengeFailed'}
      />
      {status === 'Success' ? (
        <motion.div
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -10, opacity: 0 }}
          transition={{ ease: 'easeOut', duration: 0.2 }}
          className={styles.text}
        >
          <h3>Congratulations!</h3>
          <p>You've successfully completed the challenge!</p>
          <div className={styles.pointsWrapper}></div>
        </motion.div>
      ) : (
        <motion.div
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -10, opacity: 0 }}
          transition={{ ease: 'easeOut', duration: 0.2 }}
          className={styles.text}
        >
          <h3>Let's Try Again</h3>
          <p>Don't give up! Try one more time</p>
        </motion.div>
      )}
      <motion.div
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -10, opacity: 0 }}
        transition={{ ease: 'easeOut', duration: 0.2 }}
        className={styles.btnFinish}
      >
        <button onClick={onRestart}>
          {status === 'Success' ? 'Finish' : 'Try Again'}
        </button>
      </motion.div>
    </div>
  );
};

export default CompletedChallenge;
