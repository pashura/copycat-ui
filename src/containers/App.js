import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import DragNDrop from "../components/DragNDrop";
import DesignSearch from "../components/DesignSearch";
import RunButton from "../components/RunButton";
import TestDataArea from "../components/TestDataArea";
import ErrorsArea from "../components/ErrorsArea";


class App extends Component {

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <DragNDrop />
                        <TestDataArea />
                    </div>
                    <div className="col-2">
                        <DesignSearch />
                        <RunButton />
                    </div>
                    <div className="col">
                        <ErrorsArea />
                    </div>
                </div>
            </div>
        )
    }
}


export default withRouter(App);
