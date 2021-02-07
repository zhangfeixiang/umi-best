import { login } from '@/services/login';
import { queryCurrent } from '@/services/user';
import { Effect, Reducer } from 'umi';
import { Toast } from 'antd-mobile'

interface CurrentUser {
    name?: String;
    icon?: String;
    userid?: String;
}
export interface UserModelState {
    currentUser: CurrentUser;
}

export interface UserModelType {
    namespace: 'user',
    state: UserModelState;
    effects: {
        fetchCurrent: Effect,
    };
    reducers: {
        saveCurrentUser: Reducer<UserModelType>;
    }
}


const UserModel: UserModelType = {
    namespace: 'user',
    state: {
        currentUser: {}
    },
    effects: {
        *fetchCurrent({ _ }, { call, put }) {
            const res = yield call(queryCurrent);
            yield put({ type: 'saveCurrentUser', payload: res });
        },
        *login({ payload }, { call, put }) {
            const res = yield call(login, payload);
            if (res.status === 1) {
                yield put({ type: 'saveCurrentUser', payload: res })
            } else {
                Toast.fail(res.msg || '请求失败')
            }
        }
    },
    reducers: {
        saveCurrentUser(state, action) {
            return { ...state, currentUser: action.payload || {} };
        },
    },
};
export default UserModel;