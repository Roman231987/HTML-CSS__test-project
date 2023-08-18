import Button from "../Button/Button";
import Time_Calendar from "../../../images/CardArticle/Time_Calendar.svg";
import Securiti_Eye from "../../../images/CardArticle/Securiti_Eye.svg";
import styles from "./CardArticle.module.css";

const CardArticle = () => {
  return (
    <article className={styles.card}>
      <div className={styles.card__article}>
        <div className={styles.card__img}>
          <img
            className={styles.card__img_booton}
            src={Time_Calendar}
            alt="Booton Time_Calendar"
          />
          <img
            className={styles.card__img_booton}
            src={Securiti_Eye}
            alt="Booton Securiti_Eye"
          />
        </div>
        <h3 className={styles.card__h3}>
          Критика в работе – ваш друг, но не всегда
        </h3>
        <div className={styles.card__paragraph}>
          <p>
            Когда делаешь код ревью иногда встречаешь с тем, что даешь
            конструктивную критику и она воспринимается в штыки, словно это
            личное оскорбление. Человек всеми силами пытается сопротивляться
            обратной связи и не готов слушать аргументы. Тут варианта два: или
            обратная связь дана некорректно, или человек не воспринимает
            критику. В этом посте я хочу сосредоточиться на том, как работать с
            критикой.
          </p>
        </div>
      </div>
      <div className={styles.card__button}>
        <Button className={styles.button_ghost}>Читать</Button>
      </div>
    </article>
  );
};

export default CardArticle;
