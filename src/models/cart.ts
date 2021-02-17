import { Effect, Reducer } from 'umi';

export interface CarytModelState { }

export interface CarytModelType {
    namespace: 'cart',
    state: CarytModelState;
    effects: {
        fetch: Effect;
    };
    reducers: {
        save: Reducer<CarytModelState>;
    };
}

const CarytModel: CarytModelType = {
    namespace: 'cart',
    state: {},
    effects: {
        *fetch({ payload }, { call, put }) {
            yield put({ type: 'save' });
        }
    },
    reducers: {
        save(state, action) {
            return { ...state, ...action.payload };
        }
    }
};
export default CarytModel