import { Link } from 'react-router-dom';
import styles from './Pray.module.css';
import { CaretRightIcon } from '@phosphor-icons/react';
import * as motion from 'motion/react-client';
import Lottie from 'lottie-react';
import glare from '../../assets/animations/glare.json';

interface Props {
  heading: string;
  description: string;
  link: string;
  img: string;
}

const Pray = ({ heading, link, description, img }: Props) => {
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
      <div className={styles.animation}>
        <img src={img} alt="img" />
        <div className={styles.animContainer}>
          <Lottie animationData={glare} loop={true} autoplay={true} />
        </div>
      </div>
      <div className={styles.innerSection}>
        <h3>{heading}</h3>
        <p>{description}</p>
      </div>
      <div className={styles.btnContainer}>
        <Link to={link} className={styles.btn}>
          <CaretRightIcon size={20} />
        </Link>
      </div>
    </motion.div>
  );
};

export default Pray;
