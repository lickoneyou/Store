import React from "react";
import styles from "./GoodsItem.module.css";
import { useDispatch, useSelector } from "react-redux";

const GoodsItem = ({ elem, index }) => {
  const stateGoods = useSelector((state) => state.cart);
  const dispach = useDispatch();
  return (
    <div
      className={styles.GoodsItemWrapper}
      style={{ background: index % 2 == 0 ? "rgba(0,0,0, 0.03)" : "#FFF" }}
    >
      <img src={elem.frontPic} alt={elem.name} />
      <div className={styles.descrWrapper}>
        <h2>
          <b>{elem.name}</b>
        </h2>
        <p>{elem.description}</p>
      </div>
      <div className={styles.priceWrapper}>
        <p>Price: {elem.price}$</p>
        <div className={styles.btnsWrapper}>
          <button>Open</button>
          <button
            onClick={() => {
              dispach({ type: "REMOVE_GOOD", payload: elem });
              elem.inCart = false;
            }}
          >
            Remove Item
          </button>
        </div>
      </div>
    </div>
  );
};

export default GoodsItem;
