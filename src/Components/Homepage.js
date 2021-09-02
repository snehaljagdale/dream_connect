import React from 'react';
import { Link } from "react-router-dom";


import { Button, Carousel, CardDeck, Card, Jumbotron, Container, Form, Col, Row } from 'react-bootstrap'

import { ChatLeftTextFill, Laptop, Vinyl, Instagram, Facebook, Twitter, Youtube } from 'react-bootstrap-icons';

import StoreBadge from 'react-store-badge';


import img1 from '../assets/img1.png'
import img2 from '../assets/img2.jpg'
import img3 from '../assets/img3.png'
import Aakash from '../assets/Aakash.jpg'
import Shrey from '../assets/Shrey.jpg'
import Praneeth from '../assets/Praneeth.jpg'
import appIntroImage from '../assets/appIntroImage.jpg'
import readyToStart from '../assets/readyToStart.png'
function Homepage() {
    const sliderContent = [
        {
            img: img1,
            H1: "Learn from anywhere.",
            H2: "Stay Connected.",
            H3: "Made in India !"
        },
        {
            img: img2,
            H1: "Secure and Reliable",
            H2: "Video Conferencing."
        },
        {
            img: img3,
            H1: "Learn from anywhere.",
            H2: "Stay Connected.",
            H3: "Made in India !"
        }
    ]

    const reviewInfo = [
        {
            image: Aakash,
            title: "Ashish Mishra",
            text: "In Dream Connect I have learnt very new, intresting and useful things while working with Dream Dooniya in very short span of time. I strongly suggest their products as they are amazing and helpful."
        },
        {
            image: Shrey,
            title: "Reena Kamthe",
            text: "Dream Connect appreciated my creativity and made one of my design as a logo for the company. I am grateful that I got to work with Dream Dooniya and this has boosted my confidence to do much more."
        },
        {
            image: Praneeth,
            title: "Pranit Shankar",
            text: "Dream Connect & team has changed my thoughts about working in corporate culture. It's a life time experience to work with them. I strongly recommend to experience these products as they are simple, amazing and cause serving."
        }
    ]

    const whyChooseUsInfo = [
        {
            image: <ChatLeftTextFill size="45" style={{ color: "#8056FF" }} />,
            title: "Chat Features ",
            text: "This includes capabilities that allow your video conference users to share messages, including text and emojis, during a meeting or online event."
        },
        {
            image: <Laptop size="45" style={{ color: "#5AD6A6" }} />,
            title: "Screen Sharing",
            text: "For interactive meetings and webinars, screen sharing is vital. You will be able to share your entire screen as well as individualapps on your desktop during a meeting."
        },
        {
            image: <Vinyl size="45" style={{ color: "#FEB301" }} />,
            title: "Unlimited Recording",
            text: "You will be able to record a meeting or webinar and share it with one click with multiple participants."
        }
    ]

    const iOSUrl = '';
    return (
        <div>

            {/* IMAGE SLIDER */}
            <Carousel  style={{zIndex:"1",position:"relative" }}>{
                sliderContent.map((item, index) =>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            style={{ height: 640 + 'px' }}
                            src={item.img}
                            alt="slide{index}" />
                        <Carousel.Caption className="sliderDetails text-right" style={{ textShadow: "1px 3px 0px #AEAEAE",zIndex:"1"}}>
                            <h3 style={{ fontSize: "37px" }}>{item.H1}</h3>
                            <h3 style={{ fontSize: "37px" }}>{item.H2}</h3>
                            <h3 style={{ fontSize: "37px" }}>{item.H3}</h3>
                            <div>

                                <button type="button" class="btn btn-danger "><Link style={{ color: "#ffffff", textDecoration: "none" }} to="/signUp">SIGN UP</Link></button>
                                <button type="button" class="btn btn-light mx-2" >Learn More</button>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                )
            }
            </Carousel>

            {/* CUSTOMER REVIEW */}

            <Jumbotron className="mb-0" fluid style={{ backgroundColor: "#e9ecef" }}>
                <Container>
                    <Col style={{ textShadow: "1px 3px 0px #AEAEAE" }}><h1> Customer reviews</h1></Col>
                    <Col style={{ textShadow: "1px 1px 0px #AEAEAE" }} className="mb-5">
                        Our Customer love us. Dream Connect is Ranked #1 in Customer Reviews
                    </Col>
                    <Row>
                        <CardDeck >
                            {reviewInfo.map((item, index) =>
                                <Col className="my-2">
                                    <Card lg={4} md={4} sm={4} className="customerReviewCard" style={{ borderRadius: "10px" }} key={index}>
                                        <Card.Img variant="top" src={item.image} alt="not visible" style={{ height: '150px', width: "150px" }} />
                                        <Card.Body>
                                            <Card.Title >{item.title}</Card.Title>
                                            <Card.Text style={{ fontSize: ".8em" }} >
                                                {item.text}
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            )
                            }
                        </CardDeck>
                    </Row>
                </Container>
            </Jumbotron>


            {/* WHY CHOOSE US */}
            <Jumbotron className="my-0" fluid style={{ backgroundColor: "#EFE4E5" }}>
                <Container>

                    <Col >
                        <h1>Why Choose Us</h1>
                    </Col>
                    <Col >
                        <p className="mb-5">
                            This is a modified jumbotron that occupies the entire horizontal space of
                            its parent.
                        </p>
                    </Col>
                    <Row>
                        <CardDeck>
                            {whyChooseUsInfo.map((item, index) =>
                                <Col className="my-2">
                                    <Card lg={4} md={4} sm={4} className="whyChooseUsCard text-left p-1" style={{ minHeight: "280px" }} key={index}>

                                        <Card.Title className="mx-3 mt-3 mb-0" >{item.image}</Card.Title>
                                        {<Card.Body>
                                            <Card.Title style={{ float: "left" }}>{item.title}</Card.Title>
                                            <Card.Text style={{ float: "left" }}>
                                                {item.text}
                                            </Card.Text>
                                        </Card.Body>}
                                    </Card>
                                </Col>
                            )
                            }
                        </CardDeck>
                    </Row>
                </Container>
            </Jumbotron>

            {/* APP INTRO SECTION */}

            <Card >

                <Card.Body className="pt-5  ">
                    <Container className="d-flex justify-content-center ">
                        <Row>
                        <Col className="pl-5 mb-2" lg={8} md={8} >
                            {/* <div style={{ height: '350px', width: "650px" }}> */}
                            <Row>
                                <Card.Title className="text-left" style={{ fontSize: "40px" }}>You can easily <br />
                                    record video call</Card.Title>
                            </Row>
                            <Row>
                                <Card.Text className="text-left my-5">  It's simple and works on smartphones and tablets. Call with High Video quality and low internet data consumption. Connect with friends and family around the world to share your moments.
                                    Video calling apps are a great way to spend time face-to-face when you can’t be together in person. Whether calling your boss or trying to stay in touch with your friends and family, you should have a great video chat app on your phone or computer.</Card.Text>
                            </Row>
                            <Row>
                                
                                    <Card.Text className="text-left mr-5">Download App Now?</Card.Text>

                                    <StoreBadge 
                                        name="Cheerswipe"
                                        googlePlayUrl="https://play.google.com/store/apps/details?id=fr.puyou.cheerswipe"
                                        appStoreUrl="https://apps.apple.com/us/app/cheerswipe/id1468158095?ls=1"
                                        style={{ width: "900px" }}
                                    />
                                
                            </Row>

                            {/* </div> */}
                        </Col>
                        <Col lg={4} md={4}>
                            <Card.Img variant="top" src={appIntroImage} alt="not visible" style={{ height: '500px', width: '230px' }} />
                        </Col>
                        </Row>
                    </Container>
                </Card.Body>
            </Card>


            {/* READY TO GET STARTED  */}

        
            <figure className='position-relative mb-0 ' style={{ horizontalAlign: "center" }} >

                <img src={readyToStart} alt="ready to start" fluid style={{ height: "700px", width: "100%" }} />
                <Container  >
                    <Col  className=" position-absolute text-light contentPosition">
                        <Row className="p-2 ">
                            <Col className="my-4" style={{fontWeight:"bold",fontSize:"2em"}}>Ready to Get Started?</Col>
                        </Row>
                        <Row className="p-2">
                            <Col className="my-4">Donec tempor finibus ante ac luctus. Fusce facilisis nisi vel odio tincidunt maximus. <br />
                                Pellentesque tempus gravida viverra.</Col>
                        </Row>
                        <Row className="p-2">
                            <Col>
                                <Button className="mx-2 mt-5" variant="dark">BUY NOW</Button>
                                <Button className="mx-2 mt-5" variant="dark">TRY FOR A WEEK</Button>
                            </Col>
                        </Row>
                    </Col>  
                </Container>
            </figure>





            {/* CONTACT US */}


            <Jumbotron fluid className="my-0" style={{ backgroundColor: "#EFE4E5" }}>
                <Container>

                    <Row  >
                        <Col style={{ fontSize: "2em" }}>Talk to our expertise</Col>
                    </Row>
                    <Row >
                        <Col>The best return on investment for your hiring dollars </Col>
                    </Row>

                    <Row className="mt-4 ml-4 ml-sm-2">

                        <Col lg={6} md={6} sm={7} xs={11} className=" text-left">

                            <p>
                                Our experts will examine your requirements and provide suggestions for how best to improve,
                                and which additional services you may benefit from. All of our experts are highly skilled and
                                are proud to offer their expertise alongside great customer support so you can always be sure
                                that you are getting the best advice. We take your privacy very seriously and will never share
                                your personal details with other organisations or individuals.
                            </p>

                        </Col>
                        <Col lg={5} md={5} sm={5} xs={10} >

                            <h5>Contact us</h5>
                            <Form.Group>
                                <Form.Control size="sm" type="text" placeholder="Johnny Holland" />
                            </Form.Group>
                            <Form.Group>
                                <Form.Control size="sm" type="text" placeholder="ksimpson@topicshots.com" />
                            </Form.Group>
                            <Form.Group>
                                <Form.Control size="sm" type="text" placeholder="Company*" />
                            </Form.Group>
                            <Form.Group>
                                <Form.Control size="sm" type="text" placeholder="Interested Industry" />
                            </Form.Group>
                            <Form.Group>
                                <Form.Control size="sm" type="text" placeholder="Description*" />
                            </Form.Group>
                            <Button className="mx-2 mt-1" variant="danger">Contact</Button>

                        </Col>

                    </Row>
                </Container>
            </Jumbotron>










            {/* FOOTER */}

            <Jumbotron fluid className="mb-0" style={{ backgroundColor: "#b2002d" }}>
                <Container>
                    <Row>
                        <Col lg={4} md={3} sm={2} xs={7}>
                            <ul className=" text-left">
                                <li style={{ fontSize: "20px" }} className="my-1">Company</li>
                                <li>About us</li>
                                <li>Services</li>
                                <li>Projects</li>
                                <li>Career</li>
                                <li>Contact</li>
                            </ul>
                        </Col>
                        <Col lg={4} md={3} sm={2} xs={7} >
                            <ul className=" text-left">
                                <li style={{ fontSize: "20px" }} className="my-1">Quick Links</li>
                                <li>Success Stories</li>
                                <li>Achievements</li>
                            </ul>
                        </Col>
                        <Col lg={4} md={3} sm={2} xs={7} >
                            <ul className=" text-left" >
                                <li style={{ fontSize: "20px" }} className="my-1">Follow Us</li>
                                <div className="d-flex">
                                    <li><a href="https://www.instagram.com/dreamdooniya/?hl=en" target="_blank"><Instagram size="20" style={{ color: "#ffffff" }} /></a></li>
                                    <li><a href="https://www.facebook.com/DreamDooniya" target="_blank"><Facebook size="20" style={{ color: "#ffffff" }} /></a></li>
                                    <li><a href="https://twitter.com/DDooniya" target="_blank"><Twitter size="20" style={{ color: "#ffffff" }} /></a></li>
                                    <li><a href="https://www.youtube.com/channel/UCcg2bPvjGmdnZELYwrer3dg/about" target="_blank"><Youtube size="20" style={{ color: "#ffffff" }} /></a></li>
                                </div>
                            </ul>
                        </Col>
                    </Row>

                    <footer className="mb-0 mt-4 p-0 text-center" style={{ color: "#ffffff", fontSize: ".7rem" }}>Copyright © 2021 Dream Connect. - All rights reserved.</footer>

                </Container>
            </Jumbotron>

        </div>
    )
}
export default Homepage;