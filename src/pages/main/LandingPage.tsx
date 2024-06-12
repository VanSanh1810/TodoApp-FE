import React, { FC } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import './landingPage.css';

const LandingPage: FC = () => {
    return (
        <div>
            <div className="landing-header">
                <i style={{ fontSize: '2em' }} className="material-icons">
                    checklist
                </i>
                <Button style={{ backgroundColor: 'white', color: 'black', fontWeight: 700 }} className="rounded-4 px-4 border-0">
                    Login
                </Button>
            </div>
            <div className="landing-body">
                <Col>
                    <div className="landing-banner">
                        <Row>
                            <Col>
                                <div>
                                    <h1 style={{ marginBottom: '20px', fontSize: '3.5em', fontWeight: 700 }}>
                                        Manage your tasks and stay organzied, anytime, anywhere !
                                    </h1>
                                    <p>
                                        We provide efficient task management, ensuring all your projects are on track and easily
                                        accessible
                                    </p>
                                    <div>
                                        <Button>Start now</Button>
                                        <Button>Explore feature</Button>
                                    </div>
                                </div>
                            </Col>
                            <Col>
                                <div className="landing-banner-img">
                                    <i style={{ fontSize: '15em' }} className="material-icons">
                                        checklist
                                    </i>
                                </div>
                            </Col>
                        </Row>
                    </div>
                    <div className="landing-feature">
                        <Row>
                            <Col>
                                <div className="landing-feature-fragment">
                                    <h4>Engaged Users</h4>
                                    <p>10K+</p>
                                </div>
                            </Col>
                            <Col>
                                <div className="landing-feature-fragment">
                                    <h4>Engaged Users</h4>
                                    <p>10K+</p>
                                </div>
                            </Col>
                            <Col>
                                <div className="landing-feature-fragment">
                                    <h4>Engaged Users</h4>
                                    <p>10K+</p>
                                </div>
                            </Col>
                            <Col>
                                <div className="landing-feature-fragment">
                                    <h4>Engaged Users</h4>
                                    <p>10K+</p>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Col>
            </div>
        </div>
    );
};

export default LandingPage;
