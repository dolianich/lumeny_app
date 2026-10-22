import styles from '../styles/Page.module.css';
import AuthCard from '../components/AuthCard/AuthCard';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '../store';

const SignUpPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const handleAuth = () => console.log(`Create account for ${name}`);

  const { status, error } = useSelector((state: RootState) => state.auth);

  return (
    <div className={styles.auth}>
      <AuthCard
        variant="signup"
        email={email}
        password={password}
        onEmailChange={setEmail}
        onPasswordChange={setPassword}
        onSubmit={handleAuth}
        error={error}
        status={status}
        onNameChange={setName}
      />
    </div>
  );
};

export default SignUpPage;
