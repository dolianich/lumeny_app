import styles from './SoonSection.module.css';
import mascot from '../../assets/mascot/default.svg';
import * as motion from 'motion/react-client';

interface Props {
  pageName?: string;
}

const SoonSection = ({ pageName }: Props) => {
  return (
    <motion.div
      initial={{ y: -10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -10, opacity: 0 }}
      transition={{ ease: 'easeOut', duration: 0.2 }}
      className={styles.wrapper}
    >
      <img src={mascot} alt="img" />
      <h3>
        {pageName} section will be only available <br /> in our mobile
        application
      </h3>
    </motion.div>
  );
};

export default SoonSection;
