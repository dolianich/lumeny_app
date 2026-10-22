import styles from './ChallengeBlock.module.css';
import Badge from '../Badge/Badge';
import AnswerInput from './AnswerInput/AnswerInput';
import ActionTitle from '../ActionTitle/ActionTitle';

interface Props {
  question: string;
  options: {
    id: number;
    text: string;
    isCorrect: boolean;
  }[];
  radioName: string;
  selectedOptionId: number | null;
  onSelect: (optionId: number) => void;
  answerChecked: boolean;
  showCorrect: boolean;
}

const ChallengeBlock = ({
  question,
  options,
  radioName,
  selectedOptionId,
  onSelect,
  showCorrect
}: Props) => {
  return (
    <div className={styles.challengeContent}>
      <Badge variant="Challenge" />
      <ActionTitle title={question} />
      <div className={styles.answers}>
        {options.map((option) => (
          <AnswerInput
            key={option.id}
            id={`option-${option.id}`}
            name={radioName}
            checked={selectedOptionId === option.id}
            labelFor={`option-${option.id}`}
            labelText={option.text}
            onChange={() => onSelect(option.id)}
            showCorrect={showCorrect}
            isCorrect={option.isCorrect}
          />
        ))}
      </div>
    </div>
  );
};

export default ChallengeBlock;
