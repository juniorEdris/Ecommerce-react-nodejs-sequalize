import React from 'react'
import { connect } from 'react-redux'

export const index = (props) => {
    return (
        <div className='contact_wrapper'>
            <h2>Contact Page</h2>
        </div>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(index)
