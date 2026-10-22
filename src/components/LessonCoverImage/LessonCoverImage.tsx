import styles from './LessonCoverImage.module.css';
import Lottie from 'lottie-react';
import * as motion from 'motion/react-client';

interface Props {
  img?: object;
}

const LessonCoverImage = ({ img }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.1,
        scale: { type: 'spring', visualDuration: 0.4, bounce: 0.4 },
      }}
      className={styles.wrapper}
    >
      <div className={styles.cover}>
        <Lottie
          animationData={img}
          loop={true}
          autoplay={true}
          className={styles.animation}
        />
      </div>
    </motion.div>
  );
};

export default LessonCoverImage;
