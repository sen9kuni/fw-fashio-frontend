import React from 'react'
import { Container, Row, Col, Card, Button, Navbar, Form } from 'react-bootstrap';
import '../assets/css/index.css';
import Nav from '../components/Navbar';
import Gez from '../assets/images/gez-xavier.png'
import Kemal from '../assets/images/kemal-alkan.png'

const Bag = () => {
    return (
        <>
            <Nav />
            <Container>
                <Row>
                    <Col className='ms-1 mt-5 fw-bold'>
                        <h1 className='Helper-text fw-bold'>My Bag</h1>
                    </Col>
                </Row>
                <Row className='d-flex justify-content-between'>
                    <Col md={8}>
                        <Card className='mt-3 shadow-sm mb-2 bg-body rounded border bc-primary'>
                            <Navbar>
                                <Container>
                                    <Navbar.Brand href="#home" className='px-3'>
                                        <Form.Check
                                            type="checkbox"
                                            id="custom-checkbox"
                                            label="Select all items (2 items selected)"
                                        />
                                    </Navbar.Brand>
                                    <Navbar.Toggle />
                                    <Navbar.Collapse className="justify-content-end">
                                        <Navbar.Text>
                                            <Button className='btn btn-light'><span className='text-danger fw-bold'>Delete</span></Button>
                                        </Navbar.Text>
                                    </Navbar.Collapse>
                                </Container>
                            </Navbar>
                        </Card>
                        <Card className='mt-3 shadow-sm p-3 mb-2 bg-body rounded border'>
                            <Navbar>
                                <Container className='p-4'>
                                    <Navbar.Brand href="#home" className='d-flex gap-3 align-items-center'>
                                        <Form.Check
                                            type="checkbox"
                                        />
                                        <img src={Gez} alt='gez' />
                                        <Col>
                                            <h5>Men's formal suit - Black</h5>
                                            <span>Zalora Cloth</span>
                                        </Col>
                                    </Navbar.Brand>
                                    <Navbar.Toggle />
                                    <Navbar.Collapse className="justify-content-end">
                                        <Col className='d-flex gap-3 ms-5 align-items-center justify-content-center'>
                                            <Button className='btn btn-secondary rounded-5 px-3'>
                                                -
                                            </Button>
                                            <h5>0</h5>
                                            <Button className='btn btn-light rounded-5'>
                                                +
                                            </Button>
                                        </Col>
                                        <Navbar.Text>
                                            <h4>$ 20.0</h4>
                                        </Navbar.Text>
                                    </Navbar.Collapse>
                                </Container>
                            </Navbar>
                        </Card>
                        <Card className='mt-3 shadow-sm p-3 mb-5 bg-body rounded border'>
                            <Navbar>
                                <Container className='p-4'>
                                    <Navbar.Brand href="#home" className='d-flex gap-3 align-items-center'>
                                        <Form.Check
                                            type="checkbox"
                                        />
                                        <img src={Kemal} alt='kemal' />
                                        <Col>
                                            <h5>Men's Jacket jeans</h5>
                                            <span>Zalora Cloth</span>
                                        </Col>
                                    </Navbar.Brand>
                                    <Navbar.Toggle />
                                    <Navbar.Collapse className="justify-content-end">
                                        <Col className='d-flex gap-3 ms-5 align-items-center justify-content-center ps-5'>
                                            <Button className='btn btn-secondary rounded-5 px-3'>
                                                -
                                            </Button>
                                            <h5>0</h5>
                                            <Button className='btn btn-light rounded-5'>
                                                +
                                            </Button>
                                        </Col>
                                        <Navbar.Text>
                                            <h4>$ 20.0</h4>
                                        </Navbar.Text>
                                    </Navbar.Collapse>
                                </Container>
                            </Navbar>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '24rem' }} className='mt-3 shadow-sm p-3 mb-2 bg-body rounded border'>
                            <Card.Body>
                                <Card.Title>Shopping summary</Card.Title>
                                <Row className='d-flex'>
                                    <Card.Subtitle className="mt-4 mb-5 text-muted d-flex justify-content-between align-items-center">Total price
                                        <h5>$ 40.0</h5>
                                    </Card.Subtitle>
                                </Row>
                                <div className="d-grid gap-2">
                                    <Button variant="danger" size="lg" className='rounded-5'>
                                        Buy
                                    </Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Bag;
