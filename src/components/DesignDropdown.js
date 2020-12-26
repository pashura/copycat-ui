import {Form} from "react-bootstrap";
import {getDesigns, setDesignName} from "../actions/actions";
import {connect} from "react-redux";


const DesignDropdown = ({designs, setDesignName}) => {

    const _setOrgId = (e) => {
        setDesignName(e.target.value.replace('.json', ''))
    }

    return (
        <Form>
            <Form.Group controlId="formGridState">
                <Form.Control as="select" custom disabled={!(designs || []).length} onChange={e => _setOrgId(e)}>
                    <option>Choose design...</option>
                    {
                        (designs || []).map((designName, i) => (
                            <option key={i}>{designName.file.split('/')[designName.file.split('/').length - 1]}</option>
                        ))
                    }
                </Form.Control>
            </Form.Group>
        </Form>
    )
}


const mapDispatchToProps = {
    getDesigns: getDesigns,
    setDesignName: setDesignName,
};


const mapStateToProps = (state) => ({
    searchCompanyTerm: state.searchCompanyTerm,
    designs: state.designs,
    orgId: state.orgId,
    token: state.token
})

export default connect(mapStateToProps, mapDispatchToProps)(DesignDropdown)
