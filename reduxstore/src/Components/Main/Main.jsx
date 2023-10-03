import React from 'react'
import styles from './Main.module.css'
import Slider1 from './Slider1/Slider1'
import Categories from './Categories/Categories'
import Goods from './Goods/Goods'
import { useSelector, useDispatch } from 'react-redux'

const Main = () => {
  const dispatch = useDispatch()
  const myGoods = useSelector((state) => state)

  return (
    <main>
      <Slider1 />
      <Categories />
      <Goods myGoods={myGoods}/>
    </main>
  )
}

export default Main
