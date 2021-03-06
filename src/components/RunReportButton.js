import React from 'react';
import {connect} from 'react-redux';
import {runValidationReport} from '../actions/actions';
import {Button} from "react-bootstrap";

let RunReportButton = ({data, runValidationReport, orgId, designName}) => {
    if (designName && data){
        return <Button variant="dark" onClick={() => runValidationReport(orgId, designName, data)}>Run Report</Button>
    }
    return <Button variant="dark" disabled>Run Report</Button>
}
const mapDispatchToProps = {
    runValidationReport: runValidationReport,
};

const mapStateToProps = (state) => ({
    designsInfo: state.designsInfo,
    designName: state.designName,
    orgId: state.orgId
})

RunReportButton = connect(mapStateToProps, mapDispatchToProps)(RunReportButton);

export default RunReportButton;
