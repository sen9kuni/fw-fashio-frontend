import React, { useState } from 'react'
import { Container, Form, Button, ButtonGroup, ToggleButton } from 'react-bootstrap'
import { AiFillShopping } from "react-icons/ai";
import { Formik } from 'formik'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom';
import { loginSeller } from '../redux/asyncActions/authSeller';


function LoginSeller() {
  const dispatch = useDispatch()
  const token = useSelector((state) => state.authSeller.token)
  const navigate = useNavigate()
  const onLogin = (value) => {
    const data = {email: value.email, password: value.password}
    dispatch(loginSeller(data))
    // console.log(token);
    navigate('/')
  }

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
      <Formik initialValues={{email: '', password:''}}>
      {(props)=> 
        <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control onChange={props.handleChange} type="email" name='email' placeholder="Email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control onChange={props.handleChange} type="password" name='password' placeholder="Password" />
        </Form.Group>
        <div className='text-end .fash-h6'>
        <Link to={'/reset-password-seller'} className='text-decoration-none c-primary-soft'>Forgot password?</Link>
        </div>
        <div className="d-grid mb-4 mt-4">
          <Button onClick={()=> onLogin(props.values)} className="login-btn-primary">Confirm</Button>
        </div>
        </Form>
      }
      </Formik>
      <p>Don't have a Fashio account?<Link to={'/signup-seller'} className='text-decoration-none'><span className='c-secondary-soft'> Register</span></Link></p>
    </Container>      
    </section>
    )
}

export default LoginSeller
