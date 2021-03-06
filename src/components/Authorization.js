import {Button, Col, Form, Modal} from "react-bootstrap";
import {useEffect, useState} from "react";
import {applyToken, checkToken} from "../actions/actions";
import {connect} from "react-redux";
import Cookies from 'universal-cookie/es6';

const AuthorizationModal = ({applyToken, checkToken, tokenStatus, setShowAuth}) => {
    const [show, setShow] = useState(true);
    const [token, setToken] = useState('');

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [validated, setValidated] = useState(false);

    const cookies = new Cookies();

    useEffect(() => {
        if (token) {
            checkToken(token)
        }
    }, [checkToken, token]);

    useEffect(() => {
        if (tokenStatus) {
            setValidated(tokenStatus === "ok")
        }
    }, [tokenStatus]);


    const handleSubmit = event => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };

    const handleClose_ = () => {
        if (!token) {
            applyToken(cookies.get('copycat_token'))
        } else {
            if (tokenStatus === "ok") applyToken(token)
        }

        cookies.set('copycat_token', token, {path: '/'});
        handleShow()
        setShowAuth(false)
    }

    const onChange_ = (event) => {
        checkToken(event.target.value)
        setToken(event.target.value)
    }


    return <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>Log in by inserting your token</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Form.Row>
                    <Form.Group as={Col}>
                        <Form.Control
                            type="text"
                            id="validationToken"
                            aria-describedby="passwordHelpBlock"
                            onChange={e => onChange_(e)}
                            isInvalid={tokenStatus === 'failed'}
                            placeholder="Token"
                        />
                        <Form.Control.Feedback type="invalid">
                            Token is invalid.
                        </Form.Control.Feedback>
                    </Form.Group>
                </Form.Row>
            </Form>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="primary" onClick={e => handleClose_(e)} disabled={tokenStatus !== 'ok'}>
                Apply
            </Button>
        </Modal.Footer>
    </Modal>
}

const mapStateToProps = ({tokenStatus}) => ({tokenStatus})

const mapDispatchToProps = {
    applyToken: applyToken,
    checkToken: checkToken,
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthorizationModal)
