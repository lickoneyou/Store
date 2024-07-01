import React from "react";
import { useDispatch, useSelector } from "react-redux";
import GoodsItem from "./GoodsItem/GoodsItem";
import styles from "./MainCart.module.css";
import BuyPopup from "./BuyPopup/BuyPopup";

const MainCart = () => {
  const cartState = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <main className={styles.main}>
      <BuyPopup />
      <a href="#/" className={styles.back}>
        Back
      </a>
      <div className={styles.goodsWrapper}>
        {cartState.goods.length == 0 ? (
          <p className={styles.empty}>Cart is empty</p>
        ) : (
          cartState.goods.map((el, ind) => (
            <GoodsItem key={el.id} elem={el} index={ind} />
          ))
        )}
      </div>
      <div className={styles.buyWrapper}>
        {cartState.goods.length == 0 ? (
          false
        ) : (
          <button
            className={styles.buyBtn}
            onClick={() => dispatch({ type: "flex" })}
          >
            BUY NOW
          </button>
        )}
        <p className={styles.total}>Total: {cartState.price}$</p>
      </div>
    </main>
  );
};

export default MainCart;
