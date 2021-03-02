import React from 'react';
import {connect} from 'react-redux';
import {runValidation} from '../actions/actions';
import {Button} from "react-bootstrap";

let RunButton = ({data, runValidation, orgId, designName}) => {
    if (designName && data){
        return <Button variant="dark" onClick={() => runValidation(orgId, designName, data)}>Run Validation</Button>
    }
    return <Button variant="dark" disabled>Run Validation</Button>
}
const mapDispatchToProps = {
    runValidation: runValidation,
};

const mapStateToProps = (state) => ({
    designsInfo: state.designsInfo,
    designName: state.designName,
    orgId: state.orgId
})

RunButton = connect(mapStateToProps, mapDispatchToProps)(RunButton);

export default RunButton;
