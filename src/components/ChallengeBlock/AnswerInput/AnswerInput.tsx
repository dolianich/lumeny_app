import styles from './AnswerInput.module.css';

interface Props {
  id?: string;
  name?: string;
  checked?: boolean;
  onChange: () => void;
  labelFor: string;
  labelText: string;
  showCorrect?: boolean;
  isCorrect?: boolean;
}

const AnswerInput = ({
  id,
  name,
  checked,
  onChange,
  labelFor,
  labelText,
  showCorrect = false,
  isCorrect = false,
}: Props) => {
  const getAnswerStyle = () => {
    if (!showCorrect) return '';
    if (isCorrect) return styles.correct;
    if (checked && !isCorrect) return styles.incorrect;
    return '';
  };
  return (
    <div className={`${styles.answerBtn} ${getAnswerStyle()}`}>
      <input
        type="radio"
        name={name}
        id={id}
        checked={checked}
        onChange={onChange}
      />
      <label htmlFor={labelFor}>{labelText}</label>
    </div>
  );
};

export default AnswerInput;
