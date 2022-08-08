import React from 'react'
import { Container, Button } from 'react-bootstrap'
import { AiFillShopping } from "react-icons/ai";
import Lock from '../assets/images/lock.png'


function ChangePassword() {
    return (
        <Container className='d-flex flex-column align-items-center py-5 vh-100'>
            <div className='col-md-4 d-flex flex-column align-items-center pt-5 border rounded-4 shadow'>
            <div className='col-12 d-flex flex-column align-items-center text-center justify-content-center gap-5 pb-5'>
                <div className='d-flex align-items-center c-secondary'>
                    <AiFillShopping className='fash-h1'/>
                    <span className='fash-h2'>FASHIO</span>
                </div> 
                <div>
                    <span className='fash-h2'>Request to Reset Your Account Password</span>
                </div>
                <div>
                    <img src={Lock} alt=""></img>
                </div>
                <div className='col-7'>
                    <span className='fash-h7'>The following is the button for you to reset the password.</span>
                </div>
                <Button className='change-password-btn'>Change password</Button>
            </div>
            <div className='col-12 py-2 rounded-4 bc-secondary'> </div>
            </div>
        </Container>
    )
}

export default ChangePassword
