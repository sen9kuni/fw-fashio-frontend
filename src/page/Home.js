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


import React from "react"


const Home = () => {
    return(
        <>
            <div className="d-flex flex-column align-items-center bc-white ">
                <Navbar />
                <div className="fash-home-body d-flex flex-column">
                    <div className="fash-slide">
                        <div id="fash-control-slide" className="d-flex fash-control-image-slide gap-3">
                            <img src={slide_5} alt='slide-5'/>
                            <img src={slide_1} alt='slide-1'/>
                            <img src={slide_2} alt='slide-2'/>
                            <img src={slide_3} alt='slide-3'/>
                            <img src={slide_4} alt='slide-4'/>
                            <img src={slide_5} alt='slide-5'/>
                        </div>
                    </div>

                    <div className="fash-category d-flex flex-column gap-2">
                        <span className="fash-h2 c-black">Category</span>
                        <span className="fash-h6 c-dark">What are you currently looking for</span>
                        <div className="d-flex fash-control-category-slide gap-3">
                            <img src={accessories} alt='accessories'/>
                            <img src={bagpack} alt='bagpack'/>
                            <img src={cap} alt='cap'/>
                            <img src={dress} alt='dress'/>
                            <img src={glasses} alt='glasses'/>
                            <img src={handbag} alt='handbag'/>
                            <img src={heels} alt='heels'/>
                            <img src={socks} alt='socks'/>
                            <img src={suit} alt='suit'/>
                            <img src={tie} alt='tie'/>
                            <img src={watch} alt='watch'/>
                        </div>
                    </div>

                    <div className="fash-new-product d-flex flex-column gap-2">
                        <span className="fash-h2 c-black">New</span>
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

                    <div className="fash-popular d-flex flex-column gap-2">
                        <span className="fash-h2 c-black">Popular</span>
                        <span className="fash-h6 c-dark">Find clothes that are trending recently</span>
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