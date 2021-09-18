import styled from 'styled-components';

export const SidebarStyle = styled.div`
  height: 100%;
  background-color: #F7DAD9;
  color: #550C18;
  padding: 2em;
  display: flex;
  flex-direction: column;
  gap: 3em;
  font-size: larger;
`;

export const SidebarWrapperStyle = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  background-color: #786452;
`;

export const ContentStyle = styled.div`
  flex-grow: 1;
  flex-shrink: 1;
  height: 100vh;
  overflow-y: scroll;
`;

export const SidebarItem = styled.div`
  cursor: pointer;
  :hover {
    color: #A5907E;
  }
`;
