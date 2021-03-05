import React from 'react'
import { connect } from 'react-redux'
import { homeprod3} from '../../Data'
import Product from '../../PrimaryComponents/Product/Product'

 const PrductSecion = (props) => {
    return (
        <div className='product_section col-12'>
            {
                homeprod3.map(product => (
                    <Product
                    id={product.id}
                    title={product.name}
                    price={product.price}
                    rating={5}
                    image={`assets/images/homepage/${product.image}`}
                    key={product.id}
                    />        
                ))
            }
        </div>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(PrductSecion)
