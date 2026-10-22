import styles from './TopBar.module.css';
import Logo from '../Logo/Logo';
import TaskCloseBtn from '../TaskCloseBtn/TaskCloseBtn';
import Avatar from '../Avatar/Avatar';

interface Props {
  variant?: 'Actions' | 'Profile';
}

const TopBarAction = ({ variant }: Props) => {
  return (
    <div className={styles.wrapper}>
      <Logo />
      {variant === 'Profile' ? <Avatar /> : <TaskCloseBtn />}
    </div>
  );
};

export default TopBarAction;
