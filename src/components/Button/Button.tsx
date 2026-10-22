import styles from './Button.module.css';

type ButtonVariant = 'Primary' | 'Secondary';

interface Props {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: ButtonVariant;
  className?: string;
}

const Button = ({ children, onClick, variant, className = '' }: Props) => {
  const variantClass = styles[`btn${variant}`];
  const buttonClasses = `${styles.btn} ${variantClass} ${className}`.trim();
  return (
    <button onClick={onClick} className={buttonClasses}>
      {children}
    </button>
  );
};

export default Button;
