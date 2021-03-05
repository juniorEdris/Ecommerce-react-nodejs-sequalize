import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Logo from './Logo'
import './sidebar.css'

const Sidebar = (props) => {
    const [sidebar, setSidebar] = useState(false)
    console.log(sidebar);
    return (
        <div className=" d-md-none">
            <div className="sidebar_col row">
                <div className="col-4">
                    <Link to='#' onClick={ ()=>setSidebar(true) }>
                        <i class="fa fa-bars" aria-hidden="true" ></i>
                    </Link>
                </div>
                <div className='sidebar_logo col-5'>
                    <i className="fa fa-shopping-basket" aria-hidden="true"></i>{ ' ' }<span className=''>Online Shop</span>
                </div>
                <div className='sidebar_cart col-3'>
                    <Link to='#'>
                        <span className="fa fa-shopping-cart" aria-hidden="true"></span>
                    </Link>
                </div>
            </div>
            <div className='sidebar d-md-none'>
                <div className={`sidebar_route ${!sidebar && "d-none"}`}>
                    <div className="cross">
                        <span class="lnr lnr-cross" onClick={ ()=>setSidebar(false)}></span>
                    </div>
                    <ul className='sidebar_route_list'>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/shop'>Shop</Link></li>
                        <li><Link to='/contact'>Contact</Link></li>
                        <li><Link to='/account'>Account</Link></li>
                        <li><Link to='/search'>search</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar)
