import styles from './AuthCard.module.css';
import type { FormEvent } from 'react';
import Logo from '../Logo/Logo';
import Divider from '../Divider/Divider';
import googleLogo from '../../assets/googleLogo.svg';
import { Link } from 'react-router-dom';

interface Props {
  email: string;
  name?: string;
  password: string;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
  onEmailChange: (email: string) => void;
  onNameChange?: (name: string) => void;
  onPasswordChange: (password: string) => void;
  onSubmit: (e: FormEvent) => void;
  variant?: 'auth' | 'signup';
}

const AuthCard = ({
  email,
  password,
  status,
  error,
  name,
  onEmailChange,
  onPasswordChange,
  onNameChange,
  onSubmit,
  variant,
}: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <Logo />
        <h3>
          {variant === 'signup' ? 'Your journey starts here' : 'Welcome back'}
        </h3>
        <form onSubmit={onSubmit}>
          {variant === 'signup' ? (
            <div className={styles.fieldWrapper}>
              <input
                type="text"
                placeholder="Name"
                onChange={(e) => onNameChange!(e.target.value)}
                value={name}
                autoComplete="name"
              />
            </div>
          ) : null}
          <div className={styles.fieldWrapper}>
            <input
              type="email"
              placeholder="Email"
              onChange={(e) => onEmailChange(e.target.value)}
              value={email}
              autoComplete="username"
            />
          </div>
          <div className={styles.passwordField}>
            <div className={styles.fieldWrapper}>
              <input
                type="password"
                placeholder="Password"
                onChange={(e) => onPasswordChange(e.target.value)}
                value={password}
                autoComplete="current-password"
              />
            </div>
            {variant === 'signup' ? null : (
              <span className={styles.forgotPassword}>Forgot password?</span>
            )}
          </div>
          <button
            className={styles.btn}
            type="submit"
            disabled={status === 'loading'}
          >
            {variant === 'signup' ? 'Create an Account' : 'Login'}
          </button>
        </form>
        <div className={styles.divider}>
          <Divider />
          <span>Or</span>
          <Divider />
        </div>
        <button className={styles.googleBtn}>
          {' '}
          <img src={googleLogo} alt="google" />
          {variant === 'signup' ? 'Sign up with Google' : 'Sign in with Google'}
        </button>
        <span className={styles.hint}>
          {variant === 'signup'
            ? 'Already have an account yet?'
            : "Don't have an account yet?"}{' '}
          <Link
            to={variant === 'signup' ? '/auth' : '/signup'}
            className={styles.signUpLink}
          >
            {variant === 'signup' ? 'Sign in' : 'Sign up'}
          </Link>
        </span>
      </div>
      {status === 'failed' && error && <p>{error}</p>}
    </div>
  );
};

export default AuthCard;
