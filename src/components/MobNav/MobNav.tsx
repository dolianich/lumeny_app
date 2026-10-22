import NavBar from '../Navigation/NavBar/NavBar';
import styles from './MobNav.module.css';

const MobNav = () => {
  return (
    <div className={styles.navigation}>
      <NavBar type='mobile'/>
    </div>
  );
};

export default MobNav;
