import React, {useState, Fragment} from 'react'
import RunButton from "../components/RunButton";
import ErrorsArea from "../components/ErrorsArea";
import TestDataArea from "../components/TestDataArea";
import {Col, Container, Row} from "react-bootstrap";
import DragNDrop from "../components/DragNDrop";
import CompanySearch from "../components/CompanySearch";
import DesignDropdown from "../components/DesignDropdown";

const App = () => {

    const [fileLoaded, setFileLoaded] = useState(false);
    const [fileObject, setFileObject] = useState("");


    const uploadFiles = (data) => {
        setFileObject(data)

        setFileLoaded(true)
    }


    return (
        <div className="pt-5">
            <Container fluid>
                {
                    <Fragment>
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


export default App;
