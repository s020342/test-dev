import request from '../utils/request';

export function query () {
    return request('/api/users');
}

export function query1 (d) {
    console.log(d)
    return request('/api/users1?id=' + d);
}