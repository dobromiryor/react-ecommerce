import styled from 'styled-components';

export const CollectionPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CollectionTitle = styled.h1`
  font-size: 28px;
  margin-bottom: 25px;
`;

export const CollectionItemsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 15px;
  justify-items: center;
  margin-bottom: 30px;

  @media screen and (max-width: 800px){
    grid-template-columns: 1fr 1fr;
  }
`;