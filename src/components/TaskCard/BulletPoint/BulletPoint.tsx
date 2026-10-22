import styles from './BulletPoint.module.css';
import Lottie from 'lottie-react';
import circleBlue from '../../../assets/animations/circleBlue.json';
import circleGreen from '../../../assets/animations/circleGreen.json';

interface Props {
  pointText?: string;
  variant: string;
}

const BulletPoint = ({ pointText, variant }: Props) => {
  return (
    <div className={styles.wrapper}>
      <Lottie animationData={variant === 'Theory' ? circleBlue : circleGreen} className={styles.animation}></Lottie>{' '}
      <p className={styles.bulletPoint}>{pointText}</p>
    </div>
  );
};

export default BulletPoint;
