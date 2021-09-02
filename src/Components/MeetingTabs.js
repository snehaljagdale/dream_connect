import { useState } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Button, Accordion } from 'react-bootstrap'
import "../cssFiles/MeetingTabs.css";

function MeetingTabs() {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };

    return (
        <div className=" MeetingsTabContainer" >
            <div className="bloc-tabs">
                <button className="tabButton"
                    className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
                    onClick={() => toggleTab(1)}
                >
                    UPCOMING
                </button>
                <button
                    className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
                    onClick={() => toggleTab(2)}
                >
                    PREVIOUS
                </button>
                <button
                    className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
                    onClick={() => toggleTab(3)}
                >
                    PERSONAL ROOM
                </button>
            </div>

            <div className="content-tabs ">
                <div
                    className={toggleState === 1 ? "content  active-content" : "content"}
                >

                    <Row>
                        <button type="button" class="btn btn-danger scheduleMeetingButton"><Link style={{ color: "#ffffff", textDecoration: "none" }} to="">SCHEDULE A MEETING</Link></button>
                    </Row>
                    <Row className="m-2 p-1 upcomingHeading" style={{ backgroundColor: "#ECEAEA", height: "35px" }}>
                        <Col>Thu, Jun 24</Col>
                    </Row>
                    <Row className="m-1 my-5">
                        <Col xxl={4} xl={3} lg={3} md={3} sm={5} xs={10} className="text-left my-1">07:00 PM - 08:00 PM</Col>
                        <Col xxl={5} xl={4} lg={4} md={4} sm={6} xs={12} className="text-left my-1">My Meeting   <br />   Meeting ID: 848 7252 4205 </Col>
                        <Col xxl={3} xl={3} lg={5} md={5} sm={8} xs={12} className="d-flex my-1">

                            <Button className="meetingButtons " variant="danger" size="sm"> Start</Button>
                            <Button className="meetingButtons " variant="light" size="sm"> Edit</Button>
                            <Button className="meetingButtons " variant="light" size="sm"> Delete</Button>

                        </Col>
                    </Row>

                </div>


                <div
                    className={toggleState === 2 ? "content  active-content" : "content"}
                >
                    <Row>
                        <button type="button" class="btn btn-danger scheduleMeetingButton"><Link style={{ color: "#ffffff", textDecoration: "none" }} to="">SCHEDULE A MEETING</Link></button>
                    </Row>
                    <p className="my-4">
                        The user does not have any previous meetings.
                        To schedule a new meeting click Schedule a Meeting.
                    </p>
                </div>

                <div
                    className={toggleState === 3 ? "content  active-content" : "content"}
                >
                    <Row className="m-2 my-2">
                        <Col xxl={3} xl={3} lg={4} md={3} sm={3} xs={10} className=" personalRoomCol1">TOPIC</Col>
                        <Col xxl={7} xl={6} lg={6} md={7} sm={7} xs={12} className=" personalRoomCol2">Ray Manson's Personal Meeting Room </Col>
                    </Row>
                    <Row className="m-2 my-2">
                        <Col xxl={3} xl={3} lg={4} md={3} sm={3} xs={10} className=" personalRoomCol1">MEETING ID</Col>
                        <Col xxl={7} xl={6} lg={6} md={7} sm={7} xs={12} className=" personalRoomCol2">653 559 6443 </Col>
                    </Row>
                    <Row className="m-2 my-2">
                        <Col xxl={3} xl={3} lg={4} md={3} sm={3} xs={10} className=" personalRoomCol1">SECURITY</Col>
                        <Col xxl={7} xl={6} lg={6} md={7} sm={7} xs={12} className=" personalRoomCol2">Passcode ******    </Col>
                    </Row>
                    <Row className="m-2 my-2">
                        <Col xxl={3} xl={3} lg={4} md={3} sm={3} xs={10} className=" personalRoomCol1">JOIN URL</Col>
                        <Col xxl={9} xl={6} lg={6} md={7} sm={7} xs={12} className=" personalRoomCol2">https://us05web.zoom.us/j/6535596440?pwd=eFJtZmxqdzBVajZDN0tqUUVUdkszZz09 </Col>
                    </Row>
                    <Row className="m-2 my-2">
                        <Col xxl={3} xl={3} lg={4} md={3} sm={3} xs={10} className=" personalRoomCol1">VIDEO</Col>
                        <Col xxl={7} xl={6} lg={6} md={7} sm={7} xs={12} className=" personalRoomCol2">Host: Off      <br/>        Participant: Off               </Col>
                    </Row>
                    <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12} className="d-flex personalRoomButtons m-3 my-2">

                            <Button className="PRButton" variant="danger" size="sm"> Start</Button>
                            <Button className="PRButton" variant="light" size="sm"> Copy the Invitation</Button>
                            <Button className="PRButton" variant="light" size="sm"> Edit</Button>

                        </Col>
                </div>
            </div>
        </div>
    );
}

export default MeetingTabs;