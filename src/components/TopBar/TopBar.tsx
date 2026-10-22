import styles from './TopBar.module.css';
import NavBar from '../Navigation/NavBar/NavBar';
import Logo from '../Logo/Logo';
import Avatar from '../Avatar/Avatar';

const TopBar = () => {
  return (
    <div className={styles.wrapper}>
      <Logo />
      <div className={styles.navigation}>
        <NavBar type='default'/>
      </div>
      <Avatar />
    </div>
  );
};

export default TopBar;
