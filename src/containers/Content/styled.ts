import styled from 'styled-components';

export const ImageWrapperStyle = styled.div`
  height: 500px;
  width: 500px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #A5907E;
`;

export const ContentWrapperStyle = styled.div`
  margin: 3rem;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  align-items: center;
`;

export const GridStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
  grid-gap: 1rem;
`;

export const Button = styled.button`
  width: 6rem;
`;
