import React from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'

const Reviews = (props) => {
    return (
        <div className='details_review'>
            <div className=" review_wrapper">
                <ul>
                    <li className='review_list'>
                        <div className="">
                            <div className="">
                            <div className="customer_name mb-1">Customer name</div>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis amet dignissimos dolorem ratione officiis illum cum. Sed, excepturi voluptatem! Maxime minima excepturi dolorem velit accusamus?</p>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Reviews)
