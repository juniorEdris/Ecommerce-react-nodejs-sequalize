import React from 'react'
import { connect } from 'react-redux'

 const index = (props) => {
    return (
        <div className='shop_wrapper'>
            <h2>Shop Page</h2>
        </div>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(index)
