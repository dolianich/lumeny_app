import styles from '../styles/Landing.module.css';
import study from '../assets/landingContent/study.svg';
import pray from '../assets/landingContent/pray.svg';
import Button from '../components/Button/Button';
import Lottie from 'lottie-react';
import appAnim from '../assets/landingContent/appAnim.json';
import support from '../assets/landingContent/support.json';
import glare from '../assets/animations/glare.json';
import Logo from '../components/Logo/Logo';
import { SignInIcon } from '@phosphor-icons/react';
import { useNavigate } from 'react-router-dom';
import * as motion from 'motion/react-client';
import {
  InstagramLogoIcon,
  XLogoIcon,
  ThreadsLogoIcon,
} from '@phosphor-icons/react';

const LandingPage = () => {
  const navigate = useNavigate();

  const login = () => navigate('/auth');
  return (
    <div className={styles.page}>
      <div className={styles.topBar}>
        <Logo />
        <button className={styles.loginBtn} onClick={login}>
          <span className={styles.login}>
            <SignInIcon size={20} />
          </span>
        </button>
      </div>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.1,
          scale: { type: 'spring', visualDuration: 0.4, bounce: 0.4 },
        }}
        className={styles.hero}
      >
        <div className={styles.titleDesc}>
          <div className={styles.title}>
            <h1>
              Where Christianity Meets <br /> Technology
            </h1>
          </div>
          <p>Learn, pray, study, and grow with a community</p>
        </div>
        <div>
          <Button variant="Primary" onClick={login}>
            Get Closer to God
          </Button>
        </div>
      </motion.div>
      <section className={styles.features}>
        <div className={styles.topFeatures}>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
            transition={{
              duration: 0.1,
              scale: { type: 'spring', visualDuration: 0.4, bounce: 0.4 },
            }}
            className={styles.card}
          >
            <div className={styles.cardText}>
              <h3>Learn & Explore</h3>
              <p>Interactive lessons and challenges</p>
            </div>
            <div className={styles.imgContainer}>
              <img src={study} alt="study" />
              <div className={styles.animContainer}>
                <Lottie animationData={glare} loop={true} autoplay={true} />
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{
              once: true,
              amount: 0.5,
            }}
            transition={{
              duration: 0.1,
              scale: { type: 'spring', visualDuration: 0.4, bounce: 0.4 },
            }}
            className={styles.card}
          >
            <div className={styles.cardText}>
              <h3>Pray & Connect</h3>
              <p>Library of prayers for every need</p>
            </div>
            <div className={styles.imgContainer}>
              <img src={pray} alt="pray" />
              <div className={styles.animContainer}>
                <Lottie animationData={glare} loop={true} autoplay={true} />
              </div>
            </div>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{
            once: true,
            amount: 0.5,
          }}
          transition={{
            duration: 0.1,
            scale: { type: 'spring', visualDuration: 0.4, bounce: 0.4 },
          }}
          className={styles.ctaFeature}
        >
          <div className={styles.cardText}>
            <h3>Grow & Be Rewarded</h3>
            <p>Earn lums (points) and NFTs powered by Solana</p>
          </div>
          <div className={styles.btnContainer}>
            <Button variant="Primary" onClick={login}>
              Explore the App
            </Button>
          </div>
        </motion.div>
      </section>
      <section className={styles.mobileApp}>
        <div className={styles.description}>
          <h2>Your Christian Companion</h2>
          <p>
            We're also working on mobile version of Lumeny to create a beautiful
            experience for you. <br className={styles.break} /> The app will be
            available on both iOS and Android.
          </p>
          <div className={styles.soon}>Launching Soon</div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{
            once: true,
            amount: 0.5,
          }}
          transition={{
            duration: 0.1,
            scale: { type: 'spring', visualDuration: 0.4, bounce: 0.4 },
          }}
          className={styles.animationContainer}
        >
          <Lottie animationData={appAnim} className={styles.appAnim} />
        </motion.div>
      </section>
      <section className={styles.support}>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{
            once: true,
            amount: 0.5,
          }}
          transition={{
            duration: 0.1,
            scale: { type: 'spring', visualDuration: 0.4, bounce: 0.4 },
          }}
          className={styles.animationContainer}
        >
          <Lottie animationData={support} className={styles.appAnim} />
        </motion.div>
        <div className={styles.descriptionSupport}>
          <h2>Support a Free Faith</h2>
          <p>
            Great apps require great resources. Your donation keeps Lumeny free,
            ad-free, and focused on its mission
          </p>
          <div className={styles.btnWrapper}>
            <Button variant="Primary">Support Our Mission</Button>
          </div>
        </div>
      </section>
      <section className={styles.socialsSection}>
        <h2>Our Socials</h2>
        <div className={styles.socials}>
          <a
            className={styles.social}
            href="https://www.instagram.com/dolia.create?igsh=ZTN5bGoza3g2b3hq"
          >
            {' '}
            <InstagramLogoIcon size={20} />
          </a>
          <a className={styles.social} href="https://x.com/doliiia?s=11">
            <XLogoIcon size={20} />
          </a>
          <a
            className={styles.social}
            href="https://www.threads.com/@dolia.create?igshid=NTc4MTIwNjQ2YQ=="
          >
            <ThreadsLogoIcon size={20} />
          </a>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
