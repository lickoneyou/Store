import React, { useRef } from "react";
import styles from "./Product.module.css";
import data from "../Data/data";
import { useDispatch, useSelector } from "react-redux";

const Product = ({ location }) => {
  const goodsState = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const refImg = useRef();
  const goods = [];
  for (const key in data) {
    goods.push(...data[key]);
  }
  const id = location.hash.replace("#", "");
  const product = goods.find((el) => el.id == id);

  const swapImg = (target) => {
    refImg.current.src = target.src;
  };

  return (
    <>
      <div className={styles.productWrapper}>
        <a href="#/" className={styles.back}>
          Back
        </a>
        <div className={styles.img}>
          <img
            className={styles.titleImg}
            src={product.frontPic}
            alt={product.name}
            ref={refImg}
          />
          <div className={styles.slider}>
            {product.otherPic.map((el) => (
              <img
                key={el}
                src={el}
                alt={product.name}
                onClick={(event) => {
                  swapImg(event.target);
                }}
              />
            ))}
          </div>
        </div>
        <div className={styles.descrWraper}>
          <h2>
            <b>{product.name}</b>
          </h2>
          <p>{product.description}</p>
          <button
            onClick={() => {
              const good = goods.find((elem) => elem.id == product.id);
              if (goodsState.goods.find((elem) => elem.id == product.id)) {
                dispatch({ type: "REMOVE_GOOD", payload: good });
              } else {
                dispatch({ type: "ADD_GOOD", payload: good });
              }
            }}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </>
  );
};

export default Product;
