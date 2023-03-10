import { LocalUser } from '../../types/User';
import styles from './UserTitle.module.scss';

export interface UserTitleProps extends Pick<
  LocalUser,
  'name' | 'login' | 'created'
>{}

export const localDate = new Intl.DateTimeFormat('en-GB', {
  day: 'numeric',
  month: 'short',
  year: 'numeric'
});

export const UserTitle = ({created, login, name}: UserTitleProps) => {
  const joinedDate = localDate.format(new Date(created))
  return(
  <div className={styles.userTitle}>
    <h2>{name}</h2>
    <h3>{login}</h3>
    <span>{joinedDate}</span>
  </div>
  )
}
