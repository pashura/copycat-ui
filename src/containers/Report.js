import React, {useState, Fragment} from 'react'
import {Col, Container, Row} from "react-bootstrap";
import CompanySearch from "../components/CompanySearch";
import DesignDropdown from "../components/DesignDropdown";
import ReportTable from "../components/ReportTable";
import RunReportButton from "../components/RunReportButton";
import FileChooser from "../components/FileChooser";

const Report = () => {

    const [fileLoaded, setFileLoaded] = useState(false);
    const [fileObject, setFileObject] = useState("");

    const uploadFiles = data => {
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
                                <FileChooser uploadFiles={uploadFiles}/>
                            </Col>
                            <Col>
                                <RunReportButton data={fileObject}/>
                            </Col>
                        </Row>
                        <Row>
                            {fileObject ? <ReportTable/> : null}
                        </Row>
                    </Fragment>
                }

            </Container>
        </div>
    )

}

export default Report;
