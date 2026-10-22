import styles from './Input.module.css';

interface Props {
  placeholder?: string;
  type?: string;
}

const Input = ({ placeholder, type }: Props) => {
  return (
    <div className={styles.fieldWrapper}>
      <input
        type={type === 'password' ? 'password' : 'text'}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
