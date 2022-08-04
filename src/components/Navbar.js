
import { AiFillShopping, AiOutlineSearch, AiOutlineFilter, AiOutlineShoppingCart, AiOutlineBell, AiOutlineMail } from "react-icons/ai";
import profile from '../assets/images/profile.jpg'

const Navbar = () => {
    return(
        <div className="fash-navbar d-flex flex-fill align-items-center justify-content-between bc-primary">
            <div className="c-secondary d-flex align-items-center">
                <AiFillShopping className="fash-h2" />
                <span className="fash-h2">Fashio</span>
            </div>
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
                <AiOutlineShoppingCart className="fash-h2 c-dark" />
                <AiOutlineBell className="fash-h2 c-dark" />
                <AiOutlineMail className="fash-h2 c-dark" />
                <div className="fash-nav-profile">
                    <img src={profile} alt='profile'/>
                </div>
            </div>
        </div>
    )
}

export default Navbar