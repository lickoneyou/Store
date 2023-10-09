import React, { useRef } from "react";
import styles from "./Header.module.css";
import { useDispatch, useSelector } from "react-redux";
import Catalog from "./Catalog/Catalog";

const Header = () => {
  const total = useSelector((state) => state.cart.price);
  const catalogState = useSelector((state) => state.catalog);
  const myGoods = useSelector((state) => state.filter);
  const dispatch = useDispatch();
  const imputRef = useRef();

  const openCatalog = () => {
    if (catalogState.status === "close")
      dispatch({ type: "OPEN", payload: "open" });
  };

  const filter = () => {
    dispatch({type:'WORD FILTER', payload: imputRef.current.value})
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
        <input type="text" placeholder="Maxsulotlarni izlash" ref={imputRef} />
        <button onClick={filter}>
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
