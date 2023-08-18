import Rectangle from "../../images/Rectangle 2.png";
import Button from "./Button/Button";
import styles from "./Section.module.css";

const Section = () => {
  return (
    <section className={`${styles.section} ${styles.section_light}`}>
      <div className={styles.hero}>
        <div className={styles.hero__left}>
          <h1 className={styles.hero__h1}>
            Доступные курсы по <br />
            <span className={styles.hero__h1_gradient}>
              Разработке и DevOps
            </span>
          </h1>
          <div className={styles.hero__cta}>
            <Button className={styles.button_primari}>Выбрать курс</Button>
            <Button className={styles.button_ghost}>О школе</Button>
          </div>
        </div>
        <img className={styles.hero__right} src={Rectangle} alt="Foto" />
      </div>
    </section>
  );
};

export default Section;
