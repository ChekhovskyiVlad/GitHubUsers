import styles from './ThemeSwitcher.module.scss';
import { ReactComponent as IconMoon} from '../../../assets/icon-moon.svg'
import { ReactComponent as IconSun} from '../../../assets/icon-sun.svg'
import { useEffect, useState } from 'react';


interface ThemeSwitcherProps { }

export const ThemeSwitcher = ({ }: ThemeSwitcherProps) => {
  const [isDark , setDark] = useState(false)
  const textTheme = isDark ? 'dark' : 'light'
  const IconTheme = isDark ? IconMoon : IconSun
  useEffect(() => {
    document.body.setAttribute('data-theme', isDark ? 'dark' : 'light')
  },[isDark])
  return(


  <div className={styles.switcher} data-testid="ThemeSwitcher" onClick={() => setDark(!isDark)}>
    <span className={styles.text}>{textTheme}</span>
    <IconTheme className={styles.icon}/>
  </div>

)
}
