import React from 'react'
import './Banner.css'
import petImg from '../../assets/img/cats.png'

function Banner() {
  return (
    <div id="banner">
      <div id="banner-content">
        <div class="d-flex flex-column justify-content-center">
          <div><span class="logo banner-main">CatShop</span></div>
          <div><span class="banner-text">La tienda favorita de tus mascotas</span></div>
        </div>
        <div id="img-container"><img src={petImg} alt="pets"></img></div>
      </div>
      <div id="banner-bg"></div>
    </div>
  )
}

export default Banner 