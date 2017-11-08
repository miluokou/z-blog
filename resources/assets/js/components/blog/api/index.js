
const BaseRoot = 'http://localhost:8000/';

const Version = 'api/';
const makeApi = function (url) {
    return BaseRoot + Version + url;
};
const makeUrl = function (url) {
    return BaseRoot + url;
};

export default {
    'getPost': makeUrl('post'),
    'getPostApi': makeApi('post'),
};