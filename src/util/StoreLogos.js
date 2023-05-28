import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import AppStoreLogo from '../assets/images/app_store_logo.svg';
import PlayStoreLogo from '../assets/images/play_store_logo.svg';
import constants from './constants';

const StoreLogos = () => {
    return (
        <Row>
            <Col xs={6} sm={4} md={6} lg={5}>
                <a href={constants.appStoreURL} target="_blank" rel="noopener noreferrer">
                    <Image src={AppStoreLogo} className="app-store-logo-home" />
                </a>
            </Col>
            <Col xs={6} sm={8} md={6} lg={7}>
                <a href={constants.playStoreURL} target="_blank" rel="noopener noreferrer">
                    <Image src={PlayStoreLogo} className="play-store-logo-home" />
                </a>
            </Col>
        </Row>
    );
};

export default StoreLogos;