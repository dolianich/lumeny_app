import styles from './BottomNavBtn.module.css';
import { CaretRightIcon, CaretLeftIcon } from '@phosphor-icons/react';

type ButtonVariant = 'Next' | 'Previous';

interface Props {
  variant?: ButtonVariant;
  onClick?: () => void;
}

const BottomNavBtn = ({ variant, onClick }: Props) => {
  const variantClass = styles[`btn${variant}`];
  const buttonClasses = `${styles.btn} ${variantClass}`.trim();
  return (
    <button className={buttonClasses} onClick={onClick}>
      {variant === 'Previous' && <CaretLeftIcon size={20} />}
      <span>{variant}</span>
      {variant === 'Next' && <CaretRightIcon size={20} />}
    </button>
  );
};

export default BottomNavBtn;
