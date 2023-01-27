import { ThemeSwitcher } from '../Search/ThemeSwitcher';
import styles from './Header.module.scss';


interface HeaderProps { }

export const Header = ({ }: HeaderProps) => (
  <div className={styles.header} data-testid="Header">
    <span className={styles.logo}>devfinder</span>
    <ThemeSwitcher/>
  </div>
);
