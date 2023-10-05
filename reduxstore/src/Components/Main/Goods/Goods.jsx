import React from 'react'
import styles from './Goods.module.css'
import { useDispatch, useSelector } from 'react-redux'

const Goods = ({ myGoods }) => {
  const goodsState = useSelector(state => state.cart)
  console.log(goodsState);
  const dispatch = useDispatch()
  const goods = []
  for (const key in myGoods) {
    goods.push(...myGoods[key])
  }
  return (
    <section className={styles.goods}>
      <h2>Goods</h2>
      <div className={styles.goodsWrapper}>
        {goods.map((el) => {
          return (
            <div className={styles.goodWrapper} key={el.id}>
              <img src={el.frontPic} alt={el.name} />
              <h3>{el.price}$</h3>
              <p>{el.name}</p>
              <div className={styles.goodsBtns}>
                <button>Open</button>
                <img style={{cursor: 'pointer'}} src="./assets/icons/korzina.png" alt="cart" onClick={() => {
                  const good = goods.find(elem => elem.id == el.id)
                  if(goodsState.goods.find(elem => elem.id == el.id)){
                    dispatch({type: 'REMOVE_GOOD', payload: good})
                  } else {
                    dispatch({type: 'ADD_GOOD', payload: good})
                  }
                }}/>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Goods
