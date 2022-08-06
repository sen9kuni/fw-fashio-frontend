
import product from '../assets/images/product.png'
import { AiFillStar } from "react-icons/ai";

const Card = () => {
    return(
        <div className="fash-card">
            <img src={product} alt='product'/>
            <div className='fash-control-card d-flex flex-column justify-content-between'>
                <span className='fash-h6 fw-4'>Men's formal suit - Black & White</span>
                <span className='fash-h6 fw-4 c-primary-soft'>$ 40.0</span>
                <span className='fash-h8 fw-4 c-dark'>Zalora Cloth</span>
                <div>
                    <AiFillStar className='c-secondary' />
                    <AiFillStar className='c-secondary' />
                    <AiFillStar className='c-secondary' />
                    <AiFillStar className='c-dark' />
                    <AiFillStar className='c-dark' />
                    <span className='fash-h6'>(10)</span>
                </div>
            </div>
        </div>
    )
}

export default Card