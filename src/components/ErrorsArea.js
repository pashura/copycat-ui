import React from 'react'
import {Card, ListGroup, Spinner} from "react-bootstrap";
import {connect} from "react-redux";

let ErrorsArea = ({errors, loadingValidation}) => {

    return (
        <div className="ErrorsArea">
            <Card>
                <Card.Header as="h5">Status</Card.Header>
                <Card.Body>
                    {
                        loadingValidation ? <Spinner animation="border"/> : <ListGroup>
                            {
                                (errors || []).map((error, index) => (
                                    <ListGroup.Item key={index}>
                                        {error.fieldName ? <b style={{
                                            color: "#B00025",
                                            cursor: "pointer"
                                        }}>[{error.fieldName}]:</b> : null}

                                        {error.errorMessage}

                                    </ListGroup.Item>
                                ))
                            }
                        </ListGroup>
                    }
                </Card.Body>
            </Card>
        </div>
    )
}

const mapStateToProps = state => ({
    errors: state.errors,
    loadingValidation: state.loadingValidation
})

ErrorsArea = connect(mapStateToProps, null)(ErrorsArea)
export default ErrorsArea;

