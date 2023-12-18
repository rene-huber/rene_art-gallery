import Link from 'next/link';
import { useState } from 'react';
import useStore from '@/store'; 
import styles from './Navigation.module.css';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

function Navigation() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const isDarkTheme = useStore(state => state.isDarkTheme);
  const toggleTheme = useStore(state => state.toggleTheme);

  const handleThemeDark = () => {
    toggleTheme();
    
  }

  return (
    <nav className={`${styles.navContainer} ${isDarkTheme ? styles.dark : ''}`}>


      <div className={styles.logo}> <Link href="/">  Art Gallery</Link>
      </div>
      <button
        className={styles.hamburger}
        onClick={() => setIsNavExpanded(!isNavExpanded)}
      >
        ☰
      </button>
      <ul className={`${styles.navList} ${isNavExpanded ? styles.showMenu : ''}`}>
      
        <li className={styles.navItem}>
          <Link href="/spotlight">Spotlight</Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/art-pieces">Pieces</Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/favorites">Favorites</Link>
        </li>
      </ul>
      <button
        className={styles.toggleButton}
        onClick={handleThemeDark}
      >
        {!isDarkTheme ? <LightModeIcon style={{ color: 'black' }} /> : <DarkModeIcon style={{ color: 'grey' }} />}
      </button>
    </nav>
  );
}

export default Navigation;
