import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from '../services/authSlice';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import type { RootState, AppDispatch } from '../store';
import AuthCard from '../components/AuthCard/AuthCard';
import styles from '../styles/Page.module.css';

const AuthPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const { status, error } = useSelector((state: RootState) => state.auth);

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await dispatch(loginUser({ email, password })).unwrap();
      navigate('/courses');
    } catch (err) {
      console.error('Login failed:', err);
    }
  };

  return (
    <div className={styles.auth}>
      <AuthCard
        email={email}
        password={password}
        status={status}
        error={error}
        onEmailChange={setEmail}
        onPasswordChange={setPassword}
        onSubmit={handleAuth}
      />
    </div>
  );
};

export default AuthPage;
