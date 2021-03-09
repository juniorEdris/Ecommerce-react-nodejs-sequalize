import React from 'react'
import { connect } from 'react-redux'

const Details = (props) => {
const count = 0
    return (
        <div className='single_product_details_wrapper'>
            <div className="details_product product_name">
                JY-30801A Children Handheld Game Console Video Game Console Tetris Puzzle Game
            </div>
            <div className="details_product product_price">$550</div>
            <div className="details_product product_details">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat in commodi ducimus dolorem possimus molestiae animi error, quibusdam voluptatibus culpa?
            </div>
            <div className="details_product product_brand">
                <span className='brand'> brand :</span> uparzon mall
            </div>
            {count > 0 ? (
            <div className=" details_product single_product_qty mr-3">
              <span class="dec qtybtn">
                <i class="fa fa-minus"></i>
              </span>
              <input type="text" readOnly defaultValue={count} className="" />
              <span class="inc qtybtn">
                <i class="fa fa-plus"></i>
              </span>
            </div>
          ) : (
            <button className="details_product details_btn_cart btn btn-primary" type="button">
              add to cart
            </button>
          )}
        </div>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Details)
