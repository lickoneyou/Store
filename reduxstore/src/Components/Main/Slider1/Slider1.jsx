import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import styles from './Slider1.module.css'

const Slider1 = () => {
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 2000,
    cssEase: 'linear',
  }
  return (
    <Slider className={styles.slider} {...settings}>
      <div>
        <img className={styles.slide} src="./assets/Slider/1.png" />
      </div>
      <div>
        <img className={styles.slide} src="./assets/Slider/2.png" />
      </div>
      <div>
        <img className={styles.slide} src="./assets/Slider/3.png" />
      </div>
    </Slider>
  )
}

export default Slider1
