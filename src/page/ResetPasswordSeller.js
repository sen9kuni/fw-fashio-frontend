import { Formik } from 'formik';
import React from 'react'
import {  Container, Form, Button } from 'react-bootstrap'
import { AiFillShopping } from "react-icons/ai";
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { setEmailSeller } from '../redux/reducers/authSeller';

function ResetPassword() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const onSubmit = (value)=> {
    console.log(value);
    dispatch(setEmailSeller(value))
    navigate('/reset-confirmation-seller')
  }
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
      <Formik initialValues={{email: ''}}>
      {(props)=>
        <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control onChange={props.handleChange} name='email' type="email" placeholder="Email" />
        </Form.Group>
        <div className="d-grid mb-4 mt-4">
          <Button onClick={()=> onSubmit(props.values)} className="login-btn-primary">Confirm</Button>
        </div>
        </Form>
      }
      </Formik>
      <p>Don't have a Fashio account?<Link to={'/signup-seller'} className='text-decoration-none'><span className='c-secondary-soft'> Register</span></Link></p>
    </Container>      
    </section>
  );
}


export default ResetPassword
