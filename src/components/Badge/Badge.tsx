import styles from './Badge.module.css';
import { BookBookmarkIcon, PuzzlePieceIcon } from '@phosphor-icons/react';

type BadgeVariant = 'Theory' | 'Challenge';

interface Props {
  variant?: BadgeVariant;
}

const Badge = ({ variant }: Props) => {
  const variantClass = styles[`badge${variant}`];
  const badgeClasses = `${styles.badge} ${variantClass}`.trim();
  return (
    <div className={badgeClasses}>
      {variant === 'Challenge' ? (
        <PuzzlePieceIcon weight="fill" size={20} />
      ) : (
        <BookBookmarkIcon weight="fill" size={20} />
      )}{' '}
      <span>{variant}</span>
    </div>
  );
};

export default Badge;
