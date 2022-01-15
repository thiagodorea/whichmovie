import React from "react";
import ReactLoading from "react-loading";

import "./styles.css";
const divStyle = {
    color: '#4D41C0',
};

const Loading = () => (
    <>
        <div className="section-loading">
            <ReactLoading type="bars" color="#4D41C0" />
        </div>
        <div className="row justify-content-md-center">
            <span className="fw-bold text-center fs-4" style={divStyle }> Aguarde... </span>
            <span className="text-center fs-6" > O Primeiro acesso pode demorar</span>
        </div>
    </>
);

export default Loading;