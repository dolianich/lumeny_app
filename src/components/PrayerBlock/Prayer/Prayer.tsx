import styles from './Prayer.module.css';
import { CaretDownIcon } from '@phosphor-icons/react';
import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';

interface Props {
  heading: string;
  text: string;
}

const Prayer = ({ heading, text }: Props) => {
  const [isOpen, setIsOpen] = useState(true);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <div className={styles.wrapper}>
      <div className={styles.heading}>
        <h4>{heading}</h4>
        <span className={`${styles.icon} ${isOpen ? styles.open : ''}`}>
          <CaretDownIcon size={20} onClick={toggle} />
        </span>
      </div>

      <AnimatePresence initial={true}>
        {isOpen ? (
          <motion.div
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ ease: 'easeOut', duration: 0.1 }}
            key="text"
          >
            <p>{text}</p>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
};

export default Prayer;
