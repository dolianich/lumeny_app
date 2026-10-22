import styles from './CompletedTheory.module.css';
import Button from '../Button/Button';
import FinishAnim from '../FinishAnim/FinishAnim';
import { useNavigate } from 'react-router-dom';
import * as motion from 'motion/react-client';

const CompletedTheory = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <FinishAnim variant="TheoryComplete" />
        <motion.div
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -10, opacity: 0 }}
          transition={{ ease: 'easeOut', duration: 0.2 }}
          className={styles.text}
        >
          <h3>Theory Complete!</h3>
          <p>Test out your knowledge with the challenge!</p>
        </motion.div>
      </div>
      <motion.div
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -10, opacity: 0 }}
        transition={{ ease: 'easeOut', duration: 0.2 }}
        className={styles.btnContainer}
      >
        <Button variant="Primary" onClick={() => navigate('/challenge')}>
          Start Challenge
        </Button>
      </motion.div>
    </div>
  );
};

export default CompletedTheory;
