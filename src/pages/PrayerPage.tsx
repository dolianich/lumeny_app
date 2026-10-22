import styles from '../styles/Page.module.css';
import TextButton from '../components/TextButton/TextButton';
import PrayerBlock from '../components/PrayerBlock/PrayerBlock';
import { CaretLeftIcon } from '@phosphor-icons/react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import useScrollToTop from '../utils/useScrollToTop';
import prayers from '../mockData/prayers';

const PrayerPage = () => {
  useScrollToTop();
  const navigate = useNavigate();
  const { prayerId } = useParams();

  const prayer = prayers.find((p) => p.id === prayerId);

  return (
    <div className={styles.prayerSection}>
      <TextButton onClick={() => navigate('/pray')}>
        <CaretLeftIcon size={20} weight="regular" />
        Prayers
      </TextButton>
      <PrayerBlock
        title={prayer!.heading}
        prayersText={prayer!.prayersText}
        img={prayer!.cover}
      />
    </div>
  );
};

export default PrayerPage;
