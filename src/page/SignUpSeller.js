import React, { useState } from 'react'
import { Container, Form, Button, ButtonGroup, ToggleButton } from 'react-bootstrap'
import { AiFillShopping } from "react-icons/ai";

function SignUpSeller() {

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
      <Form>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Control type="username" placeholder="Name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="email" placeholder="Email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="">
        <Form.Control type="" placeholder="Phone number" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="">
        <Form.Control type="" placeholder="Store name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      </Form>
      
      <div className="d-grid mb-4 mt-4">
        <Button className="login-btn-primary">Confirm</Button>
      </div>
      <p>Already have a Tokopedia account?<span className='c-secondary-soft'> Login</span></p>
    </Container>      
    </section>
    )
}

export default SignUpSeller
