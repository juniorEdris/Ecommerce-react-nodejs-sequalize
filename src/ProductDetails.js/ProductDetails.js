import React from 'react'
import { connect } from 'react-redux'
import { useQuery } from '../PrimaryComponents/Utilities/AllFunctions'
import Details from './Components/Details'
import Reviews from './Components/Reviews'
import Slider from './Components/Slider'
import './productdetails.css'
import SectionHeaderOne from '../PrimaryComponents/SectionHeader/SectionHeaderOne'

const ProductDetails = (props) => {
    const query = useQuery()
    const prodID = query.get('id');
    return (
        <div className='product_details_wrapper'>
            <div className="row">
                <div className="col-12 col-md-6">
                    <Slider />
                </div>
                <div className="col-12 col-md-6">
                    <Details/>
                </div>
                <div className="col-12 ">
                    <SectionHeaderOne fontStyleOne={'Customer'} fontStyleTwo={ 'Reviews'}/>
                    <Reviews/>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails)
