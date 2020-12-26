export const ENV = 'local'; // TODO: Figure out with environments

const CC_URLS = {
    local: 'https://copycat-api.herokuapp.com/',
    test: 'https://copycat-api.herokuapp.com/',
    prod: '',
};

const TD_URLS = {
    local: 'https://design-ui-api.test.spsapps.net',
    test: 'https://design-ui-api.test.spsapps.net',
    prod: 'https://design-ui-api.spsapps.net',
};

const ID_URLS = {
    local: 'https://test.id.spsc.io/',
    test: 'https://test.id.spsc.io/',
    prod: 'https://id.spsc.io/',
};


export class Urls {
    constructor(env) {
        this.td_url = TD_URLS[env];
        this.id_url = ID_URLS[env];
        this.cc_url = CC_URLS[env];
    }
}
