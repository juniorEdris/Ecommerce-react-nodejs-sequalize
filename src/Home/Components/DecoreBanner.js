import React from 'react'
import { connect } from 'react-redux'

 const DecoreBanner = (props) => {
    return (
        <div className='decore_banner'>
            <img src="./assets/images/homepage/homepage-2.jpg" alt={`decore`}/>
        </div>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(DecoreBanner)
