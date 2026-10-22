import styles from './Avatar.module.css';
import { useState, useRef, useEffect } from 'react';
import { UserCircleIcon, WalletIcon, SignOutIcon } from '@phosphor-icons/react';
import { AnimatePresence, motion } from 'motion/react';
import { useNavigate, useLocation } from 'react-router-dom';
import avatar from '../../assets/avatarPlace.svg';

const Avatar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const navigate = useNavigate();

  const location = useLocation();
  const isProfileRoute = location.pathname.includes('/profile');

  const goToProfile = () => {
    if (!isProfileRoute) {
      navigate('/profile');
      setIsOpen(false);
    } else {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleDropdown = (): void => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className={styles.container}>
      <button
        className={styles.wrapper}
        onClick={toggleDropdown}
        ref={buttonRef}
      >
        <div className={styles.content}>
          <img src={avatar} alt="userAvatar" />
        </div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ ease: 'easeOut', duration: 0.2 }}
            className={styles.menu}
            ref={dropdownRef}
          >
            <button className={styles.menuItem} onClick={goToProfile}>
              <UserCircleIcon size={20} />
              Profile
            </button>
            <button className={styles.menuItem}>
              <WalletIcon size={20} />
              Connect Wallet
            </button>
            <button className={styles.menuItem}>
              <SignOutIcon size={20} />
              Sign Out
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Avatar;
