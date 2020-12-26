import {Button, Col, Form, Modal} from "react-bootstrap";
import {useState} from "react";
import {applyToken} from "../actions/actions";
import {connect} from "react-redux";
import Cookies from 'universal-cookie/es6';

const AuthorizationModal = ({applyToken}) => {
    const [show, setShow] = useState(true);
    const [token, setToken] = useState('');

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [validated, setValidated] = useState(false);

    const cookies = new Cookies();

    const handleSubmit = event => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };

    const handleClose_ = () => {
        console.log(token)

        if (!token) {
            applyToken(cookies.get('copycat_token'))
        } else {
            applyToken(token)
        }

        cookies.set('copycat_token', token, {path: '/'});
        handleShow()
    }

    const onChange_ = (event) => {
        setToken(event.target.value)
    }

    return <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>Insert your token</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Form.Row>
                    <Form.Group as={Col}>
                        <Form.Label htmlFor="inputPassword5">Token</Form.Label>
                        <Form.Control
                            type="text"
                            id="validationToken"
                            aria-describedby="passwordHelpBlock"
                            onChange={e => onChange_(e)}
                        />
                        <Form.Text id="passwordHelpBlock" muted>
                            Without <b>Bearer</b>. Just token
                        </Form.Text>
                    </Form.Group>
                </Form.Row>
            </Form>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="primary" onClick={e => handleClose_(e)}>
                Ok
            </Button>
        </Modal.Footer>
    </Modal>
}

const mapDispatchToProps = {
    applyToken: applyToken,
};

export default connect(null, mapDispatchToProps)(AuthorizationModal)
