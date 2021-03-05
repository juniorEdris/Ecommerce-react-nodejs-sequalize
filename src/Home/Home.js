import React from 'react'
import { connect } from 'react-redux'
import { SectionHeaderOne } from '../PrimaryComponents/SectionHeader/SectionHeaderOne'
import DecoreBanner from './Components/DecoreBanner'
import DecoreProducts from './Components/DecoreProducts'
import  ProductSecion  from './Components/PrductSecion'
import { WideBanner } from './Components/WideBanner'
import './homepage.css'

export const Home = (props) => {
    return (
        <div className='home_page col-12'>
            <WideBanner />
            <SectionHeaderOne fontStyleOne={'Best'} fontStyleTwo={ 'Selling'}/>
            <ProductSecion />
            <DecoreBanner/>
            <DecoreProducts/>
        </div>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
