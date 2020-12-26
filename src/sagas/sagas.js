import {all, call, put, takeLatest} from 'redux-saga/effects';
import * as ActionTypes from '../actions/actions'
import * as Apis from "../api/api";

// TODO: Use selectors???

function* searchCompany(action) {
    const {data} = yield call(Apis.fetchSearchCompanySaga, action.searchCompanyTerm, action.token)
    yield put({type: ActionTypes.SEARCH_COMPANY_SUCCESS, companies: data.results, company: action.searchCompanyTerm});
}

function* searchDesign(action) {
    const {data} = yield call(Apis.fetchCheckDesign, action.designName)
    yield put({type: ActionTypes.SEARCH_DESIGN_SUCCESS, designsInfo: data.designsInfo});
}

function* getDesigns(action) {
    const {data} = yield call(Apis.fetchGetDesigns, action.orgId, action.token)
    yield put({type: ActionTypes.GET_DESIGNS_SUCCESS, designs: JSON.parse(data).files});
}

function* runValidation(action) {
    const {data} = yield call(Apis.postValidate, action)
    yield put({type: ActionTypes.RUN_VALIDATION_SUCCESS, errors: data});
}

function* setOrgId(action) {
    yield put({type: ActionTypes.SET_ORG_ID_SUCCESS, orgId: action.orgId});
}

function* setDesignName(action) {
    yield put({type: ActionTypes.SET_DESIGN_NAME_SUCCESS, designName: action.designName});
}

function* applyToken(action) {
    yield put({type: ActionTypes.APPLY_TOKEN_SUCCESS, token: action.token});
}

function* actionWatcher() {
    yield takeLatest(ActionTypes.SEARCH_COMPANY, searchCompany)
    yield takeLatest(ActionTypes.GET_DESIGNS, getDesigns)
    yield takeLatest(ActionTypes.SET_ORG_ID, setOrgId)
    yield takeLatest(ActionTypes.SET_DESIGN_NAME, setDesignName)
    yield takeLatest(ActionTypes.SEARCH_DESIGN, searchDesign)
    yield takeLatest(ActionTypes.RUN_VALIDATION, runValidation)
    yield takeLatest(ActionTypes.APPLY_TOKEN, applyToken)
}

export default function* rootSaga() {
    yield all([
        actionWatcher(),
    ]);
}
