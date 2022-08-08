import React from 'react'
import Star from "../assets/images/Star.png"
import Line from "../assets/images/Line.png"

function ProductReview() {
    return (
        <div className='d-flex flex-column'>
                    <span className='fash-h1'>Product review</span>
                    <div className='d-flex gap-5'>
                        <div className='d-flex flex-column'>
                            <div>
                                <p className='product-rating-val'>5.0<span className='product-rating-val-total'>/10</span></p>
                            </div>
                            <div className='d-flex gap-1'>
                                <img src={Star} alt=''></img>
                                <img src={Star} alt=''></img>
                                <img src={Star} alt=''></img>
                                <img src={Star} alt=''></img>
                                <img src={Star} alt=''></img>
                            </div>
                        </div>
                        <div className='d-flex flex-column mt-4'>
                            <div className='d-flex align-items-center gap-3'>                            
                                <div className='d-flex align-items-center gap-2'>
                                    <img className='star-rating' src={Star} alt=''></img>
                                    <span>5</span>
                                </div>
                                <img className='line-rating' src={Line} alt=''></img>
                                <span>4</span>                            
                            </div>
                            <div className='d-flex align-items-center gap-3'>                            
                                <div className='d-flex align-items-center gap-2'>
                                    <img className='star-rating' src={Star} alt=''></img>
                                    <span>4</span>
                                </div>
                                <img className='line-rating' src={Line} alt=''></img>
                                <span>0</span>                            
                            </div>
                            <div className='d-flex align-items-center gap-3'>                            
                                <div className='d-flex align-items-center gap-2'>
                                    <img className='star-rating' src={Star} alt=''></img>
                                    <span>3</span>
                                </div>
                                <img className='line-rating' src={Line} alt=''></img>
                                <span>0</span>                            
                            </div>
                            <div className='d-flex align-items-center gap-3'>                            
                                <div className='d-flex align-items-center gap-2'>
                                    <img className='star-rating' src={Star} alt=''></img>
                                    <span>2</span>
                                </div>
                                <img className='line-rating' src={Line} alt=''></img>
                                <span>0</span>                            
                            </div>
                            <div className='d-flex align-items-center gap-3'>                            
                                <div className='d-flex align-items-center gap-2'>
                                    <img className='star-rating' src={Star} alt=''></img>
                                    <span>1</span>
                                </div>
                                <img className='line-rating' src={Line} alt=''></img>
                                <span>0</span>                            
                            </div>
                        </div>
                    </div>
                </div>
    )
}

export default ProductReview
