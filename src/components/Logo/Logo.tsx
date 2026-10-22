import styles from './Logo.module.css';
import logo from '../../assets/logo.svg';

const Logo = () => {
  return (
    <div className={styles.wrapper}>
      <img src={logo} alt="logo" />
    </div>
  );
};

export default Logo;
