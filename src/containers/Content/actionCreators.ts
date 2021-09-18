import {
    CAT_FETCH_START,
    CAT_FETCH_SUCCESS,
    CAT_FETCH_FAIL,
    V1_IMAGES_SEARCH_URL,
} from './constants';
import httpRequest from "../../utils/httpRequest";
import { RequestParams, CatInstanceType } from './reducer';

const actions = {

    catFetchStart: (params: RequestParams) => {
        return {
            type: CAT_FETCH_START,
            params,
        };
    },

    catFetchSuccess: (catArray: CatInstanceType[], reset: boolean) => {
        return {
            type: CAT_FETCH_SUCCESS,
            catArray,
            reset,
        };
    },

    catFetchFail: () => {
        return {
            type: CAT_FETCH_FAIL,
        };
    },
};

export const catFetchStartCreator = (params: RequestParams, reset: boolean) => async (dispatch: any) => {
    try {
        dispatch(actions.catFetchStart(params));
        const result = await httpRequest({
            method: 'get',
            url: V1_IMAGES_SEARCH_URL,
            params,
        });
        if (result.status === 200) {
            dispatch(actions.catFetchSuccess(result.data.map((cat: any) => ({ id: cat.is, url: cat.url })), reset));
        } else {
            dispatch(catFetchFailCreator(params, reset));
        }
    }
    catch {
        dispatch(catFetchFailCreator(params, reset));
    }
};

export const catFetchFailCreator = (params: RequestParams, reset: boolean) => (dispatch: any) => {
    dispatch(actions.catFetchFail());
    setTimeout(() => {
        dispatch(catFetchStartCreator(params, reset));
    }, 5000);
};
