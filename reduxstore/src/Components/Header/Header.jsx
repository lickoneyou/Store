import React from "react";
import styles from "./Header.module.css";
import { useDispatch, useSelector } from "react-redux";
import Catalog from "./Catalog/Catalog";

const Header = () => {
  const total = useSelector((state) => state.cart.price);
  const catalogState = useSelector((state) => state.catalog);
  const dispatch = useDispatch();

  const openCatalog = () => {
    if (catalogState.status === "close")
      dispatch({ type: "OPEN", payload: "open" });
  };

  return (
    <header>
      <Catalog />
      <a href="#/">
        <img src="./assets/Logo.png" alt="Logo" />
      </a>
      <button
        data-name="catalog"
        className={styles.katalog}
        onClick={openCatalog}
      >
        CATALOG
      </button>
      <div className={styles.inputWrapper}>
        <input type="text" placeholder="Maxsulotlarni izlash" />
        <button>
          <img src="./assets/icons/search.png" alt="search" />
        </button>
      </div>
      <div className={styles.cartWrapper}>
        <p>
          <b>{total > 0 ? total + "$" : ""}</b>
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
