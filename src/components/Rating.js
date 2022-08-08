import React from 'react'
import Star from "../assets/images/Star.png"

function Rating() {
    return (
        <div className='d-flex gap-1 mt-2'>
            <img className='star-rating' src={Star} alt=''></img>
            <img className='star-rating' src={Star} alt=''></img>
            <img className='star-rating' src={Star} alt=''></img>
            <img className='star-rating' src={Star} alt=''></img>
            <img className='star-rating' src={Star} alt=''></img>
            <span className='fash-h7'>(10)</span>
        </div>
    )
}

export default Rating
