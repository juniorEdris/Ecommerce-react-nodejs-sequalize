import React from 'react'
import { connect } from 'react-redux'

const Logo = (props) => {
    return (
        <div className='logo col-12 col-md-4 d-none d-md-block'>
            <i class="fa fa-shopping-basket" aria-hidden="true"></i>{ ' ' }<span className=''>Online Shop</span>
        </div>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Logo)
