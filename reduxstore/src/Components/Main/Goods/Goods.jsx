import React from 'react'
import styles from './Goods.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { showInfoToast, showSuccessToast } from './toast'

const Goods = ({ myGoods }) => {
  const goodsState = useSelector(state => state.cart)
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
                <a href={'#'+ el.id}>Open</a>
                <img className='addCart__Img' style={{cursor: 'pointer', boxShadow: el.inCart ? '0px 1px 3px 4px #0f0cdf' : ''}} src="./assets/icons/Korzina.png" alt="cart" onClick={(event) => {
                  const good = goods.find(elem => elem.id == el.id)
                  if(goodsState.goods.find(elem => elem.id == el.id)){
                    dispatch({type: 'REMOVE_GOOD', payload: good})
                    showInfoToast(el.name)
                  } else {
                    dispatch({type: 'ADD_GOOD', payload: good})
                    showSuccessToast(el.name)
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
