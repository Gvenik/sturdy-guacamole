import {
    CAT_FETCH_START,
    CAT_FETCH_SUCCESS,
    CAT_FETCH_FAIL,
} from './constants';

export interface CatInstanceType {
    id: string,
    url: string,
}

export interface ReducerState {
    isLoading: boolean,
    catArray: CatInstanceType[],
    lastLoadedCat: number,
    params: RequestParams,
}

export interface RequestParams {
    limit: number,
    page: number,
    category_ids: number,
    order: 'DESC',
}

export const initialState: ReducerState = {
    isLoading: true,
    catArray: [],
    lastLoadedCat: 0,
    params: {
        limit: 10,
        page: 1,
        category_ids: 0,
        order: 'DESC',
    },
};

/* eslint-disable default-case, no-param-reassign */
const contentReducer = (state: ReducerState = initialState, action: any): ReducerState => {
    switch (action.type) {
        case CAT_FETCH_START:
            return {
                ...state,
                isLoading: true,
                params: action.params,
            };
        case CAT_FETCH_SUCCESS:
            const returnObject = {
                ...state,
                isLoading: false,
            }
            if (action.reset) {
                returnObject.catArray = action.catArray;
            }
            else {
                returnObject.catArray = state.catArray.concat(action.catArray);
            }
            return returnObject;
        case CAT_FETCH_FAIL:
            return {
                ...state,
                isLoading: true,
            };
        default:
            return state;
    }
}

export default contentReducer;
