import {
    CATEGORY_FETCH_SUCCESS,
    CATEGORY_FETCH_FAIL,
    SET_SELECTED_CATEGORY,
    CATEGORY_FETCH_START,
    V1_CATEGORIES_URL,
} from './constants';
import { CatType } from "./reducer";
import httpRequest from "../../utils/httpRequest";

const actions = {
    categoryFetchStart: () => {
        return {
            type: CATEGORY_FETCH_START,
        };
    },

    categoryFetchSuccess: (categoryArray: CatType[]) => {
        return {
            type: CATEGORY_FETCH_SUCCESS,
            categoryArray,
        };
    },

    categoryFetchFail: () => {
        return {
            type: CATEGORY_FETCH_FAIL,
        };
    },

    setSelectedCategory: (selectedCategoryId: number) => {
        return {
            type: SET_SELECTED_CATEGORY,
            selectedCategoryId,
        };
    },
};

export const categoryFetchStartCreator = () => async (dispatch: any) => {
    try {
        dispatch(actions.categoryFetchStart());
        const result = await httpRequest({
            method: 'get',
            url: V1_CATEGORIES_URL,
        });
        if (result.status === 200) {
            dispatch(actions.categoryFetchSuccess(result.data));
        } else {
            dispatch(categoryFetchFailCreator());
        }
    }
    catch {
        dispatch(categoryFetchFailCreator());
    }
};

export const categoryFetchFailCreator = () => (dispatch: any) => {
    dispatch(actions.categoryFetchFail());
    setTimeout(() => {
        dispatch(categoryFetchStartCreator());
    }, 5000);
};

export const setSelectedCategoryCreator = (selectedCategoryId: number) => (dispatch: any) => {
    dispatch(actions.setSelectedCategory(selectedCategoryId));
};
