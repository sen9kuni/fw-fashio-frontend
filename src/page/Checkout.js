import React from 'react'
import Navbar from '../components/Navbar'
import { Container, Row, Col, Button, Modal } from 'react-bootstrap'
import dummyImage from '../assets/images/Man Suit.png'
import { Link } from 'react-router-dom'

function CardListProductCheckout({src, nameProduct, color, brand, price}) {
  return (
    <div className='d-flex flex-row justify-content-between align-items-center rounded shadow-sm p-4'>
            <div className='d-flex flex-row align-items-center gap-3'>
              <img src={src} alt='aaa' />
              <div className='d-flex flex-column gap-1'>
                <span className='fash-h4'>{nameProduct} - {color}</span>
                <span className='c-dark'>{brand}</span>
              </div>
            </div>
              <span className='fash-h3 c-black'>$ {price}</span>
    </div>
  )
}

function ModalAddres(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton className='border-bottom-0'>
        {/* <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title> */}
      </Modal.Header>
      <Modal.Body className='d-flex flex-column gap-4 min-vh-100'>
        <span className='fash-h2 text-center'>Choose another address</span>
        <Button variant='outline-secondary' className='fash-border-dash-modal-checkout py-4 text-secondary'>Add new address</Button>
        
        <div className='d-flex flex-column p-4 gap-2 rounded shadow-sm'>
            <span className='fash-h4 c-black'>Andreas Jane</span>
            <p className='fash-h6 c-black'>Perumahan Sapphire Mediterania, Wiradadi, Kec. Sokaraja, Kabupaten Banyumas, Jawa Tengah, 53181 [Tokopedia Note: blok c 16] Sokaraja, Kab. Banyumas, 53181</p>
            <Link to={'#'} className='fash-h4 text-decoration-none text-danger'>Change address</Link>
        </div>
      </Modal.Body>
      {/* <Modal.Footer className='border-top-0'>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer> */}
    </Modal>
  )
}


function Checkout() {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <>
      <Navbar />
      <Container className='checkout-container py-4 d-flex flex-row'>
        <Row className=''>
          <Col md={8} className='d-flex flex-column gap-3'>
          <span className='c-black fash-h1'>Checkout</span>
          <span className='fash-h4'>Shipping Adress</span>
          <div className='d-flex flex-column p-4 gap-2 rounded shadow-sm'>
            <span className='fash-h4 c-black'>Andreas Jane</span>
            <p className='fash-h6 c-black'>Perumahan Sapphire Mediterania, Wiradadi, Kec. Sokaraja, Kabupaten Banyumas, Jawa Tengah, 53181 [Tokopedia Note: blok c 16] Sokaraja, Kab. Banyumas, 53181</p>
            <Button variant='outline-secondary' className='w-50 rounded-5' onClick={() => setModalShow(true)}>Choose another address</Button>
          </div>

          <CardListProductCheckout src={dummyImage} nameProduct='Mens formal suit' color='Black' brand='Zalora Cloth' price='20.0' />
          <CardListProductCheckout src={dummyImage} nameProduct='Mens formal suit' color='Black' brand='Zalora Cloth' price='20.0' />

          </Col>
          <Col md={4}>
            <div className='d-flex flex-column p-3 gap-3 rounded shadow-sm mt-md-5'>
              <span className='fash-h4'>Shopping summary</span>
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
                  <span className='fash-h4'>Shopping summary</span>
                  <span className='fash-h3 c-black'>$ 45.0</span>
                </div>
              </div>
                <Button variant='danger' className='fash-h6 rounded-5'>Select payment</Button>
            </div>
          </Col>
        </Row>
      </Container>
      <ModalAddres show={modalShow} onHide={() => setModalShow(false)} />
    </>
  )
}

export default Checkout