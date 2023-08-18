import Button from "./Button/Button";
import SocialIcons from "./SocialIcons/SocialIcons";
import CardArticle from "./CardArticle/CardArticle";
import Headling from "./Headling/Headling";
import styles from "./SectionBottom.module.css";

const SectionBottom = () => {
  return (
    <section className={styles.section}>
      <div className={styles.section__wrapper}>
        <Headling
          text_top={"Блог и социальные сети"}
          text_bootom={"Полезные материалы"}
        />

        <p className={styles.section__paragraph}>
          Каждую неделю мы публикуем новости, обновления, а так же
          дополнительные полезные материалы в социальных сетях:
        </p>
        <SocialIcons className={styles.social__icons_activ} />
        <CardArticle />
        <CardArticle />
        <CardArticle />
        <div className={styles.section__button}>
          <Button className={styles.button_ghost}>Все публикации</Button>
        </div>
      </div>
    </section>
  );
};

export default SectionBottom;
