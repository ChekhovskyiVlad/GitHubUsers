import styles from './UserStat.module.scss';
import { LocalUser } from '../../types/User'

export interface UserStatProps extends  Pick<LocalUser, 'repos' | 'followers' | 'following'>{
  repos: number,
  followers: number,
  following: number,
}

export const UserStat = ({ repos, followers, following }: UserStatProps) => (
  <div className={styles.userStat}>
    <div className={styles.info}>
    <h3 className={styles.infoTitle}>Repos</h3>
    <h3 className={styles.infoNumber}>{repos}</h3>
    </div>

    <div className={styles.info}>
    <h3 className={styles.infoTitle}>Following</h3>
    <h3 className={styles.infoNumber}>{following}</h3>
    </div>

    <div className={styles.info}>
    <h3 className={styles.infoTitle}>Followers</h3>
    <h3 className={styles.infoNumber}>{followers}</h3>
    </div>
  </div>
);
