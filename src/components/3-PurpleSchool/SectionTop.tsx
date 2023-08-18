import Button from "./Button/Button";
import CardCatalog from "./CardCatalog/CardCatalog";
import Headling from "./Headling/Headling";
import styles from "./SectionTop.module.css";

const SectionTop = () => {
  return (
    <section className={styles.section__top}>
      <div className={styles.section__top_wraper}>
        <Headling text_top={"Выбрать курс"} text_bootom={"Каталог курсов"} />
        <div className={styles.buttons}>
          <Button className={`${styles.button} ${styles.button_primari}`}>
            Все
          </Button>
          <Button className={`${styles.button} ${styles.button_ghost}`}>
            Frontend
          </Button>
          <Button className={`${styles.button} ${styles.button_ghost}`}>
            Backend
          </Button>
          <Button className={`${styles.button} ${styles.button_ghost}`}>
            DevOps
          </Button>
          <Button className={`${styles.button} ${styles.button_ghost}`}>
            Soft Skills
          </Button>
        </div>
        <div className={styles.CardCatalog}>
          <CardCatalog />
          <CardCatalog />
          <CardCatalog />
          <CardCatalog />
          <CardCatalog />
        </div>
      </div>
    </section>
  );
};

export default SectionTop;
