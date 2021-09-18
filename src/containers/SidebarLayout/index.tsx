import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { History, LocationState } from 'history';

import { RootState } from '../../redux/store';
import { categoryFetchStartCreator } from './actionCreators';
import { CatType } from "./reducer";

interface Props {
    children?: JSX.Element,
    history: History<LocationState>,
}

const SidebarLayout: React.FC<Props> = ({ history, children }) => {

    const isLoading = useSelector<RootState, boolean>(state => state.sidebarLayoutReducer.isLoading);
    const categoryArray = useSelector<RootState, CatType[]>(state => state.sidebarLayoutReducer.categoryArray);
    const selectedCategoryId = useSelector<RootState, number>(state => state.sidebarLayoutReducer.selectedCategoryId);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(categoryFetchStartCreator());
    }, []);

    const getCategories = () => categoryArray.map((category: CatType) => {
        const { id, name } = category;
        return <div key={id} onClick={() => history.push(`/${name}`, { categoryId: id })}>{name}</div>
    })

    return <div>
        {console.log(selectedCategoryId)!}
        {getCategories()}
        {children}
    </div>
}

export default SidebarLayout;
