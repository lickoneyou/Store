import React from 'react'
import styles from './Catedories.module.css'

const categories = [
  { name: 'Smartphones', pic: './assets/Categories/phone.png' },
  { name: 'TVs', pic: './assets/Categories/televisor.png' },
  { name: 'Laptops', pic: './assets/Categories/laptop.png' },
  { name: 'Fridges', pic: './assets/Categories/fridge.png' },
  { name: 'Wash Machine', pic: './assets/Categories/washMachine.png' },
]

const Categories = () => {
  return (
    <section className={styles.categories}>
      <h2 className={styles.categoriesTitle}>Categories</h2>
      <div className={styles.categoriesWrapper}>
        {categories.map((el, ind) => (
          <div key={el + ind} className={styles.categoriWrapper}>
            <img src={el.pic} alt={el.name} />
            <p>{el.name}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Categories
