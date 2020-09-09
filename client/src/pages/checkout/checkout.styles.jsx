import styled from 'styled-components';

export const CheckoutPageContainer = styled.div`
  width: 60%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 0;
  button {
    margin-left: auto;
    margin-top: 35px;
  }

  @media screen and (max-width: 800px){
    width: 95%;
  }
`;

export const CheckoutHeaderContainer = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid darkgrey;
`;

export const HeaderBlockContainer = styled.div`
  text-transform: capitalize;
  width: 23%;

  &:last-child {
    width: 8%;
  }

  @media screen and (max-width: 800px){
    width: 20%;

    &:last-child {
      width: 11%;
    }
  }
`;

export const BottomContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`

export const TotalContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 4px;
  font-size: 36px;
`

export const TotalTextContainer = styled.div`
  margin-left: auto;
  font-size: 36px;
`;

export const WarningContainer = styled.div`
  font-size: 10px;
`;