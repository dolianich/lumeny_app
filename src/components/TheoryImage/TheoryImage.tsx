import styles from './TheoryImage.module.css';

interface Props{
    img?: string
}

const TheoryImage = ({img}: Props) => {
  return (
    <div className={styles.imgContainer}>
      <img src={img} alt="img" />
    </div>
  )
}

export default TheoryImage
