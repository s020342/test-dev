import request from '../utils/request';
import { query } from '../services/example';

export default {

    namespace: 'live',

    state: {
        data: 111
    },

    subscriptions: {
        setup ({ dispatch, history }) {  // eslint-disable-line
            history.listen(({ pathname }) => {
                if (pathname === '/live') {
                    dispatch({
                        type: 'live/fetch',
                    });
                }
            });
        },
    },

    effects: {
        *fetch ({ payload: count }, { call, put, select }) {  // eslint-disable-line
            let data = yield call(query, count)
            console.log(data)
            let a = yield select(state => state.live.data + 1)
            console.log(a)
            yield put({ type: 'save', payload: { lits: a } });
        },
    },

    reducers: {
        save (state, action) {
            console.log(state, action)
            return { ...state, ...action.payload };
        },
    },

};
