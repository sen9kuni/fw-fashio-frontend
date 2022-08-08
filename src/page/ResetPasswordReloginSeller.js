import React from 'react'
import { Container, Form, Button } from 'react-bootstrap'
import { AiFillShopping } from "react-icons/ai";

function ResetPasswordRelogin() {
    return (
        <section>
    <Container className='col-md-3 pt-5 d-flex flex-column justify-content-center login-wrapper'>
        <div className='d-flex flex-column gap-4 my-5'>
      <div className='d-flex align-items-center justify-content-center c-secondary'>
        <AiFillShopping className='fash-h1'/>
        <span className='fash-h2'>FASHIO</span>
      </div>
      
      <span className='fash-h3'>Please login with your new password</span>
      <div className='fash-h6'>
      <span className='c-primary-soft'>We have sent an email containing a password reset instruction to your email. please check your email.</span>
      </div>

      </div>
      <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="email" placeholder="Email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      </Form>
      <div className='text-end .fash-h6'>
      <span className='c-primary-soft'>Forgot password?</span>
      </div>
      <div className="d-grid mb-4 mt-4">
        <Button className="login-btn-primary">Confirm</Button>
      </div>
    </Container>      
    </section>
    )
}

export default ResetPasswordRelogin
