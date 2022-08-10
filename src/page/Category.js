import { React, useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Card from '../components/Card'
import { AiFillShopping, AiOutlineSearch, AiOutlineFilter, AiOutlineShoppingCart, AiOutlineBell, AiOutlineMail } from "react-icons/ai";
import '../assets/css/index.css';
import profile from '../assets/images/profile.jpg'
import { Form, InputGroup } from 'react-bootstrap';
import Navbar from '../components/Navbar';
import NavbarNotif from '../components/Notification';

const Category = () => {
    const [pages, setPages] = useState([]);
    useEffect(() => {
        getPages();
    }, []);

    const getPages = () => {
        const responsePages = {
            "results": [
                {
                    "id": 1
                },
                {
                    "id": 2
                },
                {
                    "id": 3
                },
                {
                    "id": 4
                },
                {
                    "id": 5
                },
                {
                    "id": 6
                },
                {
                    "id": 7
                },
                {
                    "id": 8
                },
                {
                    "id": 9
                },
                {
                    "id": 10
                }
            ]
        }
        setPages(responsePages.results);
    }
    return (
        <>
            
            <Navbar />
            <Container className='px-5'>
                <Row>
                    <Col className='my-5'>
                        <Link className='text-decoration-none' to={'/'}>Home</Link><span> - </span><Link className='text-decoration-none' to={'/'}>category</Link><span> - </span><Link className='text-decoration-none' to={'/'}>T-Shirt</Link>
                    </Col>
                </Row>
                <Row className='mb-3'>
                    <h1>T-Shirt</h1>
                </Row>
                <Row>
                    {pages && pages.map((page, i) => (
                        <Col className='mb-4'><Card /></Col>
                    ))}
                </Row>
            </Container>
        </>
    )
}

export default Category
