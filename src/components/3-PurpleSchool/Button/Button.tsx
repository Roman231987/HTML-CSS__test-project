import styles from "./Button.module.css";

interface IProps {
  children: React.ReactNode;
  className: string;
}

const Button: React.FC<IProps> = ({ children, className }) => {
  return (
    <a className={`${styles.button} ${className}`} href="##">
      {children}
    </a>
  );
};

export default Button;
