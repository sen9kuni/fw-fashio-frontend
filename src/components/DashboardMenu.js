
import profile from '../assets/images/profile.jpg'
import { Link } from 'react-router-dom'
import { AiOutlineEdit, AiOutlineUser, AiOutlineEnvironment, AiOutlineSnippets } from "react-icons/ai";

const DashboardMenu = () => {
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
                            <Link className='fash-h8 c-dark' style={{textDecoration: 'none'}} to="/profile">Ubah profile</Link>
                            
                        </div>
                    </div>
                </div>

                <div className='d-flex flex-column gap-3'>
                    <div className='d-flex align-items-center gap-2'>
                        <div className="fash-menu-icon bg-primary d-flex align-items-center justify-content-center">
                            <AiOutlineUser className='c-white fash-h5' />
                        </div>
                        <Link className='fash-h6 fw-4 c-primary' style={{textDecoration: 'none'}} to="/profile">My account</Link>
                        {/* <span className='fash-h6 fw-4 c-primary'>My account</span> */}
                    </div>

                    <div className='d-flex align-items-center gap-2'>
                        <div className="fash-menu-icon bg-danger d-flex align-items-center justify-content-center">
                            <AiOutlineEnvironment className='c-white fash-h5' />
                        </div>
                        <Link className='fash-h6 fw-4 c-primary' style={{textDecoration: 'none'}} to="/profile/custommer/address">Shipping Adrress</Link>
                    </div>

                    <div className='d-flex align-items-center gap-2'>
                        <div className="fash-menu-icon bg-warning d-flex align-items-center justify-content-center">
                            <AiOutlineSnippets className='c-white fash-h5' />
                        </div>
                        <Link className='fash-h6 fw-4 c-primary' style={{textDecoration: 'none'}} to="/profile/custommer/order">My order</Link>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashboardMenu