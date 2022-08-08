import React, { useState } from 'react'
import { Container, Form, Button, ButtonGroup, ToggleButton } from 'react-bootstrap'
import { AiFillShopping } from "react-icons/ai";
import { Formik } from 'formik'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom';
import { registerSeller } from '../redux/asyncActions/authSeller';

function SignUpSeller() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const onRegister = (value) => {
    console.log(value);
    const data = {username: value.username, email: value.email, password: value.password, phone: value.phone, store_name: value.store_name}
    console.log(data);
    dispatch(registerSeller(data))
    navigate('/login-seller')
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
        
        <span className='fash-h3'>Please sign up with your account</span>
        
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
        <Formik initialValues={{username: '', email: '', phone: '',store_name: '',password:''}} >
          {(props)=> 
            <Form>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Control onChange={props.handleChange} type="text" name='username' placeholder="Name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control onChange={props.handleChange} type="email" name='email' placeholder="Email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="">
              <Form.Control onChange={props.handleChange} type="text" name='phone' placeholder="Phone number" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="">
              <Form.Control onChange={props.handleChange} type="text" name='store_name' placeholder="Store name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control onChange={props.handleChange} type="password" name='password' placeholder="Password" />
            </Form.Group>
            <div className="d-grid mb-4 mt-4">
              <Button onClick={()=> onRegister(props.values)} className="login-btn-primary">Confirm</Button>
            </div>
            </Form >
          }
          
        </Formik>
        <p>Already have a Tokopedia account?<Link to={'/login-seller'} className='text-decoration-none'><span className='c-secondary-soft'> Login</span></Link></p>
      </Container>      
      </section>
    )
}

export default SignUpSeller
