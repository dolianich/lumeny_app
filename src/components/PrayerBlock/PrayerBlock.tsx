import styles from './PrayerBlock.module.css';
import Prayer from './Prayer/Prayer';
import Divider from '../Divider/Divider';
import type { PrayerText } from '../../types/types';
import * as motion from 'motion/react-client';
import Lottie from 'lottie-react';
import glare from '../../assets/animations/glare.json';

interface Props {
  title: string;
  prayersText: PrayerText[];
  img: string;
}

const PrayerBlock = ({ title, prayersText, img }: Props) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.topSection}>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.1,
            scale: { type: 'spring', visualDuration: 0.4, bounce: 0.4 },
          }}
          className={styles.animationWrapper}
        >
          <div className={styles.animation}>
            <img src={img} alt="img" />
          </div>
          <div className={styles.animContainer}>
            <Lottie animationData={glare} loop={true} autoplay={true} />
          </div>
        </motion.div>

        <h2>{title}</h2>
      </div>
      <Divider />
      <div className={styles.prayers}>
        {prayersText.map((p) => (
          <Prayer key={p.id} heading={p.heading} text={p.text} />
        ))}
      </div>
    </div>
  );
};

export default PrayerBlock;
