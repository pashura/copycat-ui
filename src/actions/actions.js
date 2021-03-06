export const SEARCH_COMPANY = 'SEARCH_COMPANY'
export const SEARCH_COMPANY_SUCCESS = 'SEARCH_COMPANY_SUCCESS'
export const SEARCH_DESIGN = 'SEARCH_DESIGN'
export const SEARCH_DESIGN_SUCCESS = 'SEARCH_DESIGN_SUCCESS'
export const GET_DESIGNS = 'GET_DESIGNS'
export const GET_DESIGNS_SUCCESS = 'GET_DESIGNS_SUCCESS'
export const RUN_VALIDATION = 'RUN_VALIDATION'
export const RUN_VALIDATION_SUCCESS = 'RUN_VALIDATION_SUCCESS'
export const RUN_VALIDATION_REPORT = 'RUN_VALIDATION_REPORT'
export const RUN_VALIDATION_REPORT_SUCCESS = 'RUN_VALIDATION_REPORT_SUCCESS'
export const SET_ORG_ID = 'SET_ORG_ID'
export const SET_ORG_ID_SUCCESS = 'SET_ORG_ID_SUCCESS'
export const SET_DESIGN_NAME = 'SET_DESIGN_NAME'
export const SET_DESIGN_NAME_SUCCESS = 'SET_DESIGN_NAME_SUCCESS'
export const APPLY_TOKEN = 'APPLY_TOKEN'
export const APPLY_TOKEN_SUCCESS = 'APPLY_TOKEN_SUCCESS'
export const CHECK_TOKEN = 'CHECK_TOKEN'
export const CHECK_TOKEN_SUCCESS = 'CHECK_TOKEN_SUCCESS'
export const CHECK_TOKEN_FAILED = 'CHECK_TOKEN_FAILED'
export const GET_USER_INFO = 'GET_USER_INFO'
export const GET_USER_INFO_SUCCESS = 'GET_USER_INFO_SUCCESS'

export const searchCompany = searchCompanyTerm => ({
    type: SEARCH_COMPANY, searchCompanyTerm
})

export const searchDesign = designName => ({
    type: SEARCH_DESIGN, designName
})

export const getDesigns = (orgId, token) => ({
    type: GET_DESIGNS, orgId, token
})

export const runValidation = (orgId, designName, data) => ({
    type: RUN_VALIDATION, orgId, designName, data
})

export const runValidationReport = (orgId, designName, data) => ({
    type: RUN_VALIDATION_REPORT, orgId, designName, data
})

export const setOrgId = orgId => ({
    type: SET_ORG_ID, orgId
})

export const setDesignName = designName => ({
    type: SET_DESIGN_NAME, designName
})

export const applyToken = token => ({
    type: APPLY_TOKEN, token
})

export const checkToken = token => ({
    type: CHECK_TOKEN, token
})

export const getUserInfo = token => ({
    type: GET_USER_INFO, token
})
