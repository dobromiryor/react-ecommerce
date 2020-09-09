import styled from 'styled-components';

export const SignInAndSignUpContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  margin: 30px auto;

  @media screen and (max-width: 980px){
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;