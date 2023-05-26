import React from "react"
import styles from './About.module.css';
import Card from "../../util/Card";
import Heading from "../../util/Heading";
import PropTypes from "prop-types";

const About =()=>{
    return(
        <>
        <Heading heading="Get to Know more about Offside" subheading="A place that makes consversation as memorable as the matches"/>
        <div className={styles.card}>
            <Card heading="Predictions" info="A place that makes conversations as memorable as the matches."/>
        </div>

    
        </>
    )
}

export default About;