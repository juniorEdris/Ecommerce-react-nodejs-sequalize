import React from 'react'
import { connect } from 'react-redux'

export const SectionHeaderOne = (props) => {
    return (
        <div>
            <h3 className='section_heading_one'>{props.fontStyleOne} <span>{props.fontStyleTwo}</span></h3>
        </div>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(SectionHeaderOne)
