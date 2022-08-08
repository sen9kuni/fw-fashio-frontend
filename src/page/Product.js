import React, { useState } from 'react'
import { Button, Card } from 'react-bootstrap' 
import Navbar from '../components/Navbar'
import Product1 from "../assets/images/product1.png"
import Product2 from "../assets/images/product2.png"
import Product3 from "../assets/images/product3.png"
import Product4 from "../assets/images/product4.png"
import Product5 from "../assets/images/product5.png"
import ProductReview from '../components/ProductReview'
import Counter from '../components/Counter'
import Colors from '../components/Colors'
import Price from '../components/Price'
import ProductNavigation from '../components/ProductNavigation'
import Rating from '../components/Rating'
import Star from "../assets/images/Star.png"
import Line from "../assets/images/Line.png"


function Product() {

    return (
        <>
        <Navbar></Navbar>
        <section>
            <div className='px-5'>
            <ProductNavigation></ProductNavigation>
            <div className='d-flex mt-5'>
                <div className='col-md-4'>
                    <div className='product-img-wrapper'>
                    <img className='rounded-3 product-img-primary' src={Product1} alt=''></img>
                    <div className='d-flex gap-3 mt-3'>
                        <img className='rounded-3 product-img-secondary' src={Product1} alt=''></img>
                        <img className='rounded-3 product-img-secondary' src={Product2} alt=''></img>
                        <img className='rounded-3 product-img-secondary' src={Product3} alt=''></img>
                        <img className='rounded-3 product-img-secondary' src={Product4} alt=''></img>
                        <img className='rounded-3 product-img-secondary' src={Product5} alt=''></img>
                    </div>
                    </div>
                </div>
                <div className='col-md-8 d-flex flex-column ms-5'>
                    <div className='d-flex flex-column mb-4 gap-2'>
                        <span className='fash-h1'>Baju muslim pria</span>
                        <div className='product-shop-name'><span className='fash-h4'>Zalora Cloth</span></div> 
                        <Rating></Rating>
                    </div>
                    <Price></Price>
                    <Colors></Colors>
                    <Counter></Counter>
                    <div className='d-flex gap-3'>
                        <Button className='border product-btn-option'>Chat</Button>
                        <Button className='border product-btn-option'>Add bag</Button>
                        <Button className='product-btn-buy'>Buy Now</Button>
                    </div>
                </div>
            </div>
            </div>
            <div className='product-desc-wrapper'>
                <span className='fash-h1'>Informasi Produk</span>
                <div className='my-4 d-flex flex-column'>
                    <span className='fash-h2'>Condition</span>
                    <div className='c-secondary'><span className='fash-h2'>New</span></div>    
                </div>
                <div className='d-flex flex-column gap-3 mb-5'>
                    <span className='fash-h2'>Description</span>
                    <div className='product-desc'> 
                    <span className='fash-h6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non magna rutrum, pellentesque augue eu, sagittis velit. Phasellus quis laoreet dolor. Fusce nec pharetra quam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent sed enim vel turpis blandit imperdiet ac ac felis. Etiam tincidunt tristique placerat. Pellentesque a consequat mauris, vel suscipit ipsum. Donec ac mauris vitae diam commodo vehicula. Donec quam elit, sollicitudin eu nisl at, ornare suscipit magna. Donec non magna rutrum, pellentesque augue eu, sagittis velit. Phasellus quis laoreet dolor. Fusce nec pharetra quam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent sed enim vel turpis blandit imperdiet ac ac felis. In ultricies rutrum tempus. Mauris vel molestie orci.</span>
                    </div>    
                </div>
                <ProductReview></ProductReview>
            </div>
            <hr className='product-hr'></hr>
            <div className='d-flex flex-column product-desc-wrapper'>
                <span className='product-similiar'>You can also like this</span>
                <span className='product-similiar-sec'>You've never seen it before!</span>
                <div>
                    <div>
                        card
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default Product
