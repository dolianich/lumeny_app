import styles from './SectionIcon.module.css';
import Lottie from 'lottie-react';
import cross from '../../assets/animations/crossBadge.json';

const SectionIcon = () => {
  return (
    <div className={styles.container}>
      <Lottie animationData={cross} className={styles.animation}></Lottie>
    </div>
  );
};

export default SectionIcon;
