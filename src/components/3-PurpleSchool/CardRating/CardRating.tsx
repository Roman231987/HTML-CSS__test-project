import styles from "./CardRating.module.css";

interface CardRatingProps {
  rating: string;
  ratingText?: string;
  imagesSocial?: string;
  imagesRating: string;
}

const CardRating: React.FC<CardRatingProps> = ({
  rating,
  ratingText,
  imagesSocial,
  imagesRating,
}) => {
  return (
    <div className={styles.CardRating}>
      <div className={styles.CardRating__wraper}>
        <div className={styles.CardRating__left}>{rating}</div>
        <div className={styles.CardRating__right}>
          <div className={styles.CardRating__right_text}>{ratingText}</div>
          <img src={imagesSocial} alt="" />
          <img src={imagesRating} alt="img rating" />
        </div>
      </div>
    </div>
  );
};

export default CardRating;
