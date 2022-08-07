import React, { useState } from 'react'
import { Container, Form, Button, ButtonGroup, ToggleButton, Alert } from 'react-bootstrap'
import { AiFillShopping } from "react-icons/ai";
import { Formik } from 'formik'
import * as Yup from 'yup'
import { loginCustomer } from '../redux/asyncActions/authCustomer'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

const loginSechema  = Yup.object().shape({
  email: Yup.string().email('Invalid email address format').required(),
  password: Yup.string().min(8).required()
})

const AuthForm = ({errors, handleSubmit, handleChange}) => {
  const successMsg = useSelector((state) => state.authCustomer.successMsg)
  const errorMsg = useSelector((state) => state.authCustomer.errorMsg)
  return (
    <Form noValidate onSubmit={handleSubmit} >
      {successMsg && <Alert variant="success">{successMsg}</Alert>}
      {errorMsg && <Alert variant="danger">{errorMsg}</Alert>}

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control name='email' onChange={handleChange} type="email" placeholder="Email" isInvalid={!!errors.email} />
        <Form.Control.Feedback type='invalid'>{errors.email}</Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control name='password' onChange={handleChange} type="password" placeholder="Password" isInvalid={!!errors.password} />
        <Form.Control.Feedback type='invalid'>{errors.password}</Form.Control.Feedback>
      </Form.Group>

      <div className='text-end .fash-h6'>
        <Link to={'/reset-password-customer'} className='c-primary-soft'>Forgot password?</Link>
      </div>

      <div className="d-grid mb-4 mt-4">
        <Button type="submit" className="login-btn-primary">Confirm</Button>
      </div>
    </Form>
  )
}


function LoginCustomer() {
  const dispatch = useDispatch()
  const token = useSelector((state) => state.authCustomer.token)
  const navigate = useNavigate()
  const onLogin = (value) => {
    const data = {email: value.email, password: value.password}
    dispatch(loginCustomer(data))
  }

  React.useEffect(()=>{
    if (token) {
      navigate('/')
    }
  }, [navigate, token])

    const [radioValue, setRadioValue] = useState('1');

  const radios = [
    { name: 'Custommer', value: '1' },
    { name: 'Seller', value: '2' },
  ];

    return (
        <section>
    <Container className='col-md-3 pt-5 d-flex flex-column justify-content-center login-wrapper'>
        <div className='d-flex flex-column gap-4 my-5'>
      <div className='d-flex align-items-center justify-content-center c-secondary'>
        <AiFillShopping className='fash-h1'/>
        <span className='fash-h2'>FASHIO</span>
      </div>
      
      <span className='fash-h3'>Please login with your account</span>
      
      </div>
      <div className='d-flex align-items-center justify-content-center'>
      <ButtonGroup className='mb-5 login-btn-switch'>
        {radios.map((radio, idx) => (
          <ToggleButton
            key={idx}
            id={`radio-${idx}`}
            type="radio"
            variant={idx % 2 ? 'outline-danger' : 'outline-danger'}
            name="radio"
            value={radio.value}
            checked={radioValue === radio.value}
            onChange={(e) => setRadioValue(e.currentTarget.value)}
          >
            {radio.name}
          </ToggleButton>
        ))}
      </ButtonGroup>
      </div>
      {/* <Form>
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
      </div> */}
      <Formik initialValues={{email: '', password: ''}} validationSchema={loginSechema} onSubmit={onLogin}>
            {(props)=><AuthForm {...props}/>}
      </Formik>
      <p>Don't have a Fashio account?<span className='c-secondary-soft'> Register</span></p>
    </Container>      
    </section>
    )
}

export default LoginCustomer
