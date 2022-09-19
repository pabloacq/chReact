import React from 'react'
import './Banner.css'
import petImg from '../../assets/img/cats.png'

function Banner() {
  return (
    <div id="banner">
      <div id="banner-inner" className="d-flex">
        <div id="banner-content" className="row d-flex flex-column flex-lg-row justify-content-center">
          <div className="col">
            <div className="d-flex flex-column justify-content-center align-items-center">
              <div><span className="logo banner-main text-center">CatShop</span></div>
              <div><p className="banner-text text-center text-lg-start w-100">La tienda favorita de tus mascotas</p></div>
            </div>
          </div>
          <div className="col">
            <div id="img-container" className="d-flex justify-content-center"><img src={petImg} alt="pets"></img></div>
          </div>
        </div>
      </div>
      <div id="banner-bottom"></div>
    </div>

  )
}

export default Banner 