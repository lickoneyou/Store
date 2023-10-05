import React from "react";
import styles from "./Catalog.module.css";
import { useDispatch, useSelector } from "react-redux";

const Catalog = () => {
  const catalogState = useSelector((state) => state.catalog);
  const dispatch = useDispatch()

  window.addEventListener("click", function (event) {
    if (event.target.dataset.name !== "catalog" && catalogState.status === 'open') {
        console.log(catalogState);
      dispatch({type: 'CLOSE', payload: 'close'})
    }
  });
  return (
    <div
      data-name="catalog"
      className={styles.catalog}
      style={{ left: catalogState.left }}
    >
      Catalog
    </div>
  );
};

export default Catalog;
