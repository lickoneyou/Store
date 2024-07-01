import React from 'react'
import styles from './Footer.module.css'

const Footer = () => {
  return (
    <footer>
      <div className={styles.footerWrapper}>
        <div style={{ display: 'flex', 'justifyContent': 'space-between' }}>
          <div className={styles.rightDescr}>
            <div>
              <h4>
                <b>Hujjatlar</b>
              </h4>
              <ul>
                <li>Umumiy shartlar</li>
                <li>Ofertalar arxivi</li>
                <li>Nizom</li>
                <li>Guvohnoma</li>
              </ul>
            </div>
            <div>
              <h4>
                <b>Servis</b>
              </h4>
              <ul>
                <li>Do’konlar</li>
                <li>Biz haqimizda</li>
                <li>Hamkorlik uchun</li>
                <li>Qaytarish</li>
                <li>Promokodlar</li>
              </ul>
            </div>
            <div>
              <h4>
                <b>Mahsulotlar katalogi</b>
              </h4>
              <ul>
                <li>Katalog 1</li>
                <li>Katalog 1</li>
                <li>Katalog 2</li>
                <li>Katalog 2</li>
                <li>Katalog 3</li>
                <li>Katalog 3</li>
              </ul>
            </div>
          </div>
          <div>
            <h4>
              <b>Axbarot xizmati</b>
            </h4>
            <p>contact.@nextstore.uz</p>
            <div>
              <p>+998 97 712 96 96</p>
              <p>+998 95 503 09 09</p>
            </div>
            <p>Sag’bon 186, Olmazor tumani, Toshkent, O'zbekiston</p>
            <div className={styles.socialWrapper}>
              <a href="#">
                <img src="./assets/social/Facebook.png" alt="Facebook" />
              </a>
              <a href="#">
                <img src="./assets/social/Instagram.png" alt="Instagram" />
              </a>
              <a href="#">
                <img src="./assets/social/Telegram.png" alt="Telegram" />
              </a>
              <a href="#">
                <img src="./assets/social/TikTok.png" alt="TikTok" />
              </a>
            </div>
          </div>
        </div>
        <hr />
        <div style={{ display: 'flex', 'justifyContent': 'space-between' }}>
          <p>2022 Nextstore.com</p>
          <p>Powered by</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
