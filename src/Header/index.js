import React from 'react'
import { connect } from 'react-redux'
import Nav  from './Components/Nav'
import Logo  from './Components/Logo'
import { RightBtns } from './Components/RightBtns'
import './header.css'
import Sidebar from './Components/Sidebar'

export const index = (props) => {
    return (
        <div className='header row'>
            <Sidebar/>
            <Logo/>
            <Nav />
            <RightBtns/>
        </div>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(index)
