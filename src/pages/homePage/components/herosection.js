import React from 'react'
import bannerimage from '../../../assets/images/home/banner/banner.svg'

const Herosection = () => {
  return (
    <div> <section className="banner-section">
    <div className="page-width">
      <div className="banner-inner-section">
        <div className="banner-content">
          <small>Best in Dubai</small>
          <p>Welcome To</p>
          <h2> Home <span> Comfort</span></h2>
          <p className="description">Home Comfort provides home repair services in Dubai with reasonable rates. We fix it right with home comfort professional experts.
          </p>
          <div className="banner-btn">
            <button className="btn1">CONTACT US</button>
            <button className="btn2">LEARN MORE</button>
          </div>
        </div>
        <div className="column2">
          <img src={bannerimage} alt="" />
        </div>
      </div>
    </div>
  </section>
</div>
  )
}

export default Herosection