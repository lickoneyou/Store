import React from 'react'
import styles from './Header.module.css'

const Header = () => {
  return (
    <header>
      <img src="./assets/Logo.png" alt="Logo" />
      <button className={styles.katalog}>KATALOG</button>
      <div>
        <input type='text' placeholder='Maxsulotlarni izlash'/>
        <button>
          <img src="./assets/icons/search.png" alt="search" />
        </button>
      </div>
      <img className={styles.cart} src="./assets/icons/Korzina.png" alt="search" />
    </header>
  )
}

export default Header
