import { string } from "prop-types";
import React, { useState } from "react";

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

function App() {

  const [email, setEmail] = useState('', string);
  const [password, setPassword] = useState('', string);

  const loginButtonClicked = () => {
    console.log("loginButtonClicked",email,password);
  }
  const signUpButtonClicked = () => {
    console.log('signUpButtonClicked');
  }
  const emailChanged = (e) => {
    console.log('emailChanged..',e.target.value);
    setEmail(e.target.value);
  }
  const passwordChanged = (e) => {
    console.log("passwordChanged...",e.target.value);
    setPassword(e.target.value);
  }
  
  return (
    <Header>
      <LoginBox>
          <span>Login Form</span>
          <InputContainer 
            type = 'email' 
            placeholder="User Name" 
            name= "email"
            onChange={emailChanged}/>

          <InputContainer 
            type = 'password' 
            placeholder="Password"
            name= "password" 
            onChange={passwordChanged}/>

        <ButtonContainer>
          <Button onClick={loginButtonClicked}>Login</Button>
          <Button onClick={signUpButtonClicked}>Sign Up</Button>          
        </ButtonContainer>

      </LoginBox>
    </Header>
  );
}

export default App;
