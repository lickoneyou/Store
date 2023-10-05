import React from "react";
import { useSelector } from "react-redux";
import GoodsItem from "./GoodsItem/GoodsItem";
import styles from './MainCart.module.css'

const MainCart = () => {
  const cartState = useSelector((state) => state.cart);
  return (
    <main className={styles.main}>
      <a href="#/"className={styles.back}>Back</a>
      <div className={styles.goodsWrapper}>
        {cartState.goods.length == 0 ? (
          <p className={styles.empty}>Cart is empty</p>
        ) : (
          cartState.goods.map((el, ind) => <GoodsItem key={el.id} elem={el} index={ind} />)
        )}
      </div>
      <p className={styles.total}>Total: {cartState.price}$</p>
    </main>
  );
};

export default MainCart;
