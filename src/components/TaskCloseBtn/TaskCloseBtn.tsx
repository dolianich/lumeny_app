import styles from './TaskCloseBtn.module.css';
import { XIcon } from '@phosphor-icons/react';
import { useNavigate } from 'react-router-dom';

const TaskCloseBtn = () => {
  const navigate = useNavigate();
  return (
    <button className={styles.btn} onClick={() => navigate(-1)}>
      <div className={styles.content}>
        <XIcon size={20} />
      </div>
    </button>
  );
};

export default TaskCloseBtn;
