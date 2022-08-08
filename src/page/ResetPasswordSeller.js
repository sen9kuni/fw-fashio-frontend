import React from 'react'
import {  Container, Form, Button } from 'react-bootstrap'
import { AiFillShopping } from "react-icons/ai";

function ResetPassword() {

  return (
    <section>
    <Container className='col-md-3 pt-5 d-flex flex-column justify-content-center login-wrapper'>
        <div className='d-flex flex-column gap-4 my-5'>
      <div className='d-flex align-items-center justify-content-center c-secondary'>
        <AiFillShopping className='fash-h2'/>
        <span className='fash-h2'>FASHIO</span>
      </div>
      
      <span className='fash-h3'>Reset password</span>

      </div>
      <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="email" placeholder="Email" />
      </Form.Group>
      </Form>
      <div className="d-grid mb-4 mt-4">
        <Button className="login-btn-primary">Confirm</Button>
      </div>
      <p>Don't have a Fashio account?<span className='c-secondary-soft'> Register</span></p>
    </Container>      
    </section>
  );
}


export default ResetPassword
