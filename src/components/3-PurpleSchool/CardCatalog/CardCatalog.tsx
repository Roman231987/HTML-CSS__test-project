import cover from "../../../images/CardCatalog/cover.svg";
import time_circle from "../../../images/CardCatalog/time_circle.svg";
import Star from "../../../images/CardCatalog/Star.svg";
import Button from "../Button/Button";
import styles from "./CardCatalog.module.css";

const CardCatalog = () => {
  return (
    <div className={styles.card}>
      <img className={styles.card__img} src={cover} alt="Card cover" />
      <div className={styles.card__info}>
        <h3 className={styles.card__h3}>React + Next.js - с нуля</h3>
        <p className={styles.card__p}>Антон Ларичев</p>
        <div className={styles.card__img_time}>
          <img src={time_circle} alt="Logo time_circke" />
          18 часов лекций
        </div>
        <div className={styles.card__buttons}>
          <span className={styles.card__button}>
            <img src={Star} alt="Logo star" />
            4.9
          </span>
          <span className={styles.card__button}>Frontend</span>
        </div>
      </div>
      <div className={styles.card__futer}>
        <h3>от 1 890 ₽</h3>
        <Button className={styles.button_primari}>Подробнее</Button>
      </div>
    </div>
  );
};

export default CardCatalog;
