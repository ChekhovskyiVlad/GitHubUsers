import styles from './Search.module.scss';
import { ReactComponent as IconSearch } from '../../assets/icon-search.svg'
import { Button } from './Button';
import { useRef } from 'react';



interface SearchProps {
  hasError: boolean,
  onSubmit: (text: string) => void
}

type FormFields = {
  username: HTMLInputElement,
}

export const Search = ({ hasError, onSubmit }: SearchProps) => {
  const searchRef = useRef<HTMLInputElement | null>(null)

  const handleSubmit = (event:React.FormEvent<HTMLFormElement & FormFields>) => {
  event.preventDefault();
  const text = searchRef.current ? searchRef.current.value : ''

  if(text) {
    onSubmit(text);
    if(searchRef.current)
    searchRef.current.value = '';
  }

  }

  return(
  <form autoComplete="off" onSubmit={handleSubmit} >
  <div className={styles.search} >
    <label className={styles.label} htmlFor="search" >
      <IconSearch/>
    </label>
    <input
    ref={searchRef}
    type="text"
    className={styles.textField}
    placeholder='Search GitHub username...'
    id='search'
    name='username'
    />
    {hasError && (
      <div className={styles.error}>No result</div>
      )}
    <Button>Search</Button>
  </div>

  </form>

  )
}

