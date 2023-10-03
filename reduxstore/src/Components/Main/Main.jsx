import React from 'react'
import styles from './Main.module.css'
import Slider1 from './Slider1/Slider1'
import Categories from './Categories/Categories'
import Goods from './Goods/Goods'
import { useSelector } from 'react-redux'
import data from '../Data/data'

const Main = () => {
  const myGoods = useSelector((state) => {
    return Object.keys(state).length === 0 || Object.values(state).every((el) => el ? false : data) ? data : state
  })
  return (
    <main>
      <Slider1 />
      <Categories />
      <Goods myGoods={myGoods} />
    </main>
  )
}

export default Main
