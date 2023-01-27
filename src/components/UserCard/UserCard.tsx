import styles from './UserCard.module.scss';
import { LocalUser } from '../../types/User'
import { UserStat } from '../UserStat';
import { UserTitle } from '../UserTitle';
import { UserInfo } from '../UserInfo';
interface UserCardProps extends LocalUser{}

export const UserCard = (props: UserCardProps) => (
  <div className={styles.userCard} >
    <img src={props.avatar} alt={props.login} className={styles.avatar}/>
    <UserTitle created={props.created} name={props.name} login={props.login}  />
    <p className={`${styles.bio}${props.bio ? '' : ` ${styles.empty}`}`}>
        {props.bio || 'This profile has no bio'}
      </p>
    <UserStat repos={props.followers} followers={props.followers} following={props.following}/>
    <UserInfo company={props.company} twitter={props.twitter} location={props.location} website={props.website}/>
  </div>
);
