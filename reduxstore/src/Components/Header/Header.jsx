import React from 'react'
import styles from './Header.module.css'

const Header = () => {
  return (
    <header>
      <a href="#/"><img src="./assets/Logo.png" alt="Logo" /></a>
      <button className={styles.katalog}>KATALOG</button>
      <div>
        <input type='text' placeholder='Maxsulotlarni izlash'/>
        <button>
          <img src="./assets/icons/search.png" alt="search" />
        </button>
      </div>
      <a href="#Cart"><img className={styles.cart} src="./assets/icons/Korzina.png" alt="search" /></a>
    </header>
  )
}

export default Header
