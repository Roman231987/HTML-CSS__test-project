import logo from "../../images/logo.svg";

import SocialIcons from "./SocialIcons/SocialIcons";
import styles from "./Footerr.module.css";

const Footerr = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__wrapper}>
        <div className={styles.footer__social}>
          <a href="##">
            <img
              className={styles.footer__logo}
              src={logo}
              alt="Logo PurpleSchool"
            />
          </a>
          <SocialIcons />
        </div>
        <div className={styles.footer__menu}>
          <nav>
            <div className={styles.footer__menu_heder}>Меню</div>
            <ul className={styles.menu__small}>
              <li className={styles.menu__small_item}>
                <a href="##">Курсы</a>
              </li>
              <li className={styles.menu__small_item}>
                <a href="##">О школе</a>
              </li>
              <li className={styles.menu__small_item}>
                <a href="##">Блог</a>
              </li>
              <li className={styles.menu__small_item}>
                <a href="##">База знаний</a>
              </li>
            </ul>
          </nav>
          <div>
            <div className={styles.footer__menu_heder}>Документы</div>
            <ul className={styles.menu__small}>
              <li className={styles.menu__small_item}>
                <a href="##">Договор Оферта</a>
              </li>
              <li className={styles.menu__small_item}>
                <a href="##">Политика конфиденциальности</a>
              </li>
            </ul>
          </div>
          <div>
            <div className={styles.footer__menu_heder}>Реквизиты</div>
            <ul className={styles.menu__small}>
              <li className={styles.menu__small_item}>
                ИП Ларичев Антон Андреевич
              </li>
              <li className={styles.menu__small_item}>ИНН 773373765379</li>
              <li className={styles.menu__small_item}>
                <a href="mailto:contact@purpleschool.ru">
                  contact@purpleschool.ru
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.footer__copywrite}>
          PurpleSchool © 2020 - 2023 Все права защищены
        </div>
      </div>
    </footer>
  );
};

export default Footerr;
