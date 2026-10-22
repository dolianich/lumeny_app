import styles from './ActionTitle.module.css';

interface Props {
  title: string;
}

const ActionTitle = ({ title }: Props) => {
  return <h2 className={styles.title}>{title}</h2>;
};

export default ActionTitle;
