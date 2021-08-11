import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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

function SignUpScreen() {

  const history = useHistory();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  
  const submitButtonClicked = () => {

    if(!name){
        toast.error("Please enter name!")
        return;
      }

    if(!email){
        toast.error("Please enter email id!")
        return;
      }
      if(!password){
        toast.error("Please enter password!")
        return;
      }
      history.push('/');

  }

  const nameChanged = (e) => {
    console.log('emailChanged..',e.target.value);
    setName(e.target.value);
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
          <span>Sign Up Form</span>

          <InputContainer 
            type = 'name' 
            placeholder="Name" 
            name= "name"
            onChange={nameChanged}/>

          <InputContainer 
            type = 'email' 
            placeholder="Email-Id" 
            name= "email"
            onChange={emailChanged}/>

          <InputContainer 
            type = 'password' 
            placeholder="Password"
            name= "password" 
            onChange={passwordChanged}/>

        <ButtonContainer>
          <Button onClick={submitButtonClicked}>Submit</Button>
        </ButtonContainer>

      </LoginBox>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </Header>
  );
}

export default SignUpScreen;
