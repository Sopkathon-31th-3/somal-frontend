import React from 'react';
import styled from 'styled-components';
import container from '../assets/image/container.png';
import StepButton from 'components/common/StepButton';
import StepView from 'components/common/StepView';

function Step1() {
  return (
    <StyledRoot>
      <Container>
        <Main>
          <Title>소원을 말해보세영</Title>
          <Question>
            지금 가~장
            <br /> 갖고 싶은게 뭐야?
          </Question>
          <InputBox></InputBox>
        </Main>
        <StepView></StepView>
        <StepButton></StepButton>
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
