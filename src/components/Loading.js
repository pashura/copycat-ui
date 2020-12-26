import React from 'react';
import {connect} from 'react-redux'
import {Spinner} from "react-bootstrap";

let Loading = ({loadingSearchDesign}) => (
    loadingSearchDesign ?
        <div style={{textAlign: 'center'}}>
            <Spinner animation="grow" />
        </div> :
        null
);
const mapStateToProps = (state) => ({loadingSearchDesign: state.loadingSearchDesign})

Loading = connect(mapStateToProps, null)(Loading)

export default Loading;
