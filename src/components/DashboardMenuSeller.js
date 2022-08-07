
import React from 'react';
import profile from '../assets/images/profile.jpg'
import { AiOutlineEdit, AiOutlineShop, AiOutlineInbox, AiOutlineShoppingCart, AiOutlineDown, AiOutlineUp } from "react-icons/ai";

const DashboardMenu = () => {
    const [drop, setDrop] = React.useState({store: false, product: false, order: false})
    return(
        <div className="fash-dashboard-menu bc-white d-flex flex-column align-items-end">
            <div className='d-flex flex-column gap-5'>
                <div className='fash-menu-profile d-flex gap-3'>
                    <div className="fash-profile-image">
                        <img src={profile} alt='profile'/>
                    </div>
                    <div className='d-flex flex-column justify-content-center'>
                        <span className='fash-h5 fw-4'>Johanes Mikael</span>
                        <div className=' d-flex gap-1'>
                            <AiOutlineEdit className='c-dark' />
                            <span className='fash-h8 c-dark'>Ubah profile</span>
                        </div>
                    </div>
                </div>

                <div className='d-flex flex-column gap-3'>
                    <div>
                        <div className='d-flex align-items-center justify-content-between' onClick={() => setDrop({store: !drop.store, product: drop.product, order: drop.order})}>
                            <div className='d-flex align-items-center gap-2'>
                                <div className="fash-menu-icon bg-primary d-flex align-items-center justify-content-center">
                                    <AiOutlineShop className='c-white fash-h5' />
                                </div>
                                <span className='fash-h6 fw-4 c-dark'>Store</span>
                            </div>
                            {drop.store?<AiOutlineUp className='c-dark' />:<AiOutlineDown className='c-dark' />}
                        </div>
                        <div className='flex-column ps-5 gap-1' style={{display: drop.store? 'flex':'none'}}>
                            <span className='fash-h6 fw-4 c-dark'>Store profile</span>
                        </div>
                    </div>

                    <div>
                        <div className='d-flex align-items-center justify-content-between' onClick={() => setDrop({store: drop.store, product: !drop.product, order: drop.order})}>
                            <div className='d-flex align-items-center gap-2'>
                                <div className="fash-menu-icon bg-danger d-flex align-items-center justify-content-center">
                                    <AiOutlineInbox className='c-white fash-h5' />
                                </div>
                                <span className='fash-h6 fw-4 c-dark'>Product</span>
                            </div>
                            {drop.product?<AiOutlineUp className='c-dark' />:<AiOutlineDown className='c-dark' />}
                        </div>
                        <div className='flex-column ps-5 gap-1' style={{display: drop.product? 'flex':'none'}}>
                            <span className='fash-h6 fw-4 c-dark'>My products</span>
                            <span className='fash-h6 fw-4 c-dark'>Selling products</span>
                        </div>
                    </div>

                    <div>
                        <div className='d-flex align-items-center justify-content-between' onClick={() => setDrop({store: drop.store, product: drop.product, order: !drop.order})}>
                            <div className='d-flex align-items-center gap-2'>
                                <div className="fash-menu-icon bg-warning d-flex align-items-center justify-content-center">
                                    <AiOutlineShoppingCart className='c-white fash-h5' />
                                </div>
                                <span className='fash-h6 fw-4 c-dark'>Order</span>
                            </div>
                            {drop.order?<AiOutlineUp className='c-dark' />:<AiOutlineDown className='c-dark' />}
                        </div>
                        <div className='flex-column ps-5 gap-1' style={{display: drop.order? 'flex':'none'}}>
                            <span className='fash-h6 fw-4 c-dark'>My order</span>
                            <span className='fash-h6 fw-4 c-dark'>Order cancel</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashboardMenu