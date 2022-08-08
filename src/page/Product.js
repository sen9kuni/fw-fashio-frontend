// import React, { useState } from 'react'
// import { Button, Card } from 'react-bootstrap' 
// import Navbar from '../components/Navbar'
// import Product1 from "../assets/images/product1.png"
// import Product2 from "../assets/images/product2.png"
// import Product3 from "../assets/images/product3.png"
// import Product4 from "../assets/images/product4.png"
// import Product5 from "../assets/images/product5.png"
// import ProductReview from '../components/ProductReview'
// import Counter from '../components/Counter'
// import Colors from '../components/Colors'
// import Price from '../components/Price'
// import ProductNavigation from '../components/ProductNavigation'
// import Rating from '../components/Rating'
// import Star from "../assets/images/Star.png"
// import Line from "../assets/images/Line.png"


// function Product() {

//     return (
        
//         <Navbar></Navbar>
//         <div className="fash-home-body d-flex flex-column align-items-center">
//             asd
//         </div>
//         {/* <section>
//             <div className='px-5'>
//             <ProductNavigation></ProductNavigation>
//             <div className='d-flex mt-5 flex-fill w'>
//                 <div className='col-md-4'>
//                     <div className='product-img-wrapper'>
//                     <img className='rounded-3 product-img-primary' src={Product1} alt=''></img>
//                     <div className='d-flex gap-3 mt-3'>
//                         <img className='rounded-3 product-img-secondary' src={Product1} alt=''></img>
//                         <img className='rounded-3 product-img-secondary' src={Product2} alt=''></img>
//                         <img className='rounded-3 product-img-secondary' src={Product3} alt=''></img>
//                         <img className='rounded-3 product-img-secondary' src={Product4} alt=''></img>
//                         <img className='rounded-3 product-img-secondary' src={Product5} alt=''></img>
//                     </div>
//                     </div>
//                 </div>
//             </div>
//                 <div className='col-md-4 d-flex flex-column ms-5 bc-dark'>
//                     <div className='d-flex flex-column mb-4 gap-2'>
//                         <span className='fash-h1'>Baju muslim pria</span>
//                         <div className='product-shop-name'><span className='fash-h4'>Zalora Cloth</span></div> 
//                         <Rating></Rating>
//                     </div>
//                     <Price></Price>
//                     <Colors></Colors>
//                     <Counter></Counter>
//                     <div className='d-flex gap-3'>
//                         <Button className='border product-btn-option'>Chat</Button>
//                         <Button className='border product-btn-option'>Add bag</Button>
//                         <Button className='product-btn-buy'>Buy Now</Button>
//                     </div>
//                 </div>
//             </div>
//             <div className='product-desc-wrapper'>
//                 <span className='fash-h1'>Informasi Produk</span>
//                 <div className='my-4 d-flex flex-column'>
//                     <span className='fash-h2'>Condition</span>
//                     <div className='c-secondary'><span className='fash-h2'>New</span></div>    
//                 </div>
//                 <div className='d-flex flex-column gap-3 mb-5'>
//                     <span className='fash-h2'>Description</span>
//                     <div className='product-desc'> 
//                     <span className='fash-h6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non magna rutrum, pellentesque augue eu, sagittis velit. Phasellus quis laoreet dolor. Fusce nec pharetra quam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent sed enim vel turpis blandit imperdiet ac ac felis. Etiam tincidunt tristique placerat. Pellentesque a consequat mauris, vel suscipit ipsum. Donec ac mauris vitae diam commodo vehicula. Donec quam elit, sollicitudin eu nisl at, ornare suscipit magna. Donec non magna rutrum, pellentesque augue eu, sagittis velit. Phasellus quis laoreet dolor. Fusce nec pharetra quam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent sed enim vel turpis blandit imperdiet ac ac felis. In ultricies rutrum tempus. Mauris vel molestie orci.</span>
//                     </div>    
//                 </div>
//                 <ProductReview></ProductReview>
//             </div>
//             <hr className='product-hr'></hr>
//             <div className='d-flex flex-column product-desc-wrapper'>
//                 <span className='product-similiar'>You can also like this</span>
//                 <span className='product-similiar-sec'>You've never seen it before!</span>
//                 <div>
//                     <div>
//                         card
//                     </div>
//                 </div>
//             </div>
//         </section> */}
//     )
// }

// export default Product


