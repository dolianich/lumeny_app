import styles from '../styles/Page.module.css';
import Pray from '../components/Pray/Pray';
import useScrollToTop from '../utils/useScrollToTop';
import prayers from '../mockData/prayers';
import Lottie from 'lottie-react';
import pray from '../assets/animations/prayBadge.json';

const PrayPage = () => {
  useScrollToTop();

  return (
    <div>
      <div className={styles.heading}>
        <div className={styles.prayTitle}>
          <Lottie
            animationData={pray}
            className={styles.prayAnimation}
          ></Lottie>
          <h3>Prayers</h3>
        </div>
        <p>For specific challenges and joys</p>
      </div>
      <div className={styles.prayers}>
        {prayers.map((pray) => (
          <Pray
            heading={pray.heading}
            description={pray.description}
            key={pray.id}
            img={pray.cover}
            link={`/pray/${pray.id}`}
          />
        ))}
      </div>
    </div>
  );
};

export default PrayPage;
