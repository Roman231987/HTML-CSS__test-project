import styles from "./Headling.module.css";

interface HeadlingProps {
  text_top: string;
  text_bootom: string;
}

const Headling: React.FC<HeadlingProps> = ({ text_top, text_bootom }) => {
  return (
    <div className={styles.headling}>
      <div className={styles.headling__top}>{text_top}</div>
      <h2 className={styles.headling__bottom}>{text_bootom}</h2>
    </div>
  );
};

export default Headling;


