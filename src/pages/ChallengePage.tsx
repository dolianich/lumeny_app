import useScrollToTop from '../utils/useScrollToTop';
import TopBarAction from '../components/TopBar/TopBarAction';
import ChallengeBlock from '../components/ChallengeBlock/ChallengeBlock';
import ChallengeBottomBar from '../components/ChallengeBottomBar/ChallengeBottomBar';
import CompletedChallenge from '../components/CompletedChallenge/CompletedChallenge';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ChallengePage = () => {
  const questions = [
    {
      id: 1,
      question: 'What did Old Testament prophecies foretell about Jesus?',
      options: [
        {
          id: 1,
          text: 'He would be a wealthy king who ruled forever',
          isCorrect: false,
        },
        {
          id: 2,
          text: 'He would be born in Bethlehem and bring salvation',
          isCorrect: true,
        },
        {
          id: 3,
          text: 'He would lead a rebellion against the Roman Empire',
          isCorrect: false,
        },
      ],
    },
    {
      id: 2,
      question: 'Jesus claimed to be:',
      options: [
        { id: 1, text: 'A wise philosopher, like Socrates', isCorrect: false },
        { id: 2, text: 'A powerful angel sent by God', isCorrect: false },
        { id: 3, text: 'God Himself in human form', isCorrect: true },
      ],
    },
    {
      id: 3,
      question:
        'Which teaching summarizes Jesus’ message in the Sermon on the Mount?',
      options: [
        {
          id: 1,
          text: '"Seek wealth and success above all else."',
          isCorrect: false,
        },
        {
          id: 2,
          text: '"Love God and love others as yourself."',
          isCorrect: true,
        },
        {
          id: 3,
          text: '"Obey every law perfectly to earn salvation."',
          isCorrect: false,
        },
      ],
    },
    {
      id: 4,
      question:
        'Why did Jesus perform miracles like healing the sick and raising the dead?',
      options: [
        {
          id: 1,
          text: 'To entertain crowds and gain followers',
          isCorrect: false,
        },
        {
          id: 2,
          text: 'To prove His divine authority and compassion',
          isCorrect: true,
        },
        { id: 3, text: 'To force people to believe in Him', isCorrect: false },
      ],
    },
    {
      id: 5,
      question: 'What does Jesus’ resurrection prove?',
      options: [
        {
          id: 1,
          text: 'He was a good man who died tragically',
          isCorrect: false,
        },
        { id: 2, text: 'He has power over sin and death', isCorrect: true },
        {
          id: 3,
          text: 'His followers stole His body to fake the story',
          isCorrect: false,
        },
      ],
    },
    {
      id: 6,
      question: 'How does the Bible describe Jesus’ role today?',
      options: [
        {
          id: 1,
          text: 'A distant ruler who no longer interacts with people',
          isCorrect: false,
        },
        {
          id: 2,
          text: 'A personal Savior and Friend who intercedes for believers',
          isCorrect: true,
        },
        {
          id: 3,
          text: 'A symbol of hope, but not a living being',
          isCorrect: false,
        },
      ],
    },
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOptionId, setSelectedOptionId] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [answerChecked, setAnswerChecked] = useState(false);
  const [wasAnswerCorrect, setWasAnswerCorrect] = useState(false);
  const [answerResults, setAnswerResults] = useState<boolean[]>([]);
  const [wrongAnswersCount, setWrongAnswersCount] = useState(0);

  const currentQuestion = questions[currentQuestionIndex];
  const totalQuestions = questions.length;

  const handleOptionSelect = (optionId: number) => {
    if (!answerChecked) {
      setSelectedOptionId(optionId);
    }
  };

  const handleButtonClick = () => {
    if (!answerChecked) {
      const selectedOption = currentQuestion.options.find(
        (opt) => opt.id === selectedOptionId
      );
      const isCorrect = selectedOption?.isCorrect || false;

      if (isCorrect) {
        setScore(score + 1);
        setWasAnswerCorrect(true);
      } else {
        setWasAnswerCorrect(false);
        const newWrongAnswersCount = wrongAnswersCount + 1;
        setWrongAnswersCount(newWrongAnswersCount);

        if (newWrongAnswersCount >= 2) {
          setQuizCompleted(true);
        }
      }

      const newAnswerResults = [...answerResults];
      newAnswerResults[currentQuestionIndex] = isCorrect;
      setAnswerResults(newAnswerResults);

      setAnswerChecked(true);
    } else {
      setAnswerChecked(false);
      setSelectedOptionId(null);

      if (!quizCompleted) {
        if (currentQuestionIndex < totalQuestions - 1) {
          setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
          setQuizCompleted(true);
        }
      }
    }
  };

  const handleRestartChallenge = () => {
    setCurrentQuestionIndex(0);
    setSelectedOptionId(null);
    setScore(0);
    setQuizCompleted(false);
    setAnswerChecked(false);
    setWasAnswerCorrect(false);
    setAnswerResults([]);
    setWrongAnswersCount(0);
  };

  const navigate = useNavigate();

  const handleFinish = () => navigate('/foundations');

  const getButtonText = () => {
    if (!selectedOptionId) return 'Continue';
    if (!answerChecked) return 'Check';
    if (wasAnswerCorrect) return 'Continue';
    return 'Continue';
  };

  const getButtonType = () => {
    if (!answerChecked) return 'Static';
    if (wasAnswerCorrect) return 'Correct';
    return 'Wrong';
  };

  useScrollToTop();

  if (quizCompleted) {
    if (wrongAnswersCount >= 2) {
      return (
        <CompletedChallenge
          onRestart={handleRestartChallenge}
          status="Failed"
        />
      );
    }

    return <CompletedChallenge onRestart={handleFinish} status="Success" />;
  }

  return (
    <div>
      <TopBarAction />
      <ChallengeBottomBar
        disabled={!selectedOptionId}
        onClick={handleButtonClick}
        btnText={getButtonText()}
        buttonType={getButtonType()}
        count={totalQuestions}
        currentIndex={currentQuestionIndex}
        answerResults={answerResults}
      />
      <ChallengeBlock
        question={currentQuestion.question}
        options={currentQuestion.options}
        radioName={`question-${currentQuestion.id}`}
        selectedOptionId={selectedOptionId}
        onSelect={handleOptionSelect}
        answerChecked={answerChecked}
        showCorrect={answerChecked}
      />
    </div>
  );
};

export default ChallengePage;
