import {
    CATEGORY_FETCH_START,
    SET_SELECTED_CATEGORY,
    CATEGORY_FETCH_SUCCESS,
    CATEGORY_FETCH_FAIL,
} from './constants';

export interface CatType {
    id: number,
    name: string,
}

export interface ReducerState {
    isLoading: boolean,
    categoryArray: CatType[],
    selectedCategoryId: number,
}

export const initialState: ReducerState = {
    isLoading: true,
    categoryArray: [],
    selectedCategoryId: -1,
};

/* eslint-disable default-case, no-param-reassign */
const sidebarLayoutReducer = (state: ReducerState = initialState, action: any): ReducerState => {
    switch (action.type) {
        case CATEGORY_FETCH_START:
            return {
                ...state,
                categoryArray: [],
                isLoading: true,
            };
        case SET_SELECTED_CATEGORY:
            return {
                ...state,
                selectedCategoryId: action.selectedCategoryId,
            };
        case CATEGORY_FETCH_SUCCESS:
            return {
                ...state,
                categoryArray: action.categoryArray,
                isLoading: false,
            };
        case CATEGORY_FETCH_FAIL:
            return {
                ...state,
                categoryArray: [],
                isLoading: true,
            };
        default:
            return state;
    }
}

export default sidebarLayoutReducer;
