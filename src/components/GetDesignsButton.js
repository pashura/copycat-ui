import React from 'react';
import {connect} from 'react-redux';
import {getDesigns} from '../actions/actions';
import {Button} from "react-bootstrap";

let GetDesignsButton = ({getDesigns, orgId}) => {
    return (
        orgId ? <Button variant="dark" onClick={() => getDesigns(orgId)}>Get Designs</Button> : null
    )
}
const mapDispatchToProps = {
    getDesigns: getDesigns,
};

const mapStateToProps = (state) => ({
    designs: state.designs,
    orgId: state.orgId,
    companyNameLoaded: state.companyNameLoaded
})

GetDesignsButton = connect(mapStateToProps, mapDispatchToProps)(GetDesignsButton);

export default GetDesignsButton;
