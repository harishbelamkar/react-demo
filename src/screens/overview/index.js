import React, {useEffect} from "react";
import {Link,useLocation} from 'react-router-dom';
import styled from "styled-components";


const Header = styled.div`
  background: white;
  display: flex;
  width: 100%;
  height:100vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const LoginBox = styled.div`
  background: gray;
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 40vh;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  span {
    font-size: 22px;
    margin-bottom:40px;
    color: white;
  }
`;
const InputContainer = styled.input`
  background: transparent;
  margin-bottom:20px;
  color: white;
  width: 50%;
  border: none;
  border-bottom: 1px solid;
  outline:none;

  &::-webkit-input-placeholder {
    color: white;
  }
`;

const ButtonContainer = styled.div`
  display:flex;
  width:100%;
  align-items:center;
  justify-content: center;
  margin-top:20px;
`;
const Button = styled.button`
  width : 100px;
  `;

const OverViewScreen = (props) => {

    const location = useLocation();

    useEffect(() => {
        console.log(location.pathname); // result: '/secondpage'
        console.log(location.state); // result: 'some_value'
     }, [location]);


  return (
    <Header>
          User is logged in : {location.state.emailId}
          <ButtonContainer>
          <Link to = '/'>
            <Button>Logout</Button>
          </Link>
          </ButtonContainer>
    </Header>
  );
}

export default OverViewScreen;
