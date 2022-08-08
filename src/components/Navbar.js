
import { AiFillShopping, AiOutlineSearch, AiOutlineFilter, AiOutlineShoppingCart, AiOutlineBell, AiOutlineMail } from "react-icons/ai";
import profile from '../assets/images/profile.jpg'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const token = true
    return(
        <div className="fash-navbar bc-primary w-fill d-flex justify-content-center">
            <div className="fash-control-navbar d-flex align-items-center justify-content-between h-fill">
                <Link className='text-decoration-none' to='/'>
                    <div className="c-secondary d-flex align-items-center">
                        <AiFillShopping className="fash-h2" />
                        <span className="fash-h2">Fashio</span>
                    </div>
                </Link>
                <div className="d-flex gap-2">
                    <div className="fash-search bc-primary d-flex justify-content-between align-items-center">
                        <input type="text" name="search" className="w-fill" placeholder="Search" />
                        <AiOutlineSearch className="fash-h2 c-dark" />
                    </div>
                    <div className="fash-nav-filter d-flex align-items-center justify-content-center">
                        <AiOutlineFilter className="fash-h2 c-dark" />
                    </div>
                </div>
                <div className="d-flex gap-4 align-items-center">
                    {token? 
                        <div className="d-flex gap-4 align-items-center">
                            <Link className='text-decoration-none' to='/bag'>
                                <AiOutlineShoppingCart className="fash-h2 c-dark" />
                            </Link>
                            <AiOutlineBell className="fash-h2 c-dark" />
                            <Link className='text-decoration-none' to='/chat'>
                                <AiOutlineMail className="fash-h2 c-dark" />
                            </Link>
                            <Link className='text-decoration-none' to='/profile/seller/profile'>
                                <div className="fash-nav-profile">
                                    <img src={profile} alt='profile'/>
                                </div>
                            </Link>
                        </div>
                        :
                        <div className="d-flex gap-4">
                            <Link className='text-decoration-none' to='/login-customer'>
                                <button className="fash-button bc-primary c-secondary" type='button'>Login</button>
                            </Link>
                            <Link className='text-decoration-none' to='/signup-customer'>
                                <button className="fash-button bc-primary c-secondary" type='button'>Singup</button>
                            </Link>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default Navbar