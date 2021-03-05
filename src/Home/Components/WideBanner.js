import React from 'react'
import { connect } from 'react-redux'

export const WideBanner = (props) => {
    return (
        <div className='home_wide_banner'>
            <div className="banner_wrapper">
                <div className="single_banner">
                    <img src="./assets/images/homepage/homepage1.jpg" alt={ 'banner 1'}/>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(WideBanner)
