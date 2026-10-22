import { useLocation } from 'react-router-dom';
import NavButton from '../NavButton/NavButton';
import {
  CrossIcon,
  HandsPrayingIcon,
  BookOpenTextIcon,
  SparkleIcon,
} from '@phosphor-icons/react';
import styles from './NavBar.module.css';

interface Props {
  type?: 'mobile' | 'default';
}

const navButtons = [
  { id: 1, icon: CrossIcon, link: '/foundations', size: 20 },
  { id: 4, icon: SparkleIcon, link: '/ai', size: 20 },
  { id: 2, icon: HandsPrayingIcon, link: '/pray', size: 20 },
  { id: 3, icon: BookOpenTextIcon, link: '/bible_study', size: 20 },
];

const NavBar = ({ type }: Props) => {
  const location = useLocation();

  return (
    <ul className={styles.navigation}>
      {navButtons.map((button) => (
        <NavButton
          key={button.id}
          link={button.link}
          icon={button.icon}
          size={button.size}
          weight={location.pathname.includes(button.link) ? 'fill' : 'regular'}
          type={type}
        />
      ))}
    </ul>
  );
};

export default NavBar;
