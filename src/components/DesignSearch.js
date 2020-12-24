import React, {useState} from 'react'
import {Alert, Button, FormControl, InputGroup} from "react-bootstrap";
import {connect} from "react-redux";
import Loading from "./Loading";
import {searchDesign} from "../actions/actions";

const DesignSearch = ({loadingSearchDesign, designs, searchDesign}) => {

    const [designName, setDesignName] = useState("");

    const onClicked = () => {
        searchDesign(designName)
    }

    return (
        <div className="DesignSearch">
            <InputGroup className="mb-3">
                <FormControl
                    placeholder="Design Name"
                    aria-label="Design Name"
                    aria-describedby="design-name"
                    onChange={e => setDesignName(e.target.value)}
                />
                <InputGroup.Append>
                    <Button variant="outline-secondary" onClick={onClicked}>Search</Button>
                </InputGroup.Append>
            </InputGroup>

            {loadingSearchDesign ? <Loading/> : null}
            {
                designs && designs.length ?
                    <Alert variant="success">
                        Design was found!
                    </Alert>
                    : null
            }
        </div>
    )
}

const mapStateToProps = (state) => ({
    designs: state.designs,
    loadingSearchDesign: state.loadingSearchDesign
})

const mapDispatchToProps = {
    searchDesign: searchDesign,
};

export default connect(mapStateToProps, mapDispatchToProps)(DesignSearch)
