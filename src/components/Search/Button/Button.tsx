import styles from './Button.module.scss';

export interface ButtonProps {
  children: string,
  onClick?: React.MouseEventHandler<HTMLButtonElement>,
}

export const Button = ({children, onClick }: ButtonProps) => (
  <button className={styles.button} onClick={onClick}>
    {children}
  </button>
);
