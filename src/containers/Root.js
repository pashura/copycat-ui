import React, {useEffect, useState} from 'react'
import PropTypes from 'prop-types'
import {connect, Provider} from 'react-redux'
import {Route, withRouter} from 'react-router-dom'
import App from './App'
import Report from "./Report";
import {Nav, Navbar} from "react-bootstrap";
import Cookies from "universal-cookie/es6";
import {applyToken, checkToken, getUserInfo} from "../actions/actions";
import AuthorizationModal from "../components/Authorization";

const Root = ({store, token, tokenStatus, userInfo, applyToken, checkToken, getUserInfo}) => {

    const [showAuth, setShowAuth] = useState(false);

    const cookies = new Cookies();

    if (!token) {
        token = cookies.get('copycat_token')
    }

    useEffect(() => {
        applyToken(token)
    }, [applyToken, token]);

    useEffect(() => {
        if (token) checkToken(token)
    }, [checkToken, tokenStatus, token]);

    useEffect(() => {
        if (tokenStatus === "ok" && token) getUserInfo(token)

    }, [getUserInfo, token, tokenStatus]);

    return <Provider store={store}>

        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="#home">CopyCat</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="validation">Validation</Nav.Link>
                    <Nav.Link href="report">Report</Nav.Link>
                </Nav>
                <Nav>
                    {
                        token && userInfo ?
                            <Nav.Item>Logged in as {userInfo['first_name']} {userInfo['last_name']}</Nav.Item> :
                            <Nav.Link onClick={() => setShowAuth(true)}>Login</Nav.Link>
                    }
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        <Route path="/validation" component={App}/>
        <Route path="/report" component={Report}/>

        {showAuth ? <AuthorizationModal setShowAuth={setShowAuth}/> : null}
    </Provider>
}


Root.propTypes = {
    store: PropTypes.object.isRequired,
}

const mapStateToProps = ({token, userInfo, tokenStatus}) => ({token, userInfo, tokenStatus})

const mapDispatchToProps = {
    applyToken: applyToken,
    checkToken: checkToken,
    getUserInfo: getUserInfo,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Root));
