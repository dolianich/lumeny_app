import { NavLink } from 'react-router-dom';
import type { Icon } from '@phosphor-icons/react';
import styles from './NavButton.module.css';

interface Props {
  link: string;
  size?: number;
  weight?: 'regular' | 'fill';
  icon: Icon;
  type?: 'mobile' | 'default';
}

const NavButton = ({ link, size, weight, icon: Icon, type }: Props) => {
  return (
    <NavLink
      to={link}
      className={({ isActive }) => {
        return isActive
          ? `${styles.selected} ${styles.button}`
          : !isActive && type === 'mobile'
          ? `${styles.defaultMobile} ${styles.button}`
          : `${styles.default} ${styles.button}`;
      }}
    >
      <Icon size={size} weight={weight} />
    </NavLink>
  );
};

export default NavButton;
