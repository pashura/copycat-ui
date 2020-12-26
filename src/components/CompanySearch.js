import {AsyncTypeahead} from "react-bootstrap-typeahead";
import React, {Fragment, useState} from 'react'
import * as Apis from "../api/api";
import {getDesigns, searchCompany, setOrgId} from "../actions/actions";
import {connect} from "react-redux";

const CompanySearch = ({token, getDesigns, setOrgId}) => {
    const [isLoading, setIsLoading] = useState(false);
    const [options, setOptions] = useState([]);

    const handleSearch = (query) => {
        setIsLoading(true);

        Apis.fetchSearchCompany(query, token)
            .then((companies) => {
                const options = companies.map((i) => ({
                    orgId: i.id,
                    companyName: i.organization_name,
                }));

                setOptions(options);
                setIsLoading(false);
            });
    };

    const onChange = (e) => {
        if (e.length) {
            getDesigns(e[0].orgId, token)
            setOrgId(e[0].orgId)
        }
    }

    // Bypass client-side filtering by returning `true`. Results are already
    // filtered by the search endpoint, so no need to do it again.
    const filterBy = () => true;

    return <AsyncTypeahead
        filterBy={filterBy}
        id="async-example"
        isLoading={isLoading}
        labelKey="companyName"
        minLength={3}
        onSearch={handleSearch}
        options={options}
        placeholder="Search for a Company..."
        onChange={(e) => onChange(e)}
        renderMenuItemChildren={(option, props) => (
            <Fragment>
                <span>{option.companyName}</span>
            </Fragment>
        )}
    />
}


const mapDispatchToProps = {
    getDesigns: getDesigns,
    searchCompany: searchCompany,
    setOrgId: setOrgId,
};

const mapStateToProps = (state) => ({
    searchCompanyTerm: state.searchCompanyTerm,
    companies: state.companies,
    token: state.token
})

export default connect(mapStateToProps, mapDispatchToProps)(CompanySearch)
