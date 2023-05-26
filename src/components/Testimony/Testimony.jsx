import React from "react";
import CardList from "../../util/TestimonyCard";
import Heading from "../../util/Heading";
import styles from "./Testimony.module.css";

const Testimony = () =>{

    return(
        <>
        <Heading heading="Know what people think about Offside" subheading="A place that makes conversations as memorable as the matches."/>
        <div>
            <CardList name="Kavana" info= "offside is a super good company"/>
        </div>
        </>
    )
}

export default Testimony;