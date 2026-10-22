import styles from './TextButton.module.css';

interface Props {
  children?: React.ReactNode;
  onClick: () => void;
}

const TextButton = ({ children, onClick }: Props) => {
  return (
    <button onClick={onClick} className={styles.btn}>
      {children}
    </button>
  );
};

export default TextButton;
