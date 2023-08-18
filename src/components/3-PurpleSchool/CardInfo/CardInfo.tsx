import styles from "./CardInfo.module.css";

interface CardInfo_Props {
  text_top: string;
  text_bootom: string;
}

const CardInfo: React.FC<CardInfo_Props> = ({ text_top, text_bootom }) => {
  return (
    <div className={styles.CardInfo}>
      <div className={styles.CardInfo__info}>{text_top}</div>
      <div className={styles.CardInfo__text}>{text_bootom}</div>
    </div>
  );
};

export default CardInfo;
