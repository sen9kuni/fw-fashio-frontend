import React from 'react'
import Navbar from '../components/Navbar'
import { Container, Row, Col, Button, Modal, Form } from 'react-bootstrap'
import dummyImage from '../assets/images/Man Suit.png'
import { Link } from 'react-router-dom'

import gopay from '../assets/images/checkout/Logo-GoPay.png'
import pos from '../assets/images/checkout/logo pos indonesia.png'
import masterCard from '../assets/images/checkout/mastercard.png'
import { FiX } from 'react-icons/fi'

function CardListProductCheckout({src, nameProduct, color, brand, price}) {
  return (
    <div className='d-flex flex-row justify-content-between align-items-center rounded shadow-sm p-4'>
            <div className='d-flex flex-row align-items-center gap-3'>
              <img src={src} alt='aaa' />
              <div className='d-flex flex-column gap-1'>
                <span className='fash-h4 fw-5'>{nameProduct} - {color}</span>
                <span className='c-dark'>{brand}</span>
              </div>
            </div>
              <span className='fash-h3 c-black'>$ {price}</span>
    </div>
  )
}

function ModalAddAddress(props){
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      // show={show}
    >
      <Modal.Header className='border-bottom-0 p-4'>
        <Button variant='close' onClick={props.onHide} />
      </Modal.Header>
      <Modal.Body className='d-flex flex-column gap-4 px-5'>
        <span className='fash-h2 text-center'>Add new address</span>
        
        <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Save address as (ex : home address, office address)</Form.Label>
          <Form.Control type="text" placeholder="Rumah" />
        </Form.Group>

        <Row>
          <Col md={6}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Recipient's name</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Recipient's telephone number</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Address</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Postal code</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>City or Subdistrict</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
          </Col>
        </Row>
        <div className='d-flex flex-row gap-2 align-items-center mb-4'>
          <div>
            <Form.Check type='checkbox'/>
          </div>
          <div>
            <span>Make it the primary address</span>
          </div>
        </div>

        <div className='d-flex flex-row justify-content-end gap-4'>
          <Button variant='outline-secondary' className='modal-button-add-address rounded-5' onClick={props.onHide}>Cancel</Button>
          <Button variant='danger' className='modal-button-add-address rounded-5' onClick={props.onHide}>Save</Button>
        </div>
        </Form>

      </Modal.Body>
    </Modal>
  )
}

function ModalAddres(props) {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header className='border-bottom-0 p-4'>
        <Button variant='close' onClick={props.onHide} />
      </Modal.Header>
      <Modal.Body className='d-flex flex-column modal-checkout-height gap-4 px-5'>
        <span className='fash-h2 text-center'>Choose another address</span>
        <Button variant='outline-secondary' className='fash-border-dash-modal-checkout py-4 text-secondary' onClick={() => setModalShow(true)}>Add new address</Button>
        
        <div className='d-flex flex-column p-4 gap-2 rounded shadow-sm'>
            <span className='fash-h4 fw-5 c-black'>Andreas Jane</span>
            <p className='fash-h6 c-black'>Perumahan Sapphire Mediterania, Wiradadi, Kec. Sokaraja, Kabupaten Banyumas, Jawa Tengah, 53181 [Tokopedia Note: blok c 16] Sokaraja, Kab. Banyumas, 53181</p>
            <Link to={'#'} className='fash-h4 fw-5 text-decoration-none text-danger'>Change address</Link>
        </div>
      </Modal.Body>
      <ModalAddAddress show={modalShow} onHide={() => setModalShow(false)} />
    </Modal>
  )
}

