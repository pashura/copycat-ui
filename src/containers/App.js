import React, {useState, Fragment, useEffect} from 'react'
import {withRouter} from 'react-router-dom'
import RunButton from "../components/RunButton";
import ErrorsArea from "../components/ErrorsArea";
import TestDataArea from "../components/TestDataArea";
import {Col, Container, Row} from "react-bootstrap";
import DragNDrop from "../components/DragNDrop";
import CompanySearch from "../components/CompanySearch";
import DesignDropdown from "../components/DesignDropdown";
import AuthorizationModal from "../components/Authorization";
import {applyToken} from "../actions/actions";
import {connect} from "react-redux";
import Cookies from 'universal-cookie/es6';

const App = ({token, applyToken}) => {

    const [fileLoaded, setFileLoaded] = useState(false);
    const [fileObject, setFileObject] = useState("");

    const cookies = new Cookies();

    if (!token) {
        token = cookies.get('copycat_token')
    }

    useEffect(() => {
        applyToken(token)
    }, [applyToken, token]);

    const uploadFiles = (data) => {
        setFileObject(data)

        setFileLoaded(true)
    }


    return (
        <div className="pt-5">
            <Container fluid>
                {
                    !token ? <AuthorizationModal/> : <Fragment>
                        <Row>
                            <Col xs={2}>
                                <CompanySearch/>
                            </Col>
                            <Col xs={4}>
                                <DesignDropdown/>
                            </Col>
                            <Col>
                                <RunButton data={fileObject}/>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                {fileLoaded ? <TestDataArea fileObject={fileObject} setFO={setFileObject}/> :
                                    <DragNDrop uploadFiles={uploadFiles}/>}
                            </Col>
                            <Col> <ErrorsArea/></Col>
                        </Row>
                    </Fragment>
                }

            </Container>
        </div>
    )

}
const mapStateToProps = ({token}) => ({token})

const mapDispatchToProps = {
    applyToken: applyToken,
};


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
