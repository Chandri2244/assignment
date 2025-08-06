import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css';

const Services = () => {
  return (
    <>
    <div className='our-serices' id='services'>
        <div className='container'>
            <div className='row'>
                <div className='col-12'>
                    <h1 className="service-heading">Our Services</h1>
                </div>
                {/* card1 */}
                <div className="col-12 col-md-6 col-lg-3">
                    <div className="shadow service-card p-3 mb-3 ">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSCW_WkwOJWvKr3-7Qpgtg3lofjBkuKWDiLw&s" className="service-image w-100" alt='education'/>
                        <h3 className="service-title">Education</h3>
                    </div>
                </div>
                {/* card2 */}
                <div className="col-12 col-md-6 col-lg-3">
                    <div className="shadow service-card p-3 mb-3 ">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7_FVbl2mj1LbNdjdojEwHl38NsWJ1Ij98CA&s" className="service-image w-100" alt='healthcare'/>
                        <h3 className="service-title">Healthcare</h3>
                    </div>
                </div>
                {/* card3 */}
                <div className="col-12 col-md-6 col-lg-3">
                    <div className="shadow service-card p-3 mb-3 ">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAl3uqhFUfnhfQKdEfyKwOAJNw_tZmnKOc_w&s" className="service-image w-100" alt='Womenempowerment'/>
                        <h3 className="service-title">Women Empowerment</h3>
                    </div>
                </div>
                {/* card4 */}
                <div className="col-12 col-md-6 col-lg-3">
                    <div className="shadow service-card p-3 mb-3 ">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH6J2yJWtSCK8aAlA4Xue1mo-N32Gh-KgLjA&s" className="service-image w-100" alt='disaster'/>
                        <h3 className="service-title">Disaster Management</h3>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
export default Services