import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { History, LocationState } from 'history';

import { RootState } from '../../redux/store';
import { categoryFetchStartCreator } from './actionCreators';
import { CatType } from "./reducer";
import { SidebarStyle, SidebarWrapperStyle, ContentStyle, SidebarItem } from './styles';

interface Props {
    children?: JSX.Element,
    history: History<LocationState>,
}

const SidebarLayout: React.FC<Props> = ({ history, children }) => {

    const isLoading = useSelector<RootState, boolean>(state => state.sidebarLayoutReducer.isLoading);
    const categoryArray = useSelector<RootState, CatType[]>(state => state.sidebarLayoutReducer.categoryArray);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(categoryFetchStartCreator());
    }, []);

    const getCategories = () => categoryArray.map((category: CatType) => {
        const { id, name } = category;
        return <SidebarItem key={id} onClick={() => history.push(`/${id}`)}>{name}</SidebarItem>
    })

    return <SidebarWrapperStyle>
        <SidebarStyle>
            {isLoading ? <span>loading...</span> : getCategories()}
        </SidebarStyle>
        <ContentStyle>
            {children}
        </ContentStyle>
    </SidebarWrapperStyle>
}

export default SidebarLayout;
