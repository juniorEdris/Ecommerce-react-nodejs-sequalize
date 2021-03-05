import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const Nav = (props) => {
    return (
        <div className='navigation col-12 col-md-4 d-none d-md-block'>
            <ul className='nav navigation_list'>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/shop'>Shop</Link></li>
                <li><Link to='/contact'>Contact</Link></li>
            </ul>
        </div>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Nav)
