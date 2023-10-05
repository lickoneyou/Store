import React from "react";
import styles from "./Header.module.css";
import { useSelector } from "react-redux";

const Header = () => {
  const total = useSelector((state) => state.cart.price);
  return (
    <header>
      <a href="#/">
        <img src="./assets/Logo.png" alt="Logo" />
      </a>
      <button className={styles.katalog}>KATALOG</button>
      <div className={styles.inputWrapper}>
        <input type="text" placeholder="Maxsulotlarni izlash" />
        <button>
          <img src="./assets/icons/search.png" alt="search" />
        </button>
      </div>
      <div className={styles.cartWrapper}>
        <p>
          <b>{total > 0 ? total + '$' : ''}</b>
        </p>
        <a href="#Cart">
          <img
            className={styles.cart}
            src="./assets/icons/Korzina.png"
            alt="search"
          />
        </a>
      </div>
    </header>
  );
};

export default Header;
