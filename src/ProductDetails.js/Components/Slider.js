import React from 'react'
import { connect } from 'react-redux'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const Slider = (props) => {
    return (
        <div className='details_slider'>
            <Carousel 
        autoPlay 
        interval="3000" 
        transitionTime="1000" 
        infiniteLoop
        showIndicators={false}
            >
                <div className="slider_single_img">
                    <img src="./assets/images/products/product-1.png" alt=""/>
                </div>
      </Carousel>
        </div>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Slider)
