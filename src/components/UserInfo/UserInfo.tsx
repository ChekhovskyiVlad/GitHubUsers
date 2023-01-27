import { LocalUser } from '../../types/User';
import styles from './UserInfo.module.scss';
import { ReactComponent as IconLocation}  from '../../assets/icon-location.svg'
import { ReactComponent as IconCompany}  from '../../assets/icon-company.svg'
import { ReactComponent as IconTwitter}  from '../../assets/icon-twitter.svg'
import { ReactComponent as IconWebSite}  from '../../assets/icon-website.svg'
import { InfoItem, InfoItemProps } from '../InfoItem';




interface UserInfoProps extends Pick<
LocalUser,
'website' | 'company' | 'location' | 'twitter'
>{ }

export const UserInfo = ({ company, location, twitter, website }: UserInfoProps) => {
  const items: InfoItemProps[] = [
    {
      icon: <IconLocation/>,
      text: location,
    },
    {
      icon: <IconCompany/>,
      text: company
    },
    {
      icon: <IconTwitter/>,
      text: twitter
    },
    {
      icon: <IconWebSite/>,
      text: website,
      isLink: true
    }
  ]
  return(
  <div className={styles.userInfo}>
    {items.map(item => (
      <InfoItem {...item} key={item.text}/>
    ))}
  </div>
  )
}


