import * as ActionTypes from '../actions/actions'

const reducer = (state = {}, action) => {

    switch (action.type) {
        case ActionTypes.SEARCH_COMPANY:
            return {...state, loadingSearchCompany: true};
        case ActionTypes.SEARCH_COMPANY_SUCCESS:
            return {...state, loadingSearchCompany: false, companies: action.companies};

        case ActionTypes.GET_DESIGNS:
            return {...state, loadingGetDesigns: true};
        case ActionTypes.GET_DESIGNS_SUCCESS:
            return {...state, loadingGetDesigns: false, designs: action.designs};

        case ActionTypes.SEARCH_DESIGN:
            return {...state, loadingSearchDesign: true};
        case ActionTypes.SEARCH_DESIGN_SUCCESS:
            return {...state, loadingSearchDesign: false, designsInfo: action.designsInfo};

        case ActionTypes.RUN_VALIDATION:
            return {...state, loadingValidation: true};
        case ActionTypes.RUN_VALIDATION_SUCCESS:
            return {...state, loadingValidation: false, errors: action.errors};

        case ActionTypes.RUN_VALIDATION_REPORT:
            return {...state, loadingValidationReport: true};
        case ActionTypes.RUN_VALIDATION_REPORT_SUCCESS:
            return {...state, loadingValidationReport: false, report: action.report};

        case ActionTypes.SET_ORG_ID:
            return {...state, orgId: action.orgId};

        case ActionTypes.SET_DESIGN_NAME:
            return {...state};
        case ActionTypes.SET_DESIGN_NAME_SUCCESS:
            return {...state, designName: action.designName};

        case ActionTypes.APPLY_TOKEN:
            return {...state};
        case ActionTypes.APPLY_TOKEN_SUCCESS:
            return {...state, token: action.token};

        case ActionTypes.CHECK_TOKEN:
            return {...state};
        case ActionTypes.CHECK_TOKEN_SUCCESS:
            return {...state, tokenStatus: action.tokenStatus};
        case ActionTypes.CHECK_TOKEN_FAILED:
            return {...state, tokenStatus: action.tokenStatus};

        case ActionTypes.GET_USER_INFO:
            return {...state};
        case ActionTypes.GET_USER_INFO_SUCCESS:
            return {...state, userInfo: action.userInfo};

        default:
            return state;
    }
};

export default reducer;