import Navbar from "../components/Navbar"
import Card from "../components/Card"
import slide_1 from '../assets/images/slides/slide-1.png'
import slide_2 from '../assets/images/slides/slide-2.png'
import slide_3 from '../assets/images/slides/slide-3.png'
import slide_4 from '../assets/images/slides/slide-4.png'
import slide_5 from '../assets/images/slides/slide-5.png'

import accessories from '../assets/images/category/accessories.png'
import bagpack from '../assets/images/category/bagpack.png'
import cap from '../assets/images/category/cap.png'
import dress from '../assets/images/category/dress.png'
import glasses from '../assets/images/category/glasses.png'
import handbag from '../assets/images/category/handbag.png'
import heels from '../assets/images/category/heels.png'
import socks from '../assets/images/category/socks.png'
import suit from '../assets/images/category/suit.png'
import tie from '../assets/images/category/tie.png'
import watch from '../assets/images/category/watch.png'

import Product1 from "../assets/images/product1.png"
import Product2 from "../assets/images/product2.png"
import Product3 from "../assets/images/product3.png"
import Product4 from "../assets/images/product4.png"
import Product5 from "../assets/images/product5.png"


import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { getProducts } from "../redux/asyncActions/getProducts"
import { AiFillStar, AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";


const Home = () => {
    const dispatch = useDispatch()
    const products = useSelector((state) => state?.getAllProducts?.data);

    React.useEffect(()=>{
        dispatch(getProducts())
    },[])
    return(
        <>
            <div className="d-flex flex-column align-items-center bc-white ">
                <Navbar />
                <div className="fash-home-body d-flex flex-column w-fill">
                    <div className="d-flex flex-column gap-2">
                        <span className="fash-h6 c-dark">Home  {'>'}  category  {'>'}  T-Shirt</span>
                        <div className="d-flex gap-4 w-fill">
                            <div className="fash-product-control d-flex flex-column gap-2">
                                <div className="d-flex flex-column gap-2">
                                    <img className="fash-main-picture" src={Product1} alt='accessories'/>
                                    <div className="d-flex justify-content-between">
                                        <img className="fash-sec-picture" src={Product1} alt='accessories'/>
                                        <img className="fash-sec-picture" src={Product2} alt='accessories'/>
                                        <img className="fash-sec-picture" src={Product3} alt='accessories'/>
                                        <img className="fash-sec-picture" src={Product4} alt='accessories'/>
                                        <img className="fash-sec-picture" src={Product5} alt='accessories'/>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex flex-column justify-content-between">
                                <div className="d-flex flex-column">
                                    <span className="fash-h2 fw-5">Baju muslim pira</span>
                                    <span className="fash-h6 fw-4 c-dark">Zalora Cloth</span>
                                    <div>
                                        <AiFillStar className='c-secondary' />
                                        <AiFillStar className='c-secondary' />
                                        <AiFillStar className='c-secondary' />
                                        <AiFillStar className='c-dark' />
                                        <AiFillStar className='c-dark' />
                                        <span className='fash-h6'>(10)</span>
                                    </div>
                                </div>
                                <div className="d-flex flex-column">
                                    <span className="fash-h6 fw-4 c-dark">Price</span>
                                    <span className="fash-h1 fw-5 c-black">$ 20.0</span>
                                </div>
                                <div className="d-flex flex-column">
                                    <span className="fash-h6 fw-4 c-black">Color</span>
                                    <div className="d-flex gap-2">
                                        <div className="fash-color-input" style={{backgroundColor: '#837282'}}></div>
                                        <div className="fash-color-input" style={{backgroundColor: '#33ff82'}}></div>
                                        <div className="fash-color-input" style={{backgroundColor: '#d00123'}}></div>
                                        <div className="fash-color-input" style={{backgroundColor: '#3002f9'}}></div>
                                    </div>
                                </div>
                                <div className="d-flex gap-5">
                                    <div>
                                        <span className="fash-h6 fw-4 c-black">Size</span>
                                        <div className="d-flex align-items-center gap-2">
                                            <div className="fash-color-input d-flex align-items-center justify-content-center border-0" style={{backgroundColor: '#D4D4D4'}}><AiOutlineMinus /></div>
                                            <span className="fash-h6 fw-4 c-black">1</span>
                                            <div className="fash-color-input d-flex align-items-center justify-content-center border-0" style={{backgroundColor: '#D4D4D4'}}><AiOutlinePlus /></div>
                                        </div>
                                    </div>
                                    <div>
                                        <span className="fash-h6 fw-4 c-black">Jumlah</span>
                                        <div className="d-flex align-items-center gap-2">
                                            <div className="fash-color-input d-flex align-items-center justify-content-center border-0" style={{backgroundColor: '#D4D4D4'}}><AiOutlineMinus /></div>
                                            <span className="fash-h6 fw-4 c-black">1</span>
                                            <div className="fash-color-input d-flex align-items-center justify-content-center border-0" style={{backgroundColor: '#D4D4D4'}}><AiOutlinePlus /></div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="d-flex gap-3">
                                        <button className="fash-button bc-ligth c-black" type='button'>Chat</button>
                                        <button className="fash-button bc-ligth c-black" type='button'>Add bag</button>
                                        <button className="fash-button bc-primary c-secondary" type='button'>Buy Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="d-flex flex-column gap-4">
                        <span className="fash-h1 fw-5 c-black">Informasi Produk</span>
                        <div className="d-flex flex-column fash-condition">
                            <span className="fash-h3 fw-5 c-black">Condition</span>
                            <span className="fash-h3 fw-5 c-primary-soft">New</span>
                        </div>
                        <div className="d-flex flex-column fash-condition">
                            <span className="fash-h3 fw-5 c-black">Description</span>
                            <span className="fash-h6 fw-3 c-black">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non magna rutrum, pellentesque augue eu, sagittis velit. Phasellus quis laoreet dolor. Fusce nec pharetra quam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent sed enim vel turpis blandit imperdiet ac ac felis. Etiam tincidunt tristique placerat. Pellentesque a consequat mauris, vel suscipit ipsum. Donec ac mauris vitae diam commodo vehicula. Donec quam elit, sollicitudin eu nisl at, ornare suscipit magna. Donec non magna rutrum, pellentesque augue eu, sagittis velit. Phasellus quis laoreet dolor. Fusce nec pharetra quam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent sed enim vel turpis blandit imperdiet ac ac felis. In ultricies rutrum tempus. Mauris vel molestie orci.</span>
                        </div>

                        <div className="d-flex flex-column fash-condition">
                            <span className="fash-h3 fw-5 c-black">Product review</span>
                            <div className="d-flex gap-4">
                                <div className="d-flex flex-column ">
                                    <div>
                                        <span className="fash-reting-product fw-5 c-black">5.0</span>
                                        <span className="fash-h7 fw-2 c-dark">/10</span>
                                    </div>
                                    <div className="d-flex justify-content-between">
                                        <AiFillStar className='c-secondary' />
                                        <AiFillStar className='c-secondary' />
                                        <AiFillStar className='c-secondary' />
                                        <AiFillStar className='c-dark' />
                                        <AiFillStar className='c-dark' />
                                    </div>
                                </div>
                                <div className="">
                                    <div className="d-flex align-items-center gap-2">
                                        <AiFillStar className='c-secondary' />
                                        <span className="fash-h7 fw-2 c-dark">5</span>
                                        <div className="fash-bar-reating"></div>
                                        <span className="fash-h7 fw-2 c-dark">(10)</span>
                                    </div>
                                    <div className="d-flex align-items-center gap-2">
                                        <AiFillStar className='c-secondary' />
                                        <span className="fash-h7 fw-2 c-dark">4</span>
                                        <div className="fash-bar-reating"></div>
                                        <span className="fash-h7 fw-2 c-dark">(0)</span>
                                    </div>
                                    <div className="d-flex align-items-center gap-2">
                                        <AiFillStar className='c-secondary' />
                                        <span className="fash-h7 fw-2 c-dark">3</span>
                                        <div className="fash-bar-reating"></div>
                                        <span className="fash-h7 fw-2 c-dark">(0)</span>
                                    </div>
                                    <div className="d-flex align-items-center gap-2">
                                        <AiFillStar className='c-secondary' />
                                        <span className="fash-h7 fw-2 c-dark">2</span>
                                        <div className="fash-bar-reating"></div>
                                        <span className="fash-h7 fw-2 c-dark">(0)</span>
                                    </div>
                                    <div className="d-flex align-items-center gap-2">
                                        <AiFillStar className='c-secondary' />
                                        <span className="fash-h7 fw-2 c-dark">1</span>
                                        <div className="fash-bar-reating"></div>
                                        <span className="fash-h7 fw-2 c-dark">(0)</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="fash-popular d-flex flex-column gap-2">
                        <span className="fash-h2 c-black">You can also like this</span>
                        <span className="fash-h6 c-dark">You’ve never seen it before!</span>
                        <div className="d-flex fash-control-product-card gap-3">
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home