import styles from './FinishAnim.module.css';
import happy from '../../assets/mascot/happy.svg';
import learn from '../../assets/mascot/learn.svg';
import * as motion from 'motion/react-client';

interface Props {
  variant?: 'TheoryComplete' | 'ChallengeComplete' | 'ChallengeFailed';
}

const FinishAnim = ({ variant }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 1, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.1,
        scale: { type: 'spring', visualDuration: 0.4, bounce: 0.4 },
      }}
      className={styles.wrapper}
    >
      <img
        src={
          variant === 'TheoryComplete'
            ? happy
            : variant === 'ChallengeComplete'
            ? happy
            : learn
        }
        alt="img"
      />
    </motion.div>
  );
};

export default FinishAnim;
