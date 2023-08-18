import logo from "../../images/logo.svg";
import user from "../../images/user.svg";
import menu from "../../images/menu.svg"
import Section from "./Section";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.headr__wrapper}>
          <a href="##">
            <img
              className={styles.header__logo}
              src={logo}
              alt="Logo PurpleSchool"
            />
          </a>
          <nav>
            <ul className={styles.menu}>
              <li className={`${styles.menu__item} ${styles.menu__item_activ}`}>
                <a href="##">Курсы</a>
              </li>
              <li className={styles.menu__item}>
                <a href="##">О школе</a>
              </li>
              <li className={styles.menu__item}>
                <a href="##">Блог</a>
              </li>
              <li className={styles.menu__item}>
                <a href="##">База знаний</a>
              </li>
            </ul>
          </nav>
          <a
            className={styles.header__login}
            href="##"
            aria-label="Вход в личньій кабинет"
          >
            <img src={user} alt="Logo user" />
            <div>Вход</div>
          </a>
          <button className={styles.header__mobile_menu_button}>
            <img src={menu} alt="button menu" />
          </button>
        </div>
      </header>
      <Section />
    </>
  );
};

export default Header;
