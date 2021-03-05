import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { decor } from '../../Data'

const DecoreProducts = (props) => {
    return (
        <div className='decor_product row'>
        {
            decor.map(product => (
                <div className="single_product col col-md-4">
                    <div className="product_image" key={product.id}>
                        <Link to={`productdetails?id=${product.id}`}>
                            <img src={`assets/images/homepage/${product.image}`} alt={product.name}/>
                        </Link>
                    </div>
                    <div className="product_btn">
                        <div className='add_btn'>
                            <button className="btn btn-dark">Add to cart</button>
                        </div>
                        <div className="product_qty mr-3">
                            <span class="dec qtybtn"><i class="fa fa-minus"></i></span>
                            <input type="text" defaultValue={0} />
                            <span class="inc qtybtn"><i class="fa fa-plus"></i></span>
                        </div>
                    </div>
                    <div className="product_desc row">
                        <div className="product_name col-6"><Link to={`productdetails?id=${product.id}`}>{ product.name }</Link></div>
                        <div className="product_price col-6">{ product.price }</div>
                    </div>
                </div>
            ))
        }
        </div>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(DecoreProducts)
