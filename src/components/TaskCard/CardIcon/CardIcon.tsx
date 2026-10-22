import styles from './CardIcon.module.css';
import { BookBookmarkIcon, PuzzlePieceIcon } from '@phosphor-icons/react';

type CardIconVariant = 'Theory' | 'Challenge';

interface Props {
  variant: CardIconVariant;
}

const CardIcon = ({ variant }: Props) => {
  const variantClass = styles[`icon${variant}`];
  const cardIconClasses = `${styles.icon} ${variantClass}`.trim();
  return (
    <div className={cardIconClasses}>
      {variant === 'Theory' ? (
        <BookBookmarkIcon size={20} weight="fill" />
      ) : (
        <PuzzlePieceIcon size={20} weight="fill" />
      )}
    </div>
  );
};

export default CardIcon;