function ModalPayment(props) {
  return (
    <Modal
      {...props}
      // size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header className='border-bottom-0 p-4 shadow-sm'>
        <div className='d-flex flex-row gap-2 align-items-center'>
          <Button className='bc-unset' variant='none' onClick={props.onHide} ><FiX size={26} /></Button>
          <span className='fash-h2'>Payment</span>
        </div>
      </Modal.Header>
      <Modal.Body className='p-0'>
        <div className='d-flex flex-column gap-4 p-4 border-bottom border-4'>
          <span className='fash-h4 fw-4'>Payment method</span>

          <div className='d-flex flex-row fash-card-Payment-chekout justify-content-between align-items-center'>
            <div className='d-flex flex-row gap-3'>
              <div className='d-flex align-items-center fash-warp-logo-payment-chekout'>
                <img className='img-fluid' src={gopay} alt='gopay' />
              </div>
            <div className='d-flex align-items-center'>
              <span>Gopay</span>
            </div>
            </div>
            <Form.Check type='checkbox' name='payment'/>
          </div>
          <div className='d-flex flex-row fash-card-Payment-chekout justify-content-between align-items-center'>
            <div className='d-flex flex-row gap-3'>
              <div className='d-flex align-items-center fash-warp-logo-payment-chekout'>
                <img className='img-fluid' src={pos} alt='gopay' />
              </div>
            <div className='d-flex align-items-center'>
              <span>Pos Indonesia</span>
            </div>
            </div>
            <Form.Check type='checkbox' name='payment'/>
          </div>
          <div className='d-flex flex-row fash-card-Payment-chekout justify-content-between align-items-center'>
            <div className='d-flex flex-row gap-3'>
              <div className='d-flex align-items-center fash-warp-logo-payment-chekout'>
                <img className='img-fluid' src={masterCard} alt='gopay' />
              </div>
            <div className='d-flex align-items-center'>
              <span>Mastercard</span>
            </div>
            </div>
            <Form.Check type='checkbox' name='payment'/>
          </div>

        </div>

        <div className='d-flex flex-column gap-4 p-4'>
          <span  className='fash-h4 fw-4'>Shopping summary</span>
          <div className='d-flex flex-row justify-content-between'>
            <span>Order</span>
            <span className='fash-h4 fw-4'>$ 40.0</span>
          </div>

          <div className='d-flex flex-row justify-content-between'>
            <span>Delivery</span>
            <span className='fash-h4 fw-4'>$ 5.0</span>
          </div>
        </div>

        <div className='d-flex flex-row justify-content-between p-4'>
          <div className='d-flex flex-column'>
            <span className='fash-h4 fw-4'>Shopping summary</span>
            <span className='fash-h4 fw-4'>$ 45.0</span>
          </div>
          <Button variant='danger' className='modal-button-add-address rounded-5' onClick={props.onHide}>Buy</Button>
        </div>
      </Modal.Body>
      {/* <Modal.Footer>
        aa
      </Modal.Footer> */}
    </Modal>
  )
}


function Checkout() {
  const [modalAddressShow, setModalAddressShow] = React.useState(false);
  const [modalPaymentShow, setModalPaymentShow] = React.useState(false);
  return (
    <>
      <Navbar />
      <Container className='checkout-container py-4 d-flex flex-row'>
        <Row className=''>
          <Col md={8} className='d-flex flex-column gap-3'>
          <span className='c-black fash-h1'>Checkout</span>
          <span className='fash-h4 fw-5'>Shipping Adress</span>
          <div className='d-flex flex-column p-4 gap-2 rounded shadow-sm'>
            <span className='fash-h4 fw-5 c-black'>Andreas Jane</span>
            <p className='fash-h6 c-black'>Perumahan Sapphire Mediterania, Wiradadi, Kec. Sokaraja, Kabupaten Banyumas, Jawa Tengah, 53181 [Tokopedia Note: blok c 16] Sokaraja, Kab. Banyumas, 53181</p>
            <Button variant='outline-secondary' className='w-50 rounded-5' onClick={() => setModalAddressShow(true)}>Choose another address</Button>
          </div>

          <CardListProductCheckout src={dummyImage} nameProduct='Mens formal suit' color='Black' brand='Zalora Cloth' price='20.0' />
          <CardListProductCheckout src={dummyImage} nameProduct='Mens formal suit' color='Black' brand='Zalora Cloth' price='20.0' />

          </Col>
          <Col md={4}>
            <div className='d-flex flex-column p-3 gap-3 rounded shadow-sm mt-md-5'>
              <span className='fash-h4 fw-5'>Shopping summary</span>
              <div className='d-flex flex-column gap-2'>
                <div className='d-flex flex-row justify-content-between'>
                  <span className='fash-h5 c-dark'>Order</span>
                  <span className='fash-h3 c-black'>$ 40.0</span>
                </div>
                <div className='d-flex flex-row justify-content-between'>
                  <span className='fash-h5 c-dark'>Delivery</span>
                  <span className='fash-h3 c-black'>$ 5.0</span>
                </div>
                <hr />
                <div className='d-flex flex-row justify-content-between'>
                  <span className='fash-h4 fw-5'>Shopping summary</span>
                  <span className='fash-h3 c-black'>$ 45.0</span>
                </div>
              </div>
                <Button variant='danger' className='fash-h6 rounded-5' onClick={() => setModalPaymentShow(true)}>Select payment</Button>
            </div>
          </Col>
        </Row>
      </Container>
      <ModalAddres show={modalAddressShow} onHide={() => setModalAddressShow(false)} />
      <ModalPayment show={modalPaymentShow} onHide={() => setModalPaymentShow(false)} />
    </>
  )
}

export default Checkout