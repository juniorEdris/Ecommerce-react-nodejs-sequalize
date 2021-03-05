import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

export const RightBtns = (props) => {
    return (
        <div className='right_btns col-12 col-md-4 d-none d-md-block'>
            <ul className='nav'>
                <li><Link to='#'>Search</Link></li>
                <li><Link to='/account'>Account</Link></li>
                <li><Link to='#'>Cart {0}</Link></li>
            </ul>
        </div>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(RightBtns)
