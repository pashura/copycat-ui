import axios from 'axios'
import {Urls} from "../config/urls";

const CC_LOCALHOST = new Urls('local').cc_url;
const IDENTITY_URL = new Urls('local').id_url
const TD_URL = new Urls('local').td_url

export default axios.create({
    baseURL: CC_LOCALHOST,
    responseType: "json"
});

export async function fetchSearchCompany(searchCompanyTerm, token) {
    const config = {
        headers: {
            Authorization: `bearer ${token}`,
        }
    }
    const searchType = searchCompanyTerm.length <= 3 ? 'search' : 'name';

    return await axios
        .get(
            IDENTITY_URL +
            'identity/v2/organizations/?' +
            searchType +
            '=' +
            encodeURIComponent(searchCompanyTerm) +
            '&page_size=100',
            config
        )
        .then(res => {
            return res.data.results;
        });
}

export function fetchSearchCompanySaga(searchCompanyTerm, token) {
    const config = {
        headers: {
            Authorization: `bearer ${token}`,
        }
    }

    return axios.get(`${IDENTITY_URL}identity/v2/organizations/?name=${encodeURIComponent(searchCompanyTerm)}&page_size=100`, config);
}

export function checkToken(token) {
    const config = {
        headers: {
            Authorization: `bearer ${token}`,
        }
    }

    return axios.post(`${IDENTITY_URL}identity/token/check/?access_token=${token}`, config)
        .then(response => {
            return new Promise((resolve, reject) => {
                if (response.status === 404) {
                    reject(new Error("Not Found"));
                }
                if (response.status === 200) {
                    resolve(response);
                }
            });
        });
}

export function getUserInfo(token) {
    const config = {
        headers: {
            Authorization: `bearer ${token}`,
        }
    }

    return axios.get(`${IDENTITY_URL}identity/users/me/?access_token=${token}`, config);
}

export async function fetchGetDesigns(orgId, token) {
    const config = {
        headers: {
            Authorization: `bearer ${token}`,
        }
    }
    return await axios
        .get(TD_URL + `/company_designs/Companies/${orgId}/Designs/`, config)
}

export function fetchCheckDesign(designName) {
    return axios.get(`${CC_LOCALHOST}check/design/${designName}`);
}

export function postValidate({orgId, designName, data}) {
    const config = {
        headers: {
            "Content-Type": "application/xml",
        }
    }
    return axios.post(`${CC_LOCALHOST}validate/org_id/${orgId}/design/${designName}`, data, config);
}

export function postValidateReport({orgId, designName, data}) {
    const config = {
        headers: {
            "Content-Type": "application/json",
        }
    }
    return axios.post(`${CC_LOCALHOST}validate/org_id/${orgId}/design/${designName}/report`, data, config);
}
