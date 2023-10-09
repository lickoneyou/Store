import React from "react";
import styles from "./Catalog.module.css";
import { useDispatch, useSelector } from "react-redux";
import { categories } from "../../Main/Categories/Categories";

const Catalog = () => {
  const catalogState = useSelector((state) => state.catalog);
  const dispatch = useDispatch();

  window.addEventListener("click", function (event) {
    if (
      event.target.dataset.name !== "catalog" &&
      catalogState.status === "open"
    ) {
      dispatch({ type: "CLOSE", payload: "close" });
    }
  });

  const filter = (goods) => {
    dispatch({ type: goods });
  };
  return (
    <div
      data-name="catalog"
      className={styles.catalog}
      style={{ left: catalogState.left }}
    >
      {categories.map((el, ind) => (
        <div
          data-name="catalog"
          key={el + ind}
          className={styles.categoriWrapper}
          onClick={function (event) {
            filter(el.name);
          }}
        >
          <img src={el.pic} alt={el.name} data-name="catalog" />
          <p data-name="catalog">{el.name}</p>
        </div>
      ))}
    </div>
  );
};

export default Catalog;
