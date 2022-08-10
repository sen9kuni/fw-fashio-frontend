import React, { useState } from 'react'
import { Container, Form, Button, ButtonGroup, ToggleButton, Alert } from 'react-bootstrap'
import { AiFillShopping } from "react-icons/ai";
import { useDispatch, useSelector } from 'react-redux'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { Link, useNavigate } from 'react-router-dom';
import { registerCustomer } from '../redux/asyncActions/authCustomer';

const registerSechema  = Yup.object().shape({
  username: Yup.string().min(4).required(),
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

      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Control type="username" name='username' placeholder="Name"  onChange={handleChange}isInvalid={!!errors.username} />
        <Form.Control.Feedback type='invalid'>{errors.username}</Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="email" name='email' placeholder="Email" onChange={handleChange} isInvalid={!!errors.email} />
        <Form.Control.Feedback type='invalid'>{errors.email}</Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control type="password" name='password' placeholder="Password" onChange={handleChange} isInvalid={!!errors.password} />
        <Form.Control.Feedback type='invalid'>{errors.password}</Form.Control.Feedback>
      </Form.Group>

        <div className="d-grid mb-4 mt-4">
        <Button type="submit" className="login-btn-primary">Confirm</Button>
      </div>
    </Form>
  )
}

function SignUpCutomer() {
  const dispatch = useDispatch()
  const token = useSelector((state) => state.authCustomer.token)
  const navigate = useNavigate()
  const onRegister = (value) => {
    const data = {username: value.username, email: value.email, password: value.password}
    dispatch(registerCustomer(data))
    navigate('/login-customer')
  }

    const [radioValue, setRadioValue] = useState('1');

    // const radios = [
    //   { name: 'Custommer', value: '1' },
    //   { name: 'Seller', value: '2' },
    // ];

    return (
        <section>
    <Container className='col-md-3 pt-5 d-flex flex-column justify-content-center login-wrapper'>
        <div className='d-flex flex-column gap-4 my-5'>
      <div className='d-flex align-items-center justify-content-center c-secondary'>
        <AiFillShopping className='fash-h1'/>
        <span className='fash-h2'>FASHIO</span>
      </div>
      
      <span className='fash-h3'>Please sign up with your account</span>
      
      </div>
      <div className='d-flex align-items-center justify-content-center'>
      <div style={{paddingBottom: '40px' }}>
        <button className="btn btn-lg" 
        style={{  background: '#DB3022',
                  boxShadow: '0px 1px 8px rgba(0, 0, 0, 0.05)',
                  borderRadius: '4px 0px 0px 4px', color: '#fff'
                  }} value=''>Customer</button>
        <Link to="/signup-seller" className="text-decoration-none">
        <button className="btn btn-lg" 
        style= {{ border: '1px solid #9B9B9B',
                  filter: 'drop-shadow(0px 1px 8px rgba(0, 0, 0, 0.05))',
                  borderRadius: '0px 4px 4px 0px', 
                  color:'#DB3022'}}>Seller</button>
        </Link> 
      </div>
      {/* <ButtonGroup className='mb-5 login-btn-switch'>
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
      </ButtonGroup> */}
      </div>
      {/* <Form>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Control type="username" placeholder="Name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="email" placeholder="Email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
      </Form>
      
      <div className="d-grid mb-4 mt-4">
        <Button className="login-btn-primary">Confirm</Button>
      </div> */}

      <Formik initialValues={{username:'', email: '', password: ''}} validationSchema={registerSechema} onSubmit={onRegister}>
            {(props)=><AuthForm {...props}/>}
      </Formik>
      <p>Already have a Tokopedia account?<Link to={'/login-customer'} className='text-decoration-none'><span className='c-secondary-soft'> Login</span></Link></p>
    </Container>      
    </section>
    )
}

export default SignUpCutomer
