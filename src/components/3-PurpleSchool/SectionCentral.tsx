import CardInfo from "./CardInfo/CardInfo";
import CardRating from "./CardRating/CardRating";
import Headling from "./Headling/Headling";
import rating_star from "../../images/CardRating/rating_star.svg";
import stepik from "../../images/CardRating/stepik.svg";
import udemy from "../../images/CardRating/udemy.svg";
import styles from "./SectionCentral.module.css";

const SectionCentral = () => {
  return (
    <section className={styles.section__central}>
      <div className={styles.section__central_wrap}>
        <Headling text_top={"О школе"} text_bootom={"Нам доверяют"} />
        <p className={styles.section__central_paragraph}>
          Основатель школы и автор Антон Ларичев занимается разработкой уже
          более 13 лет и прошёл путь от разработчика до CTO. В курсах даются
          актуальные материалы без воды с опытом реальных проектов и
          практическим закреплением материала.
        </p>
        <div className={styles.SectionCentral__CardInfo}>
          <CardInfo
            text_top={"15 000"}
            text_bootom={"учеников по всему миру"}
          />
          <CardInfo
            text_top={"30 дней"}
            text_bootom={"гарантия возврата денег"}
          />
          <CardInfo
            text_top={"90%"}
            text_bootom={"студентов рекомендуют курсы"}
          />
        </div>
        <h2 className={styles.section__central_h2}>
          Рейтинги на независимых платформах
        </h2>
        <div className={styles.SectionCentral__CardRating}>
          <CardRating
            rating={"4.8"}
            ratingText={"КурсесТоп"}
            imagesRating={rating_star}
          />
          <CardRating
            rating={"4.8"}
            imagesSocial={stepik}
            imagesRating={rating_star}
          />
          <CardRating
            rating={"4.7"}
            imagesSocial={udemy}
            imagesRating={rating_star}
          />
        </div>
      </div>
    </section>
  );
};

export default SectionCentral;
