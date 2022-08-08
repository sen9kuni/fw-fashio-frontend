import { Formik } from 'formik';
import React from 'react'
import { Container, Form, Button } from 'react-bootstrap'
import { AiFillShopping } from "react-icons/ai";
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

function PasswordConfirmation() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const email = useSelector((state)=> state.authCustomer.email)

  const onChangePassword = (value)=> {
    if (value.password === value.reapeatPassword) {
      // console.log('benar');
      navigate('/reset-password-relogin-customer')
    } else {
      window.alert('new password and repeat new password not match')
    }
  }
    return (
        <section>
    <Container className='col-md-3 pt-5 d-flex flex-column justify-content-center login-wrapper'>
        <div className='d-flex flex-column gap-4 my-5'>
      <div className='d-flex align-items-center justify-content-center c-secondary'>
        <AiFillShopping className='fash-h1'/>
        <span className='fash-h2'>FASHIO</span>
      </div>
      
      <span className='fash-h3'>Reset password</span>
      <div className='fash-h6'>
      <span className='c-primary-soft'>You need to change your password to activate your account</span>
      </div>

      </div>
      <Formik initialValues={{password: '', reapeatPassword: ''}}>
      {(props)=> 
        <Form>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control onChange={props.handleChange} type="password" name='password' placeholder="New Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control onChange={props.handleChange} type="password" name='reapeatPassword' placeholder="Repeat New Password" />
        </Form.Group>
        <div className="d-grid mb-4 mt-4">
          <Button onClick={()=> onChangePassword(props.values)} className="login-btn-primary">Confirm</Button>
        </div>
        </Form>
      }
      </Formik>
      <p>Don't have a Fashio account?<Link to={'/signup-customer'} className='text-decoration-none'><span className='c-secondary-soft'> Register</span></Link></p>
    </Container>      
    </section>
    )
}

export default PasswordConfirmation
