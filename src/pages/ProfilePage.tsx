import styles from '../styles/Page.module.css';
import TextButton from '../components/TextButton/TextButton';
import { CaretLeftIcon } from '@phosphor-icons/react';
import { useNavigate } from 'react-router-dom';
import avatar from '../assets/avatarPlace.svg';
import * as motion from 'motion/react-client';
import {
  WalletIcon,
  HandCoinsIcon,
  PencilSimpleLineIcon,
} from '@phosphor-icons/react';
import Divider from '../components/Divider/Divider';
import Achievement from '../components/Achievement/Achievement';
import TopBarAction from '../components/TopBar/TopBarAction';
import jesusBadge from '../assets/badges/jesusBadge.svg';
import gospelBadge from '../assets/badges/gospelBadge.svg';
import spiritBadge from '../assets/badges/spiritBadge.svg';
import bibleBadge from '../assets/badges/bibleBadge.svg';
import prayBadge from '../assets/badges/prayBadge.svg';
import churchBadge from '../assets/badges/churchBadge.svg';

const badges = [
  {
    img: jesusBadge,
    isComplete: true,
  },
  {
    img: gospelBadge,
    isComplete: true,
  },
  {
    img: spiritBadge,
    isComplete: true,
  },
  {
    img: bibleBadge,
    isComplete: true,
  },
  {
    img: prayBadge,
    isComplete: true,
  },
  {
    img: churchBadge,
    isComplete: true,
  },
];

const ProfilePage = () => {
  const navigate = useNavigate();
  return (
    <>
      <TopBarAction variant="Profile" />
      <div className={styles.profile}>
        <TextButton onClick={() => navigate(-1)}>
          <CaretLeftIcon size={20} weight="regular" />
          Back
        </TextButton>
        <div className={styles.profileTop}>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.1,
              scale: { type: 'spring', visualDuration: 0.4, bounce: 0.4 },
            }}
            className={styles.avatar}
          >
            <img src={avatar} alt="userAvatar" />
          </motion.div>
          <h1>Daniil Dolia</h1>
          <div className={styles.actions}>
            <button className={styles.walletBtn}>
              <WalletIcon size={20} />
            </button>
            <button className={styles.donateBtn}>
              <HandCoinsIcon size={20} />
            </button>
            <button className={styles.donateBtn}>
              <PencilSimpleLineIcon size={20} />
            </button>
          </div>
        </div>
        <Divider />
        <div className={styles.achievements}>
          {badges.map((badge) => (
            <Achievement badgeImg={badge.img} isComplete={badge.isComplete} />
          ))}
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
