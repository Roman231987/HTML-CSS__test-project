import youtube from "../../../images/Social/youtube.svg";
import telegram from "../../../images/Social/telegram.svg";
import vk from "../../../images/Social/vk.svg";
import styles from "./SocialIcons.module.css";

interface SociaProps {
className?:string
}

const SocialIcons: React.FC<SociaProps> = ({ className }) => {
  return (
    <div className={`${styles.social__icons} ${className}`}>
      <a className={styles.social__icons_icon} href="##">
        <img src={youtube} alt=" youtube" />
      </a>
      <a className={styles.social__icons_icon} href="##">
        <img src={telegram} alt=" telegram" />
      </a>
      <a className={styles.social__icons_icon} href="##">
        <img src={vk} alt=" vk" />
      </a>
    </div>
  );
};

export default SocialIcons;
