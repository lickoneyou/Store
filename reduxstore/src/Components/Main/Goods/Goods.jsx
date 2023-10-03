import React from 'react'
import styles from './Goods.module.css'

const Goods = ({ myGoods }) => {
  const goods = []
  for (const key in myGoods) {
    goods.push(...myGoods[key])
  }
  console.log(goods)
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
                <img src="./assets/icons/korzina.png" alt="cart" />
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Goods
