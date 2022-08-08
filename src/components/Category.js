import { React, useState, useEffect } from 'react'
import { Carousel, Container, Row, Col } from 'react-bootstrap'
import Jacket from '../assets/images/category-carousel/Jacket.png'
import Shorts from '../assets/images/category-carousel/Shorts.png'
import Pants from '../assets/images/category-carousel/Pants.png'
import Shoes from '../assets/images/category-carousel/Shoes.png'
import Tshirt from '../assets/images/category-carousel/Tshirt.png'

const Category = () => {
    const [photos, setPhotos] = useState([]);
    const [pages, setPages] = useState([]);

    useEffect(() => {
        getPhotos();
        getPages();
    }, []);

    const getPhotos = () => {
        const response = {
            "results": [
                { "id": 1, "img": Jacket }, { "id": 2, "img": Shorts }, { "id": 3, "img": Pants }, { "id": 4, "img": Shoes }, { "id": 5, "img": Tshirt }
            ]
        }
        setPhotos(response.results);
    }
    const getPages = () => {
        const responsePages = {
            "results": [
                { "id": 1 }, { "id": 2 }, { "id": 3 }
            ]
        }
        setPages(responsePages.results);
    }
    return (
        <>
            <Container className='px-5 mt-2'>
                <Row className='px-md-5'>
                    <h1 className='fw-bold fash-h2 c-black'>Category</h1>
                    <span className='fash-h6 c-dark'>What are you currently looking for</span>
                </Row>
                <Carousel variant="dark" className='px-md-5 mt-4'>
                    {pages && pages.map((page, i) => (
                        <Carousel.Item key={page.i}>
                            <Row className='d-flex justify-content-center'>
                                {photos && photos.map((photo, i) => (
                                    <Col className='mt-1' key={Math.random(i)}>
                                        <img
                                            className="d-block w-45"
                                            src={photo.img}
                                            alt="First slide"
                                        />
                                    </Col>
                                ))}
                            </Row>
                        </Carousel.Item>
                    ))}
                </Carousel>
            </Container>
        </>
    )
}
export default Category;
