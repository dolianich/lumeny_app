import styles from './LessonImage.module.css';
import Lottie from 'lottie-react';

interface Props {
  coverImg?: object;
}

const LessonImage = ({ coverImg }: Props) => {
  return (
    <div className={styles.container}>
      {coverImg ? (
        <Lottie animationData={coverImg} loop={true} autoplay={true} />
      ) : (
        <></>
      )}
    </div>
  );
};

export default LessonImage;
