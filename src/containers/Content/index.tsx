import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { catFetchStartCreator } from './actionCreators';
import { RootState } from "../../redux/store";
import { RequestParams, CatInstanceType } from "./reducer";
import { ImageWrapperStyle, ContentWrapperStyle, GridStyle, Button } from "./styled";

interface Props {
    match: {
        params: {
            categoryId: string,
        }
    },
}

const Content: React.FC<Props> = ({ match }) => {
    const { categoryId } = match.params;

    const requestParams = useSelector<RootState, RequestParams>(state => state.contentReducer.params);
    const isLoading = useSelector<RootState, boolean>(state => state.contentReducer.isLoading);
    const catArray = useSelector<RootState, CatInstanceType[]>(state => state.contentReducer.catArray);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(catFetchStartCreator({
            ...requestParams,
            category_ids: parseInt(categoryId),
        }, true));
    }, [categoryId]);

    const getMoreCats = () => dispatch(catFetchStartCreator({
        ...requestParams,
        page: requestParams.page + 1,
    }, false));

    const getCats = () => catArray.map((cat: CatInstanceType, index: number) =>
        <ImageWrapperStyle key={index}>
            <img
                src={cat.url}
                alt={cat.id}
                loading='lazy'
            />
        </ImageWrapperStyle>)

    return <ContentWrapperStyle>
        <GridStyle>
            {getCats()}
        </GridStyle>
        {isLoading ? <span>loading...</span> : <Button type='button' onClick={() => getMoreCats()}>load more</Button>}
    </ContentWrapperStyle>
}

export default Content;
