import React from 'react';
import styled from 'styled-components';
import container from '../assets/image/container.png';
import StepButton from 'components/common/StepButton';
import StepView from 'components/common/StepView';
import { useRecoilState } from 'recoil';
import logo from '../assets/image/logo.svg';
import { userName } from 'atoms/atom';

function Step1() {
  const [_userName, setUserName] = useRecoilState(userName);

  const changeName = (e) => {
    if (e.target.value.length < 6) {
      setUserName(e.target.value);
    } else {
      alert('최대 5자 까지 입력 가능합니다');
    }
  };
  return (
    <StyledRoot>
      <Container>
        <Main>
          <Logo src={logo} />
          <Question>
            너의 이름을
            <br /> 알려줘~!
          </Question>
          <InputBox onChange={(e) => changeName(e)} value={_userName || ''}></InputBox>
        </Main>
        <StepView></StepView>
        <StepButton data={_userName}></StepButton>
      </Container>
    </StyledRoot>
  );
}

export default Step1;

const StyledRoot = styled.div`
  height: 100vh;
  width: 100%;
  background-color: #ee5959;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  width: 37rem;
  height: 60rem;
  left: 14px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url(${container});
  background-repeat: no-repeat;
`;

const Main = styled.div`
  display: flex;
  height: 60%;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

const Title = styled.h1`
  font-weight: bold;
  font-size: 2.4rem;
`;
const Question = styled.p`
  font-weight: 400;
  font-size: 1.8rem;
  text-align: center;
`;
const InputBox = styled.input`
  outline: none;
  border: none;
  width: 24.4rem;
  border-bottom: 0.2rem solid black;
  font-size: 1.8rem;
  font-family: Galmuri11;
  text-align: center;
  padding-bottom: 1rem;
`;

const Logo = styled.img`
  width: 20.4rem;
  height: 2rem;
  margin: 5.6rem 0 5.9rem 0;
`;
